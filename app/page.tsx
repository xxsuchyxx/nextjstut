import Image from "next/image";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
             <FloatingNav navItems={[
                 {name:'Home', link:'/', icon:<Image src="/home.svg" width={20} height={20} alt="home"/>}
             ]} />
              <Hero />
              <Grid />
          </div>
    </main>
  );
}
