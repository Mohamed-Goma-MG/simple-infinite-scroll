import type { postsData, postProps } from "../global";

export default function Posts({ posts }: { posts: postsData }) {
  return (
    <div className="posts w-7/12 min-w-lg max-w-2xl mx-auto">
      {posts.map((post, i) => {
        return <Post key={i} data={post} />;
      })}
    </div>
  );
}

function Post({ data }: { data: postProps }) {
  return (
    <div className="post bg-blue-50 border border-blue-200 rounded-md px-5 py-6 mt-4">
      <div className="head flex justify-between">
        <h3 className="title">{data.title}</h3>
        <div className="views">{data.views}</div>
      </div>
      <div className="desc">{data.desc}</div>
      <div className="footer">
        <button className="likes">{data.likes}</button>
        <button className="share">share</button>
      </div>
    </div>
  );
}
