import { useEffect, useState } from 'react'
import { getData } from '../hooks/getData'
import { PokemonTypes } from '../models/types'

const apiUrl = 'https://pokeapi.co/api/v2/type'


export const types = () => {

    const [ pokemonTypes , setTypes ] = useState<Array<PokemonTypes>>([])

    const { data , loading } =  getData(apiUrl)
    
    const adaptTypes = (data:Array<PokemonTypes>) => {
        setTypes(data)
    }

    useEffect(()=> {
        if(!loading){
            adaptTypes(data.results)
        } 
    }, [data])

    return [ pokemonTypes , loading  ] 
}
