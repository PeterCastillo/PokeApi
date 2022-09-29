import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getData } from "../hooks/getData"

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset='

export const getPokemons = (page) => {
    console.log("render")

    let [searchParams, setSearchParams] = useSearchParams();
    
    const [ pokemons , setPokemos ] = useState([])

    const [ offset , setOffset ] = useState(0)

    const { data , loading } = getData(apiUrl+offset)


    useEffect(()=>{
        setOffset(20 * (page - 1))
    } , [page])
    
    const adaptPokemons = (data) => {
        setPokemos(data)
    }

    useEffect(()=> {
        if(!loading){
            console.log("1")
            adaptPokemons(data.results)
        } 
    }, [data])


    return { pokemons  } 

}