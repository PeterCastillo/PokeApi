import { useEffect, useState , } from 'react'
import { useSearchParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';
import { useFilter } from '../hooks/useFilter';
import PokesContainer from '../layout/PokesContainer';
import { getPokemons } from '../services/getPokemons'
import { Btn, BtnsContainer } from '../styledComponents/Pokemon';

const Pokemons = () => {

    let [ searchParams, setSearchParams ] = useSearchParams();

    const [ page , setPage ] = useState(1)

    const { pokemons , favoritos } = getPokemons(page);

    const { pokefiltered } = useFilter(pokemons)

    useEffect(()=> {
        let page  = parseInt(searchParams.get("page"))
        if(page) setPage(page)
    }, [])

    useEffect(()=>{
        searchParams.set("page", (page.toString()))
        setSearchParams(searchParams)
    }, [ page ])

    const handlePage = (next) => {
        next ? setPage( page + 1) : setPage( page - 1)
    }

    return (
        <div>
            <BtnsContainer>
                <Btn onClick={()=>handlePage(false)}>Prev</Btn>
                <Btn onClick={()=>handlePage(true)}>Next</Btn>
            </BtnsContainer>
            <PokesContainer>
                {pokemons.length < 1
                ?<></>
                : pokefiltered.map(item => {
                    const pokeFav =  favoritos.find(poke => poke.id == item.id)
                    return pokeFav ? <Pokemon pokemon={item} state ={true}/> : <Pokemon pokemon={item}/>
                })}
            </PokesContainer>
        </div>
    )
}

export default Pokemons
