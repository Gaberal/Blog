import Link from "next/link";
export default function Navigation() {
  return (
    <>
      <div className="h-[64px]  flex justify-between items-center">
        <div>
          <Link href="/">
            <img
              className="w-[48px] h-[48px] rounded-full cursor-pointer"
              src="https://i2.wangmingguan.com/981576b4300221cd37da386c/8e1663bc3202/de433fed6d5c/dd433fec6c54758d6e.jpg"
              alt="avatar"
            />
          </Link>
        </div>
        <ul className="flex gap-8 font-sans text-[20px] font-bold text-slate-600">
          <li>
            <Link href="/posts">Blog</Link>
          </li>
          <li>
            <Link href="/category">Catogery</Link>
          </li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}
