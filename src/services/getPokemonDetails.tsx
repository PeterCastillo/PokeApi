import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

export const getPokemonDetails = () => {

    let params = useParams();

    const [ pokemonDetails , setPokemonDetails ] = useState({})
    const { fetchAPI } = useFetch()

    const getPokemon = async() => {
        const pokemonData = await fetchAPI(`https://pokeapi.co/api/v2/pokemon/${params.nombre}`)
        putPokemonDetails(pokemonData)
    }

    const putPokemonDetails = (pokemon) => {
        setPokemonDetails(pokemon)
    }

    useEffect(()=> {
        setPokemonDetails({})
        getPokemon()
    } , [params.nombre])

    return { pokemonDetails }

}
