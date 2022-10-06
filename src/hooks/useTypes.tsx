import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useTypes = () => {
    const [ pokemonTypes , setPokemonTypes ] = useState<Array<string>>([])

    const state = useSelector(state => state)
    const { pokemons } = state.pokemon

    const adaptTypes = () => {
        let pokeTypes: Array<string> = []
        pokemons.forEach(item => {
            item.types.forEach(type=>( pokeTypes=[...pokeTypes,type.type.name]))
        })
        const types: Array<string> = [...new Set(pokeTypes)]
        setPokemonTypes(types)
    }

    useEffect(()=>{
        adaptTypes()
    }, [pokemons])

    return {  pokemonTypes }

}