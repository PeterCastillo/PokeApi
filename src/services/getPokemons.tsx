import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pokemonToFetch } from "../redux/actions/pokemonActions";
import { useFetch } from "../hooks/useFetch";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=42&offset='

export const getPokemons = (page) => {

    const state = useSelector( state => state)
    const dispach = useDispatch()
    const { pokemons , favoritos } = state.pokemon
    const { fetchAPI } = useFetch()

    useEffect(()=>{
        fetchPokemons(42 * (page - 1))
    } , [page])
    
    const fetchPokemons = async (offset) => {
        const data = await fetchAPI(apiUrl + offset)
        setData(data)
    }
    
    const setData = async (data) => {
        const pokemons = data.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data  = await res.json()
            return  data 
        })
        dispach(pokemonToFetch(await Promise.all(pokemons)))
    }

    return { pokemons , favoritos }
}

