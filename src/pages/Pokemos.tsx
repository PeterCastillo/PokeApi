import { useEffect, useState , } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getPokemons } from '../services/pokemons'


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
        <div>, {page}
         <button onClick={handleNextPage}>ADELANTE</button>
         <button onClick={handleLastPage}>ATRAS</button>
         {pokemons.length}
            <div>
                {pokemons.length<1
                ?<></>
                : pokemons.map(item => (
                    <h1>{item.name}</h1>
                ))}
            </div>
        </div>
    )
}

export default Pokemons