import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

export const useFilter = (pokemons) => {

    const [ pokefiltered , setPokefiltered ] = useState([])
    let [ searchParams, setSearchParams ] = useSearchParams();

    const filter = (pokes) => {
        const filtrados = pokes.filter(item =>{
            let pokename = searchParams.get("name")
            if(!pokename) return true;
            let poke = item.name.toLowerCase();
            return poke.startsWith(pokename.toLowerCase());
        }).filter(item => {
            let poketype = searchParams.get("type")
            if(!poketype) return true
            let types = item.types.map(item => (
                item.type.name
            ))
            return types.includes(poketype)
         })
        setPokefiltered(filtrados)
    }

    useEffect(()=>{
        filter(pokemons)
    }, [searchParams , [] ])

    return  { pokefiltered } 
}