import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { PokemonTypes } from '../models/types'

const apiUrl = 'https://pokeapi.co/api/v2/type'

export const types = () => {

    const [ pokemonTypes , setTypes ] = useState<Array<PokemonTypes>>([])

    const { fetchAPI } = useFetch();
    
    const adaptTypes = (data:Array<PokemonTypes>) => {
        setTypes(data)
    }

    const fetchTypes = async() => {
        const { results } = await fetchAPI(apiUrl)
        adaptTypes(results)
    }

    useEffect(()=> {
        fetchTypes()
    }, [])

    return [ pokemonTypes ] 
}
