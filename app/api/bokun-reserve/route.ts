import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ready",
    message: "Bokun reserve endpoint aktif",
  });
}

export async function POST() {
  try {
    return NextResponse.json({
      status: "ready",
      message: "Bokun reserve endpoint aktif",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "reserve endpoint çalışmadı" },
      { status: 500 }
    );
  }
}
