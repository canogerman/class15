import { useEffect } from "react";
import { usePosts } from "../store/usePosts";

export const ShowPosts = () => {
  const posts = usePosts((state) => state.posts);
  const { setPosts } = usePosts();

  useEffect(() => {
    setPosts();
  }, [setPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
