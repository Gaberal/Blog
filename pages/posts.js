import Navigation from "../components/Navigation";
import PostItem from "../components/PostItem";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function posts({ allPostsData }) {
  return (
    <div className="w-[1024px] h-[100vh]  mx-auto">
      <Navigation />
      <div>
        <h1 className="text-[64px] mt-8 font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          All Posts
        </h1>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
          placeholder="你想找的文章是:"
        />
        <div className="flex flex-col mt-[60px] gap-y-12">
          {allPostsData.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
