import Navigation from "../components/navigation";
import { getAllPostIds, getPostData } from "../lib/posts";
// import parse from "html-react-parser";

//marked记得加{}
// import { marked } from "marked";

import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.postId);

  return {
    props: {
      postData,
    },
  };
}

function post({ postData }) {
  return (
    <div className="w-[1024px] h-[100vh]  mx-auto">
      <Navigation />
      <div>
        <h1 className="text-[60px] mt-8 font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {postData.title}
        </h1>
        <div className="flex font-sans text-[20px] text-slate-400 mt-2">
          <p className="mr-8">{postData.date}</p>
          <p>
            <span className="underline">#Javascript</span>{" "}
            <span className="underline">#Css</span>
          </p>
        </div>
        <ReactMarkdown className="prose prose-lg max-w-none mx-auto mt-[80px]">
          {postData.markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
export default post;
