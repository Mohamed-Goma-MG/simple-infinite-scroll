import { API_BASE, API_POSTS, PARAM_LIMIT, type postsData } from "./global";
import { useCallback, useEffect, useRef, useState } from "react";
import Posts from "./components/Posts";
import Header from "./components/Header";
import LoadingSpin from "./components/LoadingSpin";
import LoadMore from "./components/LoadMore";

export default function App() {
  let [posts, setPosts] = useState<postsData | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const getData = useCallback((posts: postsData | null) => {
    const start = !posts ? 0 : posts.length;
    console.log("posts length:", posts?.length, "the start is", start);
    fetch(`${API_BASE}${API_POSTS}?${PARAM_LIMIT}&start=${start}`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setPosts(() => {
          const currData = posts || [];
          return [...currData, ...result];
        });
      });
  }, []);

  useEffect(() => {
    getData(posts);
  }, []);

  return (
    <>
      <Header />
      <div className="content h-full overflow-y-auto" ref={contentRef}>
        {posts ? (
          <Posts posts={posts} />
        ) : (
          <>
            <h1>Hello, World!</h1>
            <LoadingSpin />
          </>
        )}
      </div>
      <LoadMore contentRef={contentRef} handleClick={() => getData(posts)} />
    </>
  );
}
