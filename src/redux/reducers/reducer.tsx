import { combineReducers } from "redux"
import { pokemonReducer } from "./pokemonsReducer"

const reducer = combineReducers({
    pokemon : pokemonReducer
})

export default reducer

export type RootState = ReturnType<typeof reducer>