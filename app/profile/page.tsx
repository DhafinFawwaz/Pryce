import Hero from "./component/Hero"
import Stats from "./component/Stats"
import Sidebar from "@/components/ui/sidebar"

export default function Profile() {
    return (
        <>
        <Sidebar/>
        <div className="flex flex-col items-center justify-center gap-5">
            <Hero />
            <Stats />
        </div>
        </>
    )
}