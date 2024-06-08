import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {

  return (
    <main className="main ">
      <Navbar />
      <div className="home sm:p-8">
        <div className="sm:flex  sm:flex-row">
          <div className="sm:ml-16 mr-10 pb-28 uppercase mt-16">
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
            <ImageCard imgsrc={"/home1.jpg"} />
            <ImageCard imgsrc={"/home2.jpg"} />
          </div>
          <div>
            <div className="sm:w-3/5 sm:mr-4 pt-2 pl-2 pr-2 pb-2 bg-white rounded-lg">
              <Image loading="lazy" src={"/home3.jpg"} alt={"besties"} height={1000} width={1200} />
            </div>
            <div className="sm:w-3/5 sm:mr-4 mt-2 pt-2 pl-2 pr-2 pb-2 bg-white rounded-lg">
              <Image src={"/home4.jpg"} alt={"besties"} height={1000} width={1200} />
            </div>
          </div>
        </div>
      </div>
      <div className='memories'>
        <div>
          <div>
            <div className="text-center sm:pt-20">
              <h2 className=''>
                Capturing <span> Lasting </span> Memories.
              </h2><br />

              <p className="capitalize text-gray-500 text-xl">
                friends don't let you do stupid things…alone.
              </p>
            </div>
            <br /><br />
            <div className="images-card">
              <div className="sm:flex sm:flex-row">
                <div className="sm:flex sm:flex-col sm:w-1/4">
                  <div>
                    <Image loading="lazy" src={`/memory1.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory3.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                </div>
                <div className="sm:flex sm:h-full sm:flex-col">
                  <div className="sm:mb-2  sm:w-full ">
                    <Image loading="lazy" src={`/memory2.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div className="sm:w-full ">
                    <img src={`https://thumbs.dreamstime.com/b/life-better-friends-black-white-handwritten-letterin-lettering-positive-quote-motivational-inspirational-phrase-96397848.jpg`} alt="memory" height={200} width={1000} />
                  </div>
                </div>
                <div>
                  <div>
                    <Image loading="lazy" src={`/memory4.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div className="">
                    <Image loading="lazy" src={`/memory5.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:flex-row">
                <div>
                  <div>
                    <Image loading="lazy" src={`/memory9.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <img src={`https://thumbs.dreamstime.com/b/food-friends-sunshine-hand-drawn-lettering-quote-white-background-fun-brush-ink-inscription-photo-overlays-greeting-93418253.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div className="sm:flex sm:flex-row">
                    <div>
                      <Image loading="lazy" src={`/memory7.jpg`} alt="memory" height={1000} width={1000} />
                    </div>
                    <div>
                      <Image loading="lazy" src={`/memory14.jpg`} alt="memory" height={1000} width={1000} />
                    </div>
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory13.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div className="sm:flex sm:flex-row">
                    <div>
                      <div>
                        <Image loading="lazy" src={`/memory18.jpg`} alt="memory" height={1000} width={1000} />
                      </div>
                      <div>
                        <Image loading="lazy" src={`/home2.jpg`} alt="memory" height={1000} width={1000} />
                      </div>
                    </div>
                    <div>
                      <Image loading="lazy" src={`/memory20.jpg`} alt="memory" height={1000} width={1000} />
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-row">
                    <div>
                      <Image loading="lazy" src={`/home1.jpg`} alt="memory" height={1000} width={1000} />
                    </div>

                  </div>
                </div>
                <div>
                  <div>
                    <Image loading="lazy" src={`/memory17.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory8.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory15.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <img src={`https://w0.peakpx.com/wallpaper/416/371/HD-wallpaper-friendship-loveit-cute-famous-friendly-friendship-quote-friendship-quotes-funny-inspirational-love-lovelife-lovely-lovemyjob-lovequotes-lover-loveyou-loveyourself.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory10.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory16.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory6.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                  <div>
                    <Image loading="lazy" src={`/memory19.jpg`} alt="memory" height={1000} width={1000} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div>
          <h2 className="sm:pt-6 sm:pb-6">
            About Us
          </h2>
        </div>
        <div className="sm:flex sm:flex-col">
          <div className="sm:flex sm:flex-row sm:justify-center sm:space-x-12 sm:mb-8">
            <div className="sm:w-1/6 sm:h-1/6">
              <Image className="sm:rounded-full" src={"/aman.jpg"} alt="desc" height={1000} width={1000} loading="lazy" />
              <p className="name text-center text-xl pt-4">
                Aman
              </p>
            </div>
            <div className="sm:w-1/6 sm:h-1/6">
              <Image className="sm:rounded-full" src={"/abhinav.jpg"} alt="desc" height={1000} width={1000} loading="lazy" />
              <p className="name text-center text-xl pt-4">
                Abhinav
              </p>
            </div>
            <div className="sm:w-1/6 sm:h-1/6">
              <Image className="sm:rounded-full" src={"/anshu.jpg"} alt="desc" height={1000} width={1000} loading="lazy" />
              <p className="name text-center text-xl pt-4">
                Anshu
              </p>
            </div>
          </div>
          <div className="sm:flex sm:flex-row sm:justify-center sm:space-x-12 sm:mb-8">
            <div className="sm:w-1/6 sm:h-1/6">
              <img className="sm:rounded-full" src={"/deepika1.jpg"} alt="desc" height={1000} width={1000} loading="lazy" />
              <p className="name text-center text-xl pt-4">
                Deepika
              </p>
            </div>
            <div className="sm:w-1/6 sm:h-1/6">
              <Image className="sm:rounded-full" src={"/rajat.jpg"} alt="desc" height={1000} width={1000} loading="lazy" />
              <p className="name text-center text-xl pt-4">
                Rajat
              </p>
            </div>
            <div className="sm:w-1/6 sm:h-1/6">
              <img className="sm:rounded-full" src={"/tanishka1.jpg"} alt="desc" height={1000} width={1000} loading="lazy" />
              <p className="name text-center text-xl pt-4">
                Tanishka
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-black p-4 text-center text-white">
        <p>
          Made with love ❤ by <a target="_blank" href="https://instagram.com/__a_man_7.0" className="text-none">
          @Aman
          </a>
        </p>
      </div>
    </main>
  );
}
