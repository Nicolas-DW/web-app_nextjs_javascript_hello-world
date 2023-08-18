import { NextResponse } from "next/server";

export async function GET() {
  const posts = [
    { id: 1, title: "First Post", content: "This is my first post" },
    { id: 2, title: "Second Post", content: "This is my second post" },
    { id: 3, title: "Third Post", content: "This is my third post" },
  ];

  return NextResponse.json(posts);
}