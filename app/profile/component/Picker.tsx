import Image from "next/image"
import Assets from "@/public/data/file_paths.json"
import { SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { AvatarType } from "../constant/constant"
import { Dispatch } from "react"

type ComponentProps = {
    setAvatar: Dispatch<SetStateAction<AvatarType>>;
}

export default function Picker({setAvatar}: ComponentProps) {
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
                menu === "Face" && Assets.faces.map((path) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setAvatar((currentAvatar) => ({
                        ...currentAvatar,
                        Face: path,
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Hair" && Assets.hair.map((path) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setAvatar((currentAvatar) => ({
                        ...currentAvatar,
                        Hair: path,
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Shirt" && Assets.shirts.map((path) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setAvatar((currentAvatar) => ({
                        ...currentAvatar,
                        Shirt: path,
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Glass" && Assets.glasses.map((path) => (
                <div
                    key={path}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setAvatar((currentAvatar) => ({
                        ...currentAvatar,
                        Glass: path,
                    }))
                    }
                >
                    <Image src={path} alt="ikon" width={100} height={100} />
                </div>
                ))
            }
            {
                menu === "Tag" && Assets.badge.map((badge) => (
                <div
                    key={badge}
                    className="flex items-center justify-center overflow-clip bg-blue-200 hover:bg-blue-500 hover:cursor-pointer p-3 rounded-lg"
                    onClick={() =>
                    setAvatar((currentAvatar) => ({
                        ...currentAvatar,
                        Glass: badge,
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