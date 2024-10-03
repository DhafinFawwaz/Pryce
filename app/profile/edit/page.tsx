"use client"

import Avatar from "../component/Avatar"
import Image from "next/image"
import Star from "@/public/assets/star.png"
import Picker from "../component/Picker"
import { useState } from "react"
import { ProfileType, DefaultProfile } from "../constant/constant"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import Sidebar from "@/components/ui/sidebar"


export default function Edit(){
    const [profile, setProfile] = useState<ProfileType>(DefaultProfile);
    const avatar = profile.avatar;
    function HandleSubmit() {
        // TODO: Kirim ke BE Hasil Perubahan
        console.log(profile);
    }


    return (
        <>
        <Sidebar />
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg w-[1000px] my-7 pb-6 relative">
                <Avatar Face={avatar.Face} Hair={avatar.Hair} Glass={avatar.Glass} Shirt={avatar.Shirt} Pants={avatar.Pants} />
                <Link onClick={HandleSubmit} href='/profile' className="flex items-center gap-4 absolute top-5 left-8">
                    <MoveLeft /> 
                    <span>
                        Return
                    </span> 
                </Link>
                <span className="absolute top-5 font-Rubik font-semibold text-[#4A5260] flex flex-row items-center gap-2">
                    <Image
                        src={Star.src}
                        width={20}
                        height={20}
                        alt="star"
                    />
                    <p className="mt-1">
                        1020 XP
                    </p>
                </span>
                <Picker setProfile={setProfile} />
            </div>
        </div>
        </>
    )
}