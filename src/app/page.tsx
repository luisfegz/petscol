import Navbar from "@/components/global/Navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import { SparklesCore } from "@/components/global/sparkles";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constant";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
        <section 
            className="
              !overflow-visible 
              relative flex flex-col antialiased 
              inset-0 h-full w-full items-center px-5 py-0 
            "
        >
          <div
            className="
              flex flex-col mt-[-100px] md:mt-[-50px]
            "
          >
            {/* <-----------------------------------------------------------------> */} 
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <Button
                    size={'lg'}
                    className="
                      p-8 mb-8 text-2xl w-full sm:w-fit border-t-2 
                      rounded-full border-[#4D4D4D] bg-[#1F1F1F] 
                      hover:bg-white group transition-all flex items-center justify-center
                      gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500
                    "
                  >
                    <span 
                      className="
                        bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 
                        to-neutral-600 font-sans group-hover:bg-gradient-to-r 
                        group-hover:from-black goup-hover:to-black
                      "
                    >
                    Petcol
                    </span>
                  </Button>
                  <h1 
                    className="
                      text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b 
                    from-white to-neutral-600 font-sans font-bold
                    "
                  >
                    Mi corazon esta lleno de huellas
                  </h1>
                </div>
              }
            />
            
              
            {/* <--------------------------------------------------------------> */}
          </div>
        </section>
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponent/>
        </section>
    </main>
  );
}
