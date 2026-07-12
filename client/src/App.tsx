import { API_BASE, API_POSTS, PARAM_LIMIT, type postsData } from "./global";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Header from "./components/Header";
import LoadingSpin from "./components/LoadingSpin";

const getData = () => {
  return fetch(`${API_BASE}${API_POSTS}?${PARAM_LIMIT}`);
};

export default function App() {
  let [posts, setPosts] = useState<postsData | null>(null);

  useEffect(() => {
    getData()
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        console.log(result);
        setPosts(result);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="content h-full overflow-y-auto">
        {posts ? (
          <Posts posts={posts} />
        ) : (
          <>
            <h1>Hello, World!</h1>
            <LoadingSpin />
          </>
        )}
      </div>
    </>
  );
}
