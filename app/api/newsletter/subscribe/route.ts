import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import NewsletterSubscriber from "@/models/NewsletterSubscriber";
import { Resend } from "resend";

async function sendWelcomeEmail(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "updates@bizmint.co.in";

  // Use test onboarding sender if using Resend default test credentials
  const senderAddress = apiKey && apiKey.startsWith("re_") && fromEmail === "updates@bizmint.co.in"
    ? "onboarding@resend.dev"
    : fromEmail;

  if (!apiKey) {
    console.warn("⚠️ [Newsletter] RESEND_API_KEY not configured. Confirmation email skipped.");
    return;
  }

  try {
    const resend = new Resend(apiKey);
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f7;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 30px 0;">
          <tr>
            <td align="center">
              <table width="580" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e8e8e8;">
                
                <!-- Header (Bizmint theme matching) -->
                <tr>
                  <td style="background: linear-gradient(135deg, #0f2354 0%, #1e40af 100%); padding: 35px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.02em;">
                      📢 Subscription Confirmed!
                    </h1>
                    <p style="margin: 8px 0 0 0; color: #93c5fd; font-size: 13px; font-weight: 500;">
                      Bizmint Live Regulatory Alerts
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 16px 0; font-size: 15px; color: #374151; line-height: 1.6; font-weight: 500;">
                      Hello,
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 15px; color: #374151; line-height: 1.6;">
                      Thank you for subscribing to **Bizmint Regulatory Alerts**. Your email has been successfully registered to receive our daily digest of crucial updates.
                    </p>
                    
                    <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px;">
                      <p style="margin: 0; font-size: 14px; color: #1e293b; font-weight: 600;">
                        What you will receive:
                      </p>
                      <p style="margin: 6px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
                        • Real-time RBI Press Releases & Speeches<br>
                        • Important Notifications & Regulatory Instructions<br>
                        • Policy changes, Master Directions, and Draft Frameworks
                      </p>
                    </div>

                    <p style="margin: 0 0 30px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
                      All notifications are parsed, stripped of boilerplate HTML, and reformatted in a clean layout to save you hours of manual tracking.
                    </p>

                    <!-- CTA Button -->
                    <div style="text-align: center;">
                      <a href="https://bizmint.co.in/updates" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 30px; border-radius: 10px; font-weight: 700; font-size: 13px; text-decoration: none; box-shadow: 0 4px 6px rgba(37,99,235,0.15);">
                        View Updates Portal →
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #fafafa; border-top: 1px solid #f1f1f1; padding: 20px 30px; text-align: center;">
                    <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 1.5;">
                      You received this email because you subscribed to daily alerts on the Bizmint website.<br>
                      © ${new Date().getFullYear()} Bizmint LLP · Noida, Uttar Pradesh, India
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: `Bizmint Alerts <${senderAddress}>`,
      to: [email],
      subject: "📢 Bizmint Daily Regulatory Alerts Subscription Confirmed",
      html: emailHtml,
    });
    console.log(`✉️ [Newsletter] Confirmation email sent to ${email}`);
  } catch (err: any) {
    console.error(`❌ [Newsletter] Failed to send email to ${email}:`, err.message);
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const subscriber = await NewsletterSubscriber.findOne({ email });

    if (subscriber) {
      if (subscriber.status === "subscribed") {
        return NextResponse.json(
          { error: "This email address is already subscribed." },
          { status: 400 }
        );
      } else {
        subscriber.status = "subscribed";
        await subscriber.save();
        
        // Send confirmation welcome email
        sendWelcomeEmail(email).catch(err => console.error("Welcome email async error:", err));

        return NextResponse.json({ 
          success: true, 
          message: "Successfully re-subscribed!" 
        });
      }
    }

    await NewsletterSubscriber.create({ email });
    
    // Send confirmation welcome email
    sendWelcomeEmail(email).catch(err => console.error("Welcome email async error:", err));
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for subscribing!" 
    });
  } catch (error: any) {
    console.error("Newsletter subscription error", error);
    return NextResponse.json(
      { error: "Failed to process subscription. Please try again." }, 
      { status: 500 }
    );
  }
}
