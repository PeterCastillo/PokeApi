import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { Pokemon } from "../models/pokemon";

export const getPokemonDetails = () => {

    let params = useParams();

    const [ pokemonDetails , setPokemonDetails ] = useState<Pokemon | {} | string >({})
    const { fetchAPI } = useFetch()

    const getPokemon = async() => {
        const pokemonData: Pokemon = await fetchAPI(`https://pokeapi.co/api/v2/pokemon/${params.nombre}`)
        putPokemonDetails(pokemonData)
    }

    const putPokemonDetails = (pokemon:Pokemon) => {
        setPokemonDetails(pokemon)
    }

    useEffect(()=> {
        setPokemonDetails({})
        getPokemon()
    } , [params.nombre])

    return { pokemonDetails }

}
