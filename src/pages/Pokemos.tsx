import { useEffect, useState , } from 'react'
import { useSearchParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';
import { getPokemons } from '../services/getPokemons'


const Pokemons = () => {

    let [ searchParams, setSearchParams ] = useSearchParams();

    const [ page , setPage ] = useState(1)

    const { pokemons  } = getPokemons(page)

    useEffect(()=> {
        let page  = parseInt(searchParams.get("page"))
        if(page) setPage(page)
    }, [])

    useEffect(()=>{
        searchParams.set("page", (page.toString()))
        setSearchParams(searchParams)
    }, [ page ])

    const handleNextPage = () => {
        setPage( page + 1)
    }

    const handleLastPage = () => {
        setPage( page - 1)
    }

    return (
        <div>
         <button onClick={handleNextPage}>ADELANTE</button>
         <button onClick={handleLastPage}>ATRAS</button>
         {pokemons.length}
            <div>
                {pokemons.length < 1
                ?<></>
                : pokemons.filter(item =>{
                    let pokename = searchParams.get("name")
                    if(!pokename) return true;
                    let poke = item.name.toLowerCase();
                    return poke.startsWith(pokename.toLowerCase());
                })
                .map(item => (
                    <Pokemon pokemon={item} />
                ))}
            </div>
        </div>
    )
}

export default Pokemons