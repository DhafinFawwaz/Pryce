import Image from "next/image"
import Assets from "@/public/data/file_paths.json"
import { SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { ProfileType } from "../constant/constant"
import { Dispatch } from "react"

type ComponentProps = {
    setProfile: Dispatch<SetStateAction<ProfileType>>;
}

export default function Picker({setProfile}: ComponentProps) {
    const [menu, setMenu] = useState<string>("Hair")

    return(
        <div className="flex flex-col items-center">
            <div className="flex gap-2 items-center justify-center">
                <Button 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setMenu("Hair")
                            console.log(Assets)
                        }
                    }
                >
                Hair</Button>
                <Button 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setMenu("Face")
                        }
                    }
                >
                Face</Button>
                <Button 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setMenu("Shirt")
                        }
                    }
                >
                Shirt</Button>
                <Button 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setMenu("Glass")
                        }
                    }
                >
                Glass</Button>
                <Button 
                    onClick={
                        (e) => {
                            e.preventDefault();
                            setMenu("Tag")
                        }
                    }
                >
                Tag</Button>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center flex-wrap w-[85%] mt-7">
            {
                menu === "Face" && Assets.faces.map((path: string) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setProfile((currentProfile) => ({
                        ...currentProfile,
                        avatar: {
                        ...currentProfile.avatar,
                        Face: path,
                        },
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Hair" && Assets.hair.map((path: string) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setProfile((currentProfile) => ({
                        ...currentProfile,
                        avatar: {
                        ...currentProfile.avatar,
                        Hair: path,
                        },
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Shirt" && Assets.shirts.map((path: string) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setProfile((currentProfile) => ({
                        ...currentProfile,
                        avatar: {
                        ...currentProfile.avatar,
                        Shirt: path,
                        },
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Glass" && Assets.glasses.map((path: string) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setProfile((currentProfile) => ({
                        ...currentProfile,
                        avatar: {
                        ...currentProfile.avatar,
                        Glass: path,
                        },
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Tag" && Assets.badge.map((badge: string) => (
                <div
                    key={badge}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setProfile((currentProfile) => ({
                        ...currentProfile,
                        badge: badge, // Updating the badge directly in `ProfileType`
                    }))
                    }
                >
                    {badge}
                </div>
                ))
            }
            </div>
        </div>
    )
}