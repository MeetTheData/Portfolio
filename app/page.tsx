'use client'

import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Heroo from "@/components/Hero2";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from '../node_modules/react-icons/fa'
//import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Heroo/>
        <Grid/>
        <RecentProjects/>
        {/* <Clients/> */}
        <Experience/>
        <Footer/>
      </div>
    </main>
  );
}
