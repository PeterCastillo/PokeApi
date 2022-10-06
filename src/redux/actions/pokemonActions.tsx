import { Pokemon } from "../../models/pokemon";
import { FAVORITE_POKEMON, POKEMONS } from "../typesActions/pokemonTypes";

export const pokemonsToShow = (pokemons:Array<Pokemon>) => ({type: POKEMONS , payload : pokemons})

export const favorite = (pokemon:Pokemon) => ({type: FAVORITE_POKEMON, payload: pokemon})