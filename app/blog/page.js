"use client";
import { PageLayout } from "../components/page-layout";
import { usePosts } from "../services/use-posts";

const Posts = () => {
  const { posts, isLoading, isError } = usePosts();

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Blog Posts
        </h1>
          {isLoading && <div>loading posts</div>}
          {isError && <div>Error loading posts</div>}
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
};

export default Posts;
