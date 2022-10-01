import { FAVORITE_POKEMON, POKEMOS_TO_FETCH } from "../typesActions/pokemonTypes";

export const pokemonsInitialState = {
    pokemons: [],
    favoritos: []
}

export function pokemonReducer( state = pokemonsInitialState , action ){
    switch(action.type){
        case(POKEMOS_TO_FETCH):{
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
