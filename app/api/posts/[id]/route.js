import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(request, { params }) {
  console.log("HIT");

  const id  = params.id
  console.log("id", id);
  const postsDirectory = path.join(process.cwd(), "app/posts");
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return NextResponse.json({
    id,
    ...matterResult.data,
    content: matterResult.content,
  });
}
