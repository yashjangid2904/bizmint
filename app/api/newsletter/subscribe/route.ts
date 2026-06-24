import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import NewsletterSubscriber from "@/models/NewsletterSubscriber";
import { Resend } from "resend";

async function sendWelcomeEmail(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

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
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f7;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f7; padding: 30px 0;">
          <tr>
            <td align="center">
              <table width="580" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #e8e8e8;">
                
                <!-- Header Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #16a34a 0%, #0d9488 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.02em;">
                      Welcome to Bizmint
                    </h1>
                    <p style="margin: 8px 0 0 0; color: #dcfce7; font-size: 14px; font-weight: 500;">
                      Your Portal to Real-time Regulatory Intelligence
                    </p>
                  </td>
                </tr>

                <!-- Content Body -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 16px 0; font-size: 16px; color: #374151; line-height: 1.6;">
                      Hello,
                    </p>
                    <p style="margin: 0 0 24px 0; font-size: 15px; color: #4b5563; line-height: 1.6;">
                      Thank you for subscribing to the Bizmint newsletter. You are now part of an elite community of compliance officers, legal professionals, and business executives who stay informed about the latest regulatory developments.
                    </p>
                    
                    <p style="margin: 0 0 16px 0; font-size: 15px; color: #374151; font-weight: 600; line-height: 1.6;">
                      Here is what you will receive directly in your inbox:
                    </p>

                    <!-- Features Table -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <!-- Row 1 -->
                            <tr>
                              <td valign="top" style="padding-bottom: 16px; width: 40%; font-size: 14px; font-weight: 700; color: #1e293b; padding-right: 10px;">
                                Real-time RBI Press Releases:
                              </td>
                              <td valign="top" style="padding-bottom: 16px; width: 60%; font-size: 14px; color: #475569; line-height: 1.5;">
                                Immediate details on regulatory statements, instructions, and reports.
                              </td>
                            </tr>
                            <!-- Row 2 -->
                            <tr>
                              <td valign="top" style="padding-bottom: 16px; font-size: 14px; font-weight: 700; color: #1e293b; padding-right: 10px;">
                                RBI Notifications & Circulars:
                              </td>
                              <td valign="top" style="padding-bottom: 16px; font-size: 14px; color: #475569; line-height: 1.5;">
                                Critical policy amendments, master directions, and compliance deadlines.
                              </td>
                            </tr>
                            <!-- Row 3 -->
                            <tr>
                              <td valign="top" style="padding-bottom: 16px; font-size: 14px; font-weight: 700; color: #1e293b; padding-right: 10px;">
                                Draft Guidelines & Consultations:
                              </td>
                              <td valign="top" style="padding-bottom: 16px; font-size: 14px; color: #475569; line-height: 1.5;">
                                Early warnings and visibility on upcoming policy changes.
                              </td>
                            </tr>
                            <!-- Row 4 -->
                            <tr>
                              <td valign="top" style="font-size: 14px; font-weight: 700; color: #1e293b; padding-right: 10px;">
                                Actionable Checklists:
                              </td>
                              <td valign="top" style="font-size: 14px; color: #475569; line-height: 1.5;">
                                Operational tools to implement new compliance directives smoothly.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA Button -->
                    <div style="text-align: center; margin-bottom: 30px;">
                      <a href="https://bizmint.co.in/updates" style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 14px; text-decoration: none; box-shadow: 0 4px 6px rgba(22,163,74,0.15);">
                        View Latest Updates Portal
                      </a>
                    </div>

                    <!-- Contact -->
                    <p style="margin: 0; font-size: 14px; color: #4b5563; text-align: center; line-height: 1.6;">
                      If you have any questions or feedback, please reach out to us at <a href="mailto:info@bizmint.co.in" style="color: #16a34a; text-decoration: none; font-weight: 500;">info@bizmint.co.in</a>.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #fafafa; border-top: 1px solid #f1f1f1; padding: 20px 30px; text-align: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
                    <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 1.5;">
                      You received this email because you subscribed to compliance updates on the Bizmint website.<br>
                      © ${new Date().getFullYear()} Bizmint. All rights reserved.
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

    const { data, error } = await resend.emails.send({
      from: `Bizmint <${fromEmail}>`,
      to: [email],
      subject: "Welcome to Bizmint",
      html: emailHtml,
    });

    if (error) {
      console.error(`❌ [Newsletter] Failed to send email to ${email}:`, error);
    } else {
      console.log(`✉️ [Newsletter] Confirmation email sent to ${email}:`, data);
    }
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
