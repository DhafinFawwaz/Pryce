import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-6xl text-center font-Rubik font-bold">Empower Your Finances,<br /> Simplify Your Decisions.</h1>
      <h1 className="text-6xl text-center font-bold">Empower Your Finances,<br /> Simplify Your Decisions.</h1>
      <p>Track, manage, and optimize your organization&apos;s finances effortlessly</p>
      
      <Link className={buttonVariants({variant:"default"})} href="#">Get Started</Link>
    </div>
  );
}
