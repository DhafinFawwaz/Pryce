export type AvatarType = {
    Face?: string;
    Hair?: string;
    Glass?: string;
    Shirt?: string;
    Pants?: string;
}

export type ProfileType = {
    avatar: AvatarType,
    name: string,
    badge: string,
    experience: number
}

export const BaseAvatar = '/assets/primary_avatar.png'
export const DefaultFace = '/assets/faces/angry.png'
export const DefaultHair = '/assets/hairs/front/chupchik.black.png'
export const DefaultGlass = '/assets/glasses/round.white.png'
export const DefaultShirt = '/assets/shirts/dress.black.png'
export const DefaultPants = '/assets/pants/pants.png'
export const DefaultBadge = 'Legend of Saving'

export const DefaultAvatar: AvatarType = {
    Face : DefaultFace,
    Hair : DefaultHair,
    Glass : DefaultGlass,
    Shirt : DefaultShirt,
    Pants : DefaultPants
}

export const DefaultProfile: ProfileType = {
    avatar: DefaultAvatar,
    name: "Budi Siregar",
    badge: "Legend of Saving",
    experience: 0
}