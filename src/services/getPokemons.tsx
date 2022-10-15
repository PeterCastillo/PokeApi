import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pokemonsToShow } from "../redux/actions/pokemonActions";
import { useFetch } from "../hooks/useFetch";
import { RootState } from "../redux/reducers/reducer";
import { Type } from "../models/pokemon";
import { Subject } from "rxjs";
import { switchMap } from "rxjs/operators"


const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=60&offset='

export const getPokemons = (page:number) => {

    const [ emiter ] = useState(new Subject())
    const state = useSelector( (state:RootState) => state)
    const dispach = useDispatch()
    const { pokemons , favoritos } = state.pokemon
    const { fetchAPI } = useFetch()

    useEffect(()=> {
        const  subscription = emiter.pipe(switchMap(event => fetchAPI(apiUrl + event.payload)))
        .subscribe({
            next: ({results}) => {
                fetchPokemons(results)
            }
        })
        return () => {
            if(subscription){
                subscription.unsubscribe() 
            }
        }
    },[emiter])

    useEffect(()=>{
        emiter.next({ type:'FETCH_POKEMONS',payload: (18 * (page - 1)) })
        dispach(pokemonsToShow([]))
    } , [page])
    

    const fetchPokemons = async (pokemonsToFetch) => {
        const pokemons = await pokemonsToFetch.map((pokemon:Type) => fetchAPI(pokemon.url))
        dispach(pokemonsToShow(await Promise.all(pokemons)))
    }

    return { pokemons , favoritos }
}

