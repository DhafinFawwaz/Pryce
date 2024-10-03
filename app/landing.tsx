"use client"

import Link from "next/link";
import useWindowDimensions from "./hooks/useWindowDimension";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import circle_tl from "../public/images/ellipse_tl.png"
import circles_bottom from "../public/images/bottom_pattern.png"
import top_pattern_mobile from "@/public/images/top_pattern_mobile.png"
import logo from "@/public/images/pryce_logo.png"
import Image from "next/image";

type ComponentType = {
  text: string,
  href?: string,
  className?: string
}

const BackgroundGradient = 'bg-gradient-to-t from-slate-200 from-64% to-white-300 to-34%'

function BeautifulLink({text,href = '#', className}: ComponentType): JSX.Element {
  return (
    <Link 
      className={
        cn(
          buttonVariants({variant:"default"}),
          "bg-purple-600 font-bold w-fit text-[20px] px-6 py-7 rounded-lg",
          className
        )
      } 
      href={`${href}`}
    >
      {text}
    </Link>
  )
}

function Content({isMobile = false}: {isMobile?: boolean}): JSX.Element {
  const h1_generic = 'text-center font-Rubik font-bold leading-tight tracking-tight';
  const p_generic = 'text-center font-rubik font-light'; 
  
  if (!isMobile) {
    return (
      <div className="absolute top-[7rem] flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
            <h1 className={`text-[64px] max-w-[881px] ${h1_generic}`}>Empower Your Finances, Simplify Your Decisions.</h1>
            <p className={`${p_generic} max-w-[446px] text-[20px]`}>Track, manage, and optimize your organization&apos;s finances effortlessly</p>
          </div>
          <BeautifulLink text={`Try for free`} href="/login" />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col mt-[5rem] pb-[5rem] gap-5 items-center">
        <h1 className={`md:text-[40px] text-[32px] mx-7 mt-5 max-w-[450px] ${h1_generic}`}>Empower Your Finances, Simplify Your Decisions.</h1>
        <p className={`${p_generic} text-[20px] mx-4 min-w-[212px] max-w-[350px]`}>Track, manage, and optimize your organization&apos;s finances effortlessly</p>
        <BeautifulLink text={`Try for free`} href="/login" className="mt-5" />
      </div>
    )
  }
}

function DesktopView({className}: {className?:string}): JSX.Element {
  const {height} = useWindowDimensions();
  const scrollHeight = 1145;
  return (
    <div 
      className={`${className} bg-center bg-contain bg-no-repeat static ${BackgroundGradient}`}
      style={{
        height: height! > scrollHeight? height:scrollHeight
      }}
    >
      <div className="flex justify-center items-center">
        <Image 
          src={logo.src}
          width={97}
          height={35}
          alt="Pryce Logo"
          className="absolute top-5 right-5"
        />
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
        <Content />
      </div>
    </div>
  )
}

function MobileView({className}: {className?:string}): JSX.Element {
  return (
    <div className={`${className} ${BackgroundGradient}`}>
      <Image 
        src={top_pattern_mobile.src}
        alt="Circle Pattern in top for mobile"
        width={619}
        height={732}
        className="w-full"
      />     
      <Content isMobile />      
    </div>
  )
}

export default function Landing() {
  // const {width} = useWindowDimensions();

  return (
    <>
      <DesktopView className="md:block hidden" />
      <MobileView className="block md:hidden" />
    </>
  )
}
