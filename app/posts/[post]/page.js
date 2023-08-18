"use client";
import { PageLayout } from "../../components/page-layout";
import { usePost } from "../../services/use-post";

export default function Page({ params }) {
  const id = params.post;
  const { post, isLoading, isError } = usePost(id);

  return (
    <PageLayout>
      <div className="content-layout">
        {isLoading && <div>Loading posts...</div>}
        {isError && <div>Error loading posts</div>}
        {!isError && !isLoading && (
          <>
            <h1 id="page-title" className="content__title">
              {post.title}
            </h1>
            <div>{post.content}</div>
          </>
        )}
      </div>
    </PageLayout>
  );
}
