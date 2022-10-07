import { Pokemon } from "./pokemon";

export interface PokemonRedux {
    pokemons: Array<Pokemon>,
    favoritos: Array<Pokemon>
}

export interface ActionPokemonReducer {
    type: string,
    payload:  Array<Pokemon>
}
