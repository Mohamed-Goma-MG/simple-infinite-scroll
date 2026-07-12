export const API_BASE = "http://localhost:3000/api";
export const API_POSTS = "/posts";
export const PARAM_LIMIT = "limit=10";

export type postsData = postProps[];

export type postProps = {
  id: number;
  title: string;
  desc: string;
  likes: number;
  views: number;
};
