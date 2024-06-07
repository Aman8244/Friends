import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main className="main ">
      <Navbar/>
      <div className="home sm:p-8">
        <div className="sm:flex sm:flex-row">
          <div className="uppercase mt-16">
            <h1 className="quote-home font-semibold font-serif text-yellow-400">
              Life is
            </h1>
            <h1 className="quote-home font-semibold font-serif text-yellow-400">
              Beautiful
            </h1>
            <h1 className="quote-home font-semibold font-serif text-yellow-400">
              Together
            </h1>
          </div>
          <div className="ml-4 mr-4">
            <ImageCard imgsrc={"/home1.jpg"}/>
            <ImageCard imgsrc={"/home2.jpg"}/>
          </div>
          <div className="sm:w-3/5 sm:mr-4 pt-2 pl-2 pr-2 pb-8 bg-white rounded-lg">
            <Image loading="lazy" src={"/home3.jpg"} alt={"besties"} height={1000} width={1200} />
          </div>
        </div>
      </div>
    </main>
  );
}
