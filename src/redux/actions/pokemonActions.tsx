import { POKEMOS_TO_FETCH } from "../typesActions/pokemonTypes";

export const pokemonToFetch = (pokemons) => ({type: POKEMOS_TO_FETCH , payload : pokemons})