import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useTypes = () => {
    const [ pokemonTypes , setPokemonTypes ] = useState([])

    const state = useSelector(state => state)
    const { pokemons } = state.pokemon

    const adaptTypes = () => {
        let pokeTypes = []
        pokemons.forEach(item => {
            item.types.forEach(type=>( pokeTypes=[...pokeTypes,type.type.name]))
        })
        const types = [...new Set(pokeTypes)]
        setPokemonTypes(types)
    }

    useEffect(()=>{
        adaptTypes()
    }, [pokemons])

    return {  pokemonTypes }

}