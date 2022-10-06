import { Pokemon } from "../../models/pokemon";
import { FAVORITE_POKEMON, POKEMOS_TO_FETCH } from "../typesActions/pokemonTypes";

export const pokemonToFetch = (pokemons:Array<Pokemon>) => ({type: POKEMOS_TO_FETCH , payload : pokemons})

export const favorite = (pokemon:Pokemon) => ({type: FAVORITE_POKEMON, payload: pokemon})