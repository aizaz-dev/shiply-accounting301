import { NextResponse } from "next/server";

export async function GET() {
  const list = ["azaz", "zain","hossam"];
  return NextResponse.json({ list });
}

export async function POST() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
