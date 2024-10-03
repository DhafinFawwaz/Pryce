import Image from "next/image"
import Fire from "@/public/assets/firestreak.png"
import Bill from "@/public/assets/bill.png"
import { Progress } from "@/components/ui/progress"
import Star from "@/public/assets/star.png"
import MissionBar from "./MissionBar"

export default function Stats() {
    return (
        <div className="mt-5 w-[600px]">
            <h1 className="font-Rubik font-bold text-xl mb-3">Statistik</h1>
            <div className="flex flex-row gap-5 justify-around">
                <div className="flex gap-2 bg-slate-200 pl-5 pr-7 py-3 rounded-lg">
                    <Image
                        src={Fire.src}
                        width={60}
                        height={60}
                        alt="Fire"
                    />
                    <p className="flex flex-col items-left mt-1">
                        <span className="font-Rubik font-bold text-xl">3</span>
                        <span className="font-Rubik font-bold text-lg text-[#4A5260]">days streak</span>
                    </p>
                </div>
                <div className="flex gap-2 bg-slate-200 pl-5 pr-7 py-3 rounded-lg">
                    <Image
                        src={Bill.src}
                        width={60}
                        height={60}
                        alt="Fire"
                    />
                    <p className="flex flex-col items-left mt-1">
                        <span className="font-Rubik font-bold text-xl">1287</span>
                        <span className="font-Rubik font-bold text-lg text-[#4A5260]">transactions</span>
                    </p>
                </div>
            </div>
            <h1 className="font-Rubik font-bold text-xl mb-3 mt-5">Missions</h1>
            <div className="flex flex-col gap-8 bg-slate-200 p-5 rounded-lg">
                <MissionBar label="Record transactions for 5 days straight" current={3} goal={5} current_label="3" goal_label="5" reward={20} />
                <MissionBar label="Create 100 transactions" current={25} goal={100} current_label="25" goal_label="100" reward={50} />
                <MissionBar label="Spend beyond project budget" current={800000} goal={1000000} current_label="800,0000" goal_label="1,000,0000" reward={150} />
            </div>
        </div>
    )
}