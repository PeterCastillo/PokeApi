import { useEffect, useState } from "react"
import { getData } from "../hooks/getData"

const Pokemon = ( { pokemon }) => {

    const [ pokeInfo , setPokeInfo ] = useState({})

    const { data , loading } = getData(pokemon.url)

    useEffect(()=>{
        if(!loading){
            setPokeInfo(data)
        }
    }, [data])

    return (
        <span>{loading? <></>: <span>{pokeInfo.name}</span> }<br/></span>
    )
}

export default Pokemon