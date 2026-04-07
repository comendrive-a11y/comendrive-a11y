import { NextResponse } from "next/server";
import crypto from "crypto";

function getBokunHeaders(method: string, path: string) {
  const accessKey = process.env.BOKUN_ACCESS_KEY;
  const secretKey = process.env.BOKUN_SECRET_KEY;

  if (!accessKey || !secretKey) {
    throw new Error("Bokun environment variables eksik");
  }

  const date = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const stringToSign = `${date}${accessKey}${method.toUpperCase()}${path}`;

  const signature = crypto
    .createHmac("sha1", secretKey)
    .update(stringToSign)
    .digest("base64");

  return {
    "X-Bokun-Date": date,
    "X-Bokun-AccessKey": accessKey,
    "X-Bokun-Signature": signature,
    "Content-Type": "application/json;charset=UTF-8",
  };
}

export async function GET() {
  try {
    const domain = process.env.BOKUN_DOMAIN;

    if (!domain) {
      return NextResponse.json(
        { error: "BOKUN_DOMAIN eksik" },
        { status: 500 }
      );
    }

    const path = "/booking.json/activity-booking-option?lang=EN";
    const headers = getBokunHeaders("GET", path);

    return NextResponse.json({
      status: "ready",
      domain,
      path,
      headersCreated: !!headers["X-Bokun-Signature"],
      message: "Bokun imza sistemi hazır",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Bokun header oluşturulamadı",
        detail: error instanceof Error ? error.message : "unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json({
    status: "waiting-payment-provider",
    message: "HalkÖde hazır olduğunda reserve akışı burada aktif edilecek",
  });
}
