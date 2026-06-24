import { NextResponse } from "next/server";
import { runAllRbiScrapers } from "@/lib/rbiScraper";

export async function POST(req: Request) {
  try {
    console.log("Manual trigger: Running RBI Scrapers...");
    const stats = await runAllRbiScrapers();
    
    return NextResponse.json({
      success: true,
      message: "Scraping completed successfully.",
      stats,
    });
  } catch (error: any) {
    console.error("Failed to run RBI scrapers", error);
    return NextResponse.json(
      { error: "Failed to run RBI scrapers", details: error.message },
      { status: 500 }
    );
  }
}
export const maxDuration = 60; // Allow function to run up to 60 seconds (pro plan on Vercel) if needed
