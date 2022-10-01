import { useEffect, useState } from "react"
import { getData } from "../hooks/getData"
import { useDispatch, useSelector } from "react-redux"
import { pokemonToFetch } from "../redux/actions/pokemonActions";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=42&offset='

export const getPokemons = (page) => {

    const state = useSelector( state => state)
    const dispach = useDispatch()
    const { pokemons , favoritos } = state.pokemon

    const [ offset , setOffset ] = useState(0)

    const { data , loading } = getData(apiUrl+offset)

    useEffect(()=>{
        setOffset(42 * (page - 1))
    } , [page])
    
    const adaptPokemons = async (data) => {
        const pokemons = data.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data  = await res.json()
            return  data 
        })
        dispach(pokemonToFetch(await Promise.all(pokemons)))
    }

    useEffect(()=> {
        if(!loading){
            adaptPokemons(data.results)
        } 
    }, [data])

    return { pokemons , favoritos }

}

