"use client"

import { Pencil } from "lucide-react"
import Star from "@/public/assets/star.png"
import Image from "next/image"
import Avatar from "./Avatar"
import Link from "next/link"
import ProfileTitle from "./ProfileTitle"
import { useState } from "react"
import { DefaultProfile, ProfileType } from "../constant/constant"

export default function Hero() {
    // TODO: Fetch database buat profile
    const [profile, setProfile] = useState<ProfileType>(DefaultProfile);
    const avatar = profile.avatar;
    const profilename = profile.name;
    const profilebadge = profile.badge;
    const experience = profile.experience;

    return (
        <>
            <div className="flex flex-col items-center justify-center relative bg-slate-200 px-[9rem] mt-5 rounded-lg max-w-[1000px]">
                <Link href="/profile/edit" prefetch className="absolute z-50 top-5 right-5 bg-purple-600 p-2 rounded-full hover:scale-105">
                    <Pencil className="size-[1.8rem] text-white-300 " />
                </Link>
                <span className="absolute top-5 font-Rubik font-semibold text-[#4A5260] flex flex-row items-center gap-2">
                    <Image
                        src={Star.src}
                        width={20}
                        height={20}
                        alt="star"
                    />
                    <p className="mt-1">
                        {experience} XP
                    </p>
                </span>
                <Avatar Face={avatar.Face} Hair={avatar.Hair} Glass={avatar.Glass} Shirt={avatar.Shirt} Pants={avatar.Pants} />
            </div>
            <ProfileTitle name={profilename} badge={profilebadge} />
        </>
    )
}