export type AvatarType = {
    Face?: string;
    Hair?: string;
    Glass?: string;
    Shirt?: string;
    Pants?: string;
}

export const BaseAvatar = '/assets/primary_avatar.png'
export const DefaultFace = '/assets/faces/angry.png'
export const DefaultHair = '/assets/hairs/front/chupchik.black.png'
export const DefaultGlass = '/assets/glasses/round.white.png'
export const DefaultShirt = '/assets/shirts/dress.black.png'
export const DefaultPants = '/assets/pants/pants.png'

export const DefaultAvatar: AvatarType = {
    Face : DefaultFace,
    Hair : DefaultHair,
    Glass : DefaultGlass,
    Shirt : DefaultShirt,
    Pants : DefaultPants
}