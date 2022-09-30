import { useEffect, useState } from "react"
import { getData } from "../hooks/getData"
import { useDispatch } from "react-redux"
import { pokemonToFetch } from "../redux/actions/pokemonActions";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset='

export const getPokemons = (page) => {

    const dispach = useDispatch()

    const [ pokemons , setPokemos ] = useState([])

    const [ offset , setOffset ] = useState(0)

    const { data , loading } = getData(apiUrl+offset)

    useEffect(()=>{
        setOffset(20 * (page - 1))
    } , [page])
    
    const adaptPokemons = async (data) => {
        const pokemons = data.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return { data }})
        dispach(pokemonToFetch(await Promise.all(pokemons)))
        setPokemos(data)
    }

    useEffect(()=> {
        if(!loading){
            adaptPokemons(data.results)
        } 
    }, [data])

    return { pokemons  } 

}

