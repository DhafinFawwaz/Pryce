import Hero from "./component/Hero"
import Stats from "./component/Stats"

export default function Profile() {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Hero />
            <Stats />
        </div>
    )
}