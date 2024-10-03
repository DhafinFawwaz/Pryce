import Image from "next/image"
import { AvatarType } from "../constant/constant"
import { 
    BaseAvatar, 
    DefaultFace, 
    DefaultHair,
    DefaultGlass, 
    DefaultShirt, 
    DefaultPants 
} from "../constant/constant"

export default function Avatar({
    Face = DefaultFace,
    Hair = DefaultHair,
    Glass = DefaultGlass,
    Shirt = DefaultShirt,
    Pants = DefaultPants
}: AvatarType) {
    return (
        <div className="relative flex justify-center items-center size-[300px] overflow-clip">
            <Image
                src={BaseAvatar}
                width={200}
                height={200}
                alt="tes"
                className="absolute"
            />
            <Image
                src={Face}
                width={200}
                height={200}
                alt="tes"
                className="absolute top-15 z-40"
            />
            <Image
                src={Hair}
                width={200}
                height={200}
                alt="tes"
                className="absolute"
            />
            <Image
                src={Glass}
                width={150}
                height={150}
                alt="tes"
                className="absolute top-20"
            />
            <Image
                src={Shirt}
                width={60}
                height={60}
                alt="tes"
                className="absolute left-[7.7rem] top-[13.3rem] z-20"
            />
            <Image
                src={Pants}
                width={15}
                height={15}
                alt="tes"
                className="absolute top-[15rem] left-[8.2rem]"
            />
            <Image
                src={Pants}
                width={15}
                height={15}
                alt="tes"
                className="absolute top-[15rem] left-[10rem]"
            />
        </div>
    )
}