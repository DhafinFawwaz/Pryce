import Image from "next/image";
import SidebarLink from "../sidebarLink";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden border-r bg-muted/40 md:flex absolute">
      <div className="flex max-h-screen flex-col  gap-7 w-[240px] h-screen">
        <div className="flex-1">
          <nav className="grid gap-7 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 pl-[25px] mt-6 text-lg font-semibold"
            >
              <Image 
                src={"/images/logo.png"}
                width={86}
                height={35}
                alt="Logo"

              />
            </Link>
            <div className="flex flex-col relative gap-4 w-[200px]">
              <SidebarLink 
                current="dashboard.svg" 
                hover="dashboard-active.svg"
                title="Dashboard"
                link="/dashboard"/>
              <SidebarLink 
                current="transaction.svg" 
                hover="transaction-active.svg"
                title="Transaction"
                link="transaction"/>
              <SidebarLink 
                current="profile-default.svg" 
                hover="profile-active.svg"
                title="Profile"
                link="profile"/>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}