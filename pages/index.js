import Navigation from "../components/navigation";
export default function Home() {
  return (
    <div className="w-[1024px] h-[100vh]  mx-auto">
      <Navigation />
      <div className="flex flex-row justify-between ">
        <div className="  flex flex-col w-full mt-5">
          <h1 className="text-[64px] mt-8 font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            This is Gabriel's Blog
          </h1>
          <img
            className="w-[400px] mt-[80px] opacity-80 justify-self-end"
            src="/assets/dog-jump.png"
            alt="dog-jump"
          />
        </div>
        <div className="  flex flex-col items-center p-10 ">
          <img
            className="w-[100px] h-[100px] rounded-lg mt-[80px]"
            src="https://i2.wangmingguan.com/981576b4300221cd37da386c/8e1663bc3202/de433fed6d5c/dd433fec6c54758d6e.jpg"
            alt="avatar"
          />
          <p className="mt-5 text-slate-900 text-[20px] font-bold">Gabriel</p>
          <p className="text-slate-600 mt-4">University of XXXXXX</p>
          <p className="text-slate-600">XXXXXXXXX@gmail.com</p>
          <p className="text-slate-600">XXXXX@XXXXX.ac.uk</p>
          <p className="text-slate-600">XXXXXX,Hebei,China</p>
        </div>
      </div>
    </div>
  );
}
