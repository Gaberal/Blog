import Navigation from "../components/Navigation";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCategory = [];
  allPostsData.map((postData) => {
    const category = postData.category.split("#");
    console.log(category);
    allCategory.push(...category);
  });
  let uniqueCategory = [...new Set(allCategory)];
  uniqueCategory = uniqueCategory.filter(function (item) {
    return item !== "";
  });
  console.log(uniqueCategory);
  return { props: { category: uniqueCategory } };
}
export default function category({ category }) {
  return (
    <div className="w-[1024px] h-screen relative mx-auto">
      <Navigation />
      <div className=" ">
        <h1 className="text-[64px] mt-8 font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Category
        </h1>
        <div className="w-[100%]  ">
          <div className="w-[500px] h-[100px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
            <ul className="flex flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-serif text-[24px] font-bold space-x-4">
              {category.map((item) => (
                <li>
                  #
                  <Link href={`/#${item}`} key={item}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
