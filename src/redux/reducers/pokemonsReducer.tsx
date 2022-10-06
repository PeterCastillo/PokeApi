import { Pokemon } from "../../models/pokemon";
import { PokemonRedux } from "../../models/pokemonRedux";
import { FAVORITE_POKEMON, POKEMONS } from "../typesActions/pokemonTypes";

export const pokemonsInitialState:PokemonRedux = {
    pokemons: [],
    favoritos: []
}

interface PK {
    type: 'POKEMOS',
    payload:  Array<Pokemon>
}
interface P {
    type: 'FAVORITE_POKEMON',
    payload: Pokemon 
}

export function pokemonReducer( state = pokemonsInitialState , action ):PokemonRedux {
    switch(action.type){
        case(POKEMONS):{
            return  {
                ...state,
                pokemons:action.payload
            }
        }
        case(FAVORITE_POKEMON):{
            const pokeFav = state.favoritos.find(poke => poke.id == action.payload.id)
            if(pokeFav){
                return {
                    ...state,
                    favoritos:state.favoritos.filter(item => item.id !== pokeFav.id)
                }
            }
            return {
                ...state,
                favoritos:[...state.favoritos,action.payload]
            }

        }
        default: {
            return state
        }
    }
}
