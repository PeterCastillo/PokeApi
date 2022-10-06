import { Pokemon } from "./pokemon";

export interface PropsPokemon {
    pokemon: Pokemon,
    state?: boolean
}

export interface PropsErrorPokemon {
    type: string
}

export interface PropsPokesContainer {
    children: JSX.Element | JSX.Element[]
}

export interface PropsProgressBar {
    value: string,
    max: number
}

export interface PokeFavoriteStyleProps {
    favorite?: boolean
}

export interface PokeInfoStyle {
    type : string
}
