import Navigation from "../components/navigation";
import Link from "next/link";
export default function category() {
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
              <li>
                <Link href="/">#Html</Link>
              </li>
              <li>
                <Link href="/">#Javascript</Link>
              </li>
              <li>
                <Link href="/">#Css</Link>
              </li>
              <li>
                <Link href="/">#React.js</Link>
              </li>
              <li>
                <Link href="/">#Node.js</Link>
              </li>
              <li>
                <Link href="/">#Webpack.js</Link>
              </li>
              <li>
                <Link href="/">#Data Structure</Link>
              </li>
              <li>
                <Link href="/">#Network</Link>
              </li>
              <li>
                <Link href="/">#OS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
