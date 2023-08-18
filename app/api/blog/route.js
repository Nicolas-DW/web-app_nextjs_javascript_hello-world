import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "app/posts");
  const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => {
    return fileName.endsWith(".md");
  });

  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      content: remark().use(html).processSync(matterResult.content).toString(),
    };
  });

  return NextResponse.json(posts);
}