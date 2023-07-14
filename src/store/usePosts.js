import axios from "axios"; // axios es otra forma en vez de utilizar fetch
import { create } from "zustand";

export const usePosts = create((set) => {
  return {
    posts: [],
   setPosts: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );     
      set({ posts: data });
    },
  };
});
