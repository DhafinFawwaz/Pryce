type ComponentProps = {
    name: string,
    badge: string
}

export default function ProfileTitle({name,badge}: ComponentProps) {
    return (
        <div className="flex gap-4 items-baseline">
                <span className="font-Rubik font-bold text-xl">{name}</span>
                <span className="bg-purple-600 px-5 font-semibold font-Rubik text-white-100 py-1 rounded-2xl">{badge}</span>
        </div>
    )
}