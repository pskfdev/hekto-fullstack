import { NextResponse, NextRequest } from "next/server";

//Read one data
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  return NextResponse.json({"id": id, "methode": "Read one"});
}

//Update data
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    return NextResponse.json({"id": id, "methode": "Update"});
}

//Delete data
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
  
    return NextResponse.json({"id": id, "methode": "Delete"});
}
