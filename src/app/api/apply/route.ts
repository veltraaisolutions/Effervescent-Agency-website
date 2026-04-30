import { NextResponse } from "next/server";
import { WEBHOOK_URL } from "@/lib/apply-utils";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const responseText = await response.text().catch(() => "");

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Webhook rejected application",
          debug: {
            status: response.status,
            statusText: response.statusText,
            body: responseText,
          },
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      debug: {
        status: response.status,
        statusText: response.statusText,
        body: responseText,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to reach application webhook",
        debug: {
          message: error instanceof Error ? error.message : "Unknown error",
        },
      },
      { status: 502 },
    );
  }
}
