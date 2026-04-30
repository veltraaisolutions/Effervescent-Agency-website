import { NextResponse } from "next/server";
import { WEBHOOK_URL } from "@/lib/apply-utils";
import { venueInquirySchema } from "@/lib/validations/venue";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const parsed = venueInquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "B2B_INQUIRY",
        ...parsed.data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }
  } catch {
    // Return the same safe error response whether the webhook rejects or fails.
  }

  return NextResponse.json(
    { error: "Failed to send inquiry" },
    { status: 502 },
  );
}
