import { NextResponse, NextRequest } from "next/server";

//List data
export async function GET(req: NextRequest) {
  const data = {
    text: "Hello word",
  };

  return NextResponse.json(data);
}

//Create data
export async function POST(req: NextRequest) {
  const res = await req.json();
  return NextResponse.json(res);
}
