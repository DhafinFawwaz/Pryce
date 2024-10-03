import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import Star from "@/public/assets/star.png"

type ComponentType = {
    label: string;
    current: number;
    goal: number;
    current_label: string;
    goal_label: string;
    reward: number
}

export default function MissionBar({
    label,
    current,
    goal,
    current_label,
    goal_label,
    reward
}: ComponentType) {
    return (
        <div className="flex gap-4">
            <div className="flex-grow">
                <div className="flex flex-row items-baseline justify-between mb-2">
                    <h1 className="font-Rubik font-semibold text-[#4A5260] text-md">{label}</h1>
                    <span className="text-sm font-Rubik font-semibold">{current_label} / {goal_label}</span>
                </div>
                <Progress value={(current/goal)*100} className="h-[12px]" />
            </div>
            <div className="flex items-center gap-2">
                <Image 
                    src={Star.src}
                    width={20}
                    height={20}
                    alt="Star"
                />  
                <h1 className="font-Rubik font-semibold text-[#4A5260]">{reward} XP</h1>
            </div>
        </div>
    )
}