import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import {
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SidebarLink from "../sidebarLink";

export default function MobileNav() {
  return (
    <Sheet>
      <div>

      <SheetTrigger asChild className="">
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      </div>
      <SheetContent side="left" className="flex flex-col pl-0 w-[240px] md:hidden">
        <nav className="grid gap-7 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 pl-[25px] text-lg font-semibold"
          >
            <Image 
              src={"/images/logo.png"}
              width={86}
              height={35}
              alt="Logo"

            />
          </Link>
          <div className="flex flex-col relative gap-4">
            <SidebarLink 
              current="dashboard.svg" 
              hover="dashboard-active.svg"
              title="Dashboard"
              link="/dashboard"
              />
            <SidebarLink 
              current="transaction.svg" 
              hover="transaction-active.svg"
              title="Transaction"
              link="/transaction"/>
            <SidebarLink 
              current="profile-default.svg" 
              hover="profile-active.svg"
              title="Profile"
              link="profile"/>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}