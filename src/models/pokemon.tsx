export interface Pokemon {
    abilities:  Array<Ability>,
    base_experience: number,
    forms: Array<Type>,
    game_indices: Array<IndicesGame>,
    height: number,
    held_items: Array<HeldItem>,
    id: number,
    is_default: boolean,
    location_area_encounters:string,
    moves: Array<Move>,
    name: string
    order: number,
    past_types:Array<PastTypes>,
    species: Type,
    sprites: IPokemonSprites,
    stats: Array<Stats>,
    types: Array<PokemonTypes>,
    weight: number
}

export interface IPokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: IPokemonSpriteOther;
    versions: IPokemonSpriteVersion;
}

interface ISpriteVariant {
    back_default: string | null;
    back_female: string | null;
    back_gray: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | undefined;
    front_female: string | null;
    front_gray: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface IPokemonSpriteOther {
    dream_world: Pick<ISpriteVariant, "front_default" | "front_female">;
    "official-artwork": {
        front_default: string;
    };
}

interface IGeneration1Sprite {
    "red-blue": Pick<ISpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
    yellow: Pick<ISpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
}

interface IGeneration2Sprite {
    crystal: Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    gold: Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    silver: Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
}

interface IGeneration3Sprite {
    emerald: Pick<ISpriteVariant, "front_default" | "front_shiny">;
    "firered-leafgreen": Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    "ruby-sapphire": Pick<ISpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
}

interface IGeneration4Sprite {
    "diamond-pearl": Pick<
        ISpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    "heartgold-soulsilver": Pick<
        ISpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    platinum: Pick<
        ISpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

type IBlackWhiteSprite = Pick<
    ISpriteVariant,
    "back_default" |
    "back_female" |
    "back_shiny" |
    "back_shiny_female" |
    "front_default" |
    "front_female" |
    "front_shiny" |
    "front_shiny_female"
>;

interface IGeneration5Sprite {
    "black-white": IBlackWhiteSprite & { animated: IBlackWhiteSprite };
}

interface IGeneration6Sprite {
    "omegaruby-alphasapphire": Pick<
        ISpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    "x-y": Pick<
        ISpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

interface IGeneration7Sprite {
    icons: Pick<ISpriteVariant, "front_default" | "front_female">;
    "ultra-sun-ultra-moon": Pick<
        ISpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

interface IGeneration8Sprite {
    icons: Pick<ISpriteVariant, "front_default" | "front_female">;
}

interface IPokemonSpriteVersion {
    "generation-i": IGeneration1Sprite;
    "generation-ii": IGeneration2Sprite;
    "generation-iii": IGeneration3Sprite;
    "generation-iv": IGeneration4Sprite;
    "generation-v": IGeneration5Sprite;
    "generation-vi": IGeneration6Sprite;
    "generation-vii": IGeneration7Sprite;
    "generation-viii": IGeneration8Sprite;
}

export interface OtherDreamWorld {
    front_default: String | null,
    front_female: String | null

}

export interface OtherHome {
    front_default: String | null,
    front_female: String | null,
    front_shiny: String | null,
    front_shiny_female: String | null
}

export interface OficilArtWork {
    front_default: String | null
}

export interface SpritsOther {
    dream_world: OtherDreamWorld,
    home: OtherHome,
    "official-artwork": OficilArtWork
}

export interface PastTypes {
    generation: Type,
    types: Array<PokemonTypes>
}

export interface MoveVersionDetails {
    level_learned_at: Number,
    move_learn_method: Type,
    version_group: Type
}

export interface Move {
    move: Type,
    version_group_details: Array<MoveVersionDetails>
}

export interface Version {
    rarity: Number,
    version: Type
}

export interface HeldItem {
    item: Type,
    version_details: Array<Version>
}

export interface Type {
    name: string,
    url: string
}

export interface Ability {
    ability: Type,
    is_hidden: boolean,
    slot: number
}

export interface IndicesGame {
    game_index: number,
    version: Type
}

export interface PokemonTypes {
    slot: number,
    type: Type
}

export interface Stats {
    base_stat: number, 
    effort: number, 
    stat: Type
}

