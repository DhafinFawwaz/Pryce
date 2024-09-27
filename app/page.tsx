"use client"

import Link from "next/link";
import useWindowDimensions from "./hooks/useWindowDimension";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import circle_tl from "../public/images/ellipse_tl.png"
import circles_bottom from "../public/images/bottom_pattern.png"
import Image from "next/image";

type ComponentType = {
  text: string,
  href?: string
}

const BackgroundGradient = 'bg-gradient-to-t from-slate-200 from-64% to-white-300 to-34%'

function BeautifulLink({text,href = '#'}: ComponentType): JSX.Element {
  return (
    <Link 
      className={
        cn(
          buttonVariants({variant:"default"}),
          "bg-purple-600 font-bold w-fit text-[20px] px-6 py-7 rounded-lg"
        )
      } 
      href={`${href}`}
    >
      {text}
    </Link>
  )
}

function DesktopView(): JSX.Element {
  const {height} = useWindowDimensions();
  const scrollHeight = 1100;

  return (
    <div 
      className={`h-[1145px] bg-center bg-contain bg-no-repeat static flex justify-center items-center ${BackgroundGradient}`}
    >
      <Image 
          src={circles_bottom.src} 
          alt="Background Patterns"
          style={{
            minWidth: '1650.82px',
            height: 'auto'
          }}
          width={1650.82}
          height={1068.97}
          className={(height! < scrollHeight) ? `absolute top-[30rem]` : `fixed bottom-0`}  
        />
      <Image 
        src={circle_tl.src} 
        alt="Background Patterns" 
        width={300}
        height={300}
        className="absolute top-0 left-0 2xl:block hidden"  
      />
      <div className="absolute top-[7rem] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
        <h1 className="text-[64px] text-center font-Rubik font-bold max-w-[881px] leading-tight tracking-tight">Empower Your Finances, Simplify Your Decisions.</h1>
        <p className="text-center text-[20px] max-w-[446px]">Track, manage, and optimize your organization&apos;s finances effortlessly</p>
        </div>
        <BeautifulLink text={`Try for free`} />
      </div>
    </div>
  )
}

export default function Home() {
  const {width} = useWindowDimensions();

  return (
    <>
      {width! > 900 ? (
        <DesktopView />
      ) : (
        <h1>Mobile View</h1>
      )}
    </>
  )
}
