import { useEffect, useState, type ReactNode } from "react";
import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImage from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];
        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          }
        });
        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }

      setIsFetching(false);

    }
    fetchPosts();
  }, []);

  let content: ReactNode;

  if (isFetching) {
    content = <p id="loading-fallback">Loading...</p>;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  return (
    <>
      <main className="App">
        <img src={fetchingImage} />
        {content}
      </main>
    </>
  );
}


export default App;
