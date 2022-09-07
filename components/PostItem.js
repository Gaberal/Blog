import Link from "next/link";
export default function PostItem({ post }) {
  return (
    <>
      <div className="flex font-serif">
        <div className="w-[280px] ">
          <h2 className=" text-[24px] text-slate-600">{post.date}</h2>
        </div>
        <div className="w-full">
          <h2 className="text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <Link href={`/${post.id}`}>{post.title}</Link>
          </h2>
          <p className="text-[20px] mt-4 text-slate-400">
            <span className="underline">#Javascript</span>{" "}
            <span className="underline">#Css</span>
          </p>
          <p className="text-[20px mt-4 text-slate-600]">
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine
            intervention or the kinship of all living things but I tell you
            Jerry at that moment, I was a marine biologist.
          </p>
        </div>
      </div>
    </>
  );
}
