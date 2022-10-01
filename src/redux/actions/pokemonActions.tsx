import { FAVORITE_POKEMON, POKEMOS_TO_FETCH } from "../typesActions/pokemonTypes";

export const pokemonToFetch = (pokemons) => ({type: POKEMOS_TO_FETCH , payload : pokemons})

export const favorite = (pokemon) => ({type: FAVORITE_POKEMON, payload: pokemon})