import { useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import { useFilter } from '../hooks/useFilter';
import { usePage } from '../hooks/usePage';
import PokesContainer from '../layout/PokesContainer';
import { getPokemons } from '../services/getPokemons'
import { Btn, BtnsContainer } from '../styledComponents/Pokemon';

const Pokemons = () => {

    const { page , handlePage } = usePage()

    const { pokemons , favoritos } = getPokemons(page);

    const { pokefiltered } = useFilter(pokemons)

    return (
        <div>
            <BtnsContainer>
                <Btn onClick={()=>handlePage(false)}>Prev</Btn>
                <Btn onClick={()=>handlePage(true)}>Next</Btn>
            </BtnsContainer>
            <PokesContainer>
                {pokefiltered.length < 1
                ?<>hola</>
                : pokefiltered.map(item => {
                    const pokeFav =  favoritos.find(poke => poke.id == item.id)
                    return pokeFav ? <Pokemon pokemon={item} state ={true}/> : <Pokemon pokemon={item}/>
                })}
            </PokesContainer>
        </div>
    )
}

export default Pokemons
