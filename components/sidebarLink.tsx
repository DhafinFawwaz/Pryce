'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
    current: string;
    hover: string;
    title: string;
    link: string;
}
export default function SidebarLink({current, hover, title, link}: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="flex items-center ml-[12px] font-RubikSemiBold text-[15px] w-full hover:text-purple-600 hover:bg-purple-200 gap-2 rounded-xl pl-4 py-2 text-muted-foreground hover:text-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={isHovered ? `/images/${hover}` : `/images/${current}`}
        width={30}
        height={30}
        alt={`${current}`}
      />
      {title}
    </Link>
  );
}
