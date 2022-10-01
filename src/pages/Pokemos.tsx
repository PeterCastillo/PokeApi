import { useEffect, useState , } from 'react'
import { useSearchParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';
import PokesContainer from '../layout/PokesContainer';
import { getPokemons } from '../services/getPokemons'



const Pokemons = () => {

    let [ searchParams, setSearchParams ] = useSearchParams();

    const [ page , setPage ] = useState(1)

    const { pokemons , favoritos } = getPokemons(page);

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
         <button onClick={()=>handlePage(true)}>ADELANTE</button>
         <button onClick={()=>handlePage(false)}>ATRAS</button>
            <PokesContainer>
                {pokemons.length < 1
                ?<></>
                : pokemons.filter(item =>{
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
                .map(item => {
                    const pokeFav =  favoritos.find(poke => poke.id == item.id)
                    return pokeFav ? <Pokemon pokemon={item} state ={true}/> : <Pokemon pokemon={item}/>
                })}
            </PokesContainer>
        </div>
    )
}

export default Pokemons
