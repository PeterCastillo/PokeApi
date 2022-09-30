
import { POKEMOS_TO_FETCH } from "../typesActions/pokemonTypes";

export const pokemonsInitialState = {
    pokemons: []
}

export function pokemonReducer( state = pokemonsInitialState , action ){
    switch(action.type){
        case(POKEMOS_TO_FETCH):{
            return  {
                ...state,
                pokemons:action.payload
            }
        }
        default: {
            return state
        }
    }
}
