import { ActionPokemonReducer, PokemonRedux } from "../../models/pokemonRedux";
import { FAVORITE_POKEMON, POKEMONS } from "../typesActions/pokemonTypes";

export const pokemonsInitialState:PokemonRedux = {
    pokemons: [],
    favoritos: []
}

export function pokemonReducer( state = pokemonsInitialState , action: ActionPokemonReducer):PokemonRedux {
    switch(action.type){
        case(POKEMONS):{
            return  {
                ...state,
                pokemons:action.payload
            }
        }
        case(FAVORITE_POKEMON):{
            const pokeFav = state.favoritos.find(poke => poke.id == action.payload[0].id)
            if(pokeFav){
                return {
                    ...state,
                    favoritos:state.favoritos.filter(item => item.id !== pokeFav.id)
                }
            }
            return {
                ...state,
                favoritos:[...state.favoritos,action.payload[0]]
            }

        }
        default: {
            return state
        }
    }
}
