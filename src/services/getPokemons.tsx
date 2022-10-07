import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pokemonsToShow } from "../redux/actions/pokemonActions";
import { useFetch } from "../hooks/useFetch";
import { RootState } from "../redux/reducers/reducer";
import { Type } from "../models/pokemon";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=18&offset='

export const getPokemons = (page:number) => {

    const state = useSelector( (state:RootState) => state)
    const dispach = useDispatch()
    const { pokemons , favoritos } = state.pokemon
    const { fetchAPI } = useFetch()

    useEffect(()=>{
        fetchPokemons(18 * (page - 1))
        dispach(pokemonsToShow([]))
    } , [page])
    
    const fetchPokemons = async (offset:number) => {
        const { results } = await fetchAPI(apiUrl + offset)
        const pokemons = await results.map((pokemon:Type) => fetchAPI(pokemon.url))
        dispach(pokemonsToShow(await Promise.all(pokemons)))
    }

    return { pokemons , favoritos }
}

