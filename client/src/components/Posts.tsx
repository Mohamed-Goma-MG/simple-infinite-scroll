import type { postsData, postProps } from "../global";
import kBased from "../utils/kBased";

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
    <div className="post bg-blue-50 border border-blue-200 rounded-md px-5 py-6 mt-4 shadow-gray-200 shadow-md">
      <div className="head flex justify-between items-center">
        <h3 className="title text-[#222] text-[22px] font-bold">
          {data.title}
        </h3>
        <div className="views text-[#666] text-sm">{kBased(data.views)}</div>
      </div>
      <div className="desc text-[#444] font-normal indent-3 px-4 mt-3 mb-4">
        {data.desc}
      </div>
      <div className="footer flex justify-between">
        <button className="likes w-[150px] py-2 bg-blue-300/70 rounded-2xl shadow shadow-blue-400">
          {kBased(data.likes)} likes
        </button>
        <button className="share w-[150px] py-2 bg-blue-300/70 rounded-2xl shadow shadow-blue-400">
          share
        </button>
      </div>
    </div>
  );
}
