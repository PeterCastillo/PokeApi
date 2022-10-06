import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Pokemon } from "../models/pokemon";

export const useFilter = (pokemons:Array<Pokemon>)=> {

    const [ pokefiltered , setPokefiltered ] = useState<Array<Pokemon>>([])
    let [ searchParams, setSearchParams ] = useSearchParams();

    const filter = (pokes:Array<Pokemon>) => {
        const filtrados: Array<Pokemon> = pokes.filter(item =>{
            let pokename: string | null = searchParams.get("name")
            if(!pokename) return true;
            let poke:string = item.name.toLowerCase();
            return poke.startsWith(pokename.toLowerCase());
        }).filter(item => {
            let poketype: string | null = searchParams.get("type")
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
    }, [ pokemons , searchParams] )
    
    return { pokefiltered }   
}