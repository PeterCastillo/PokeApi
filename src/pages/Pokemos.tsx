import Pokemon from '../components/Pokemon';
import { useFilter } from '../hooks/useFilter';
import { usePage } from '../hooks/usePage';
import PokesContainer from '../layout/PokesContainer';
import { Pokemon as IPokemon } from '../models/pokemon';
import { getPokemons } from '../services/getPokemons'
import { Btn, BtnsContainer, PokemonLoader } from '../styledComponents/Pokemon';

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
                ?<>
                    <PokemonLoader/><PokemonLoader/><PokemonLoader/>
                    <PokemonLoader/><PokemonLoader/><PokemonLoader/>
                    <PokemonLoader/><PokemonLoader/><PokemonLoader/>
                    <PokemonLoader/><PokemonLoader/><PokemonLoader/>
                    <PokemonLoader/><PokemonLoader/><PokemonLoader/>
                 </>
                :<>{pokefiltered.map(item =>{
                    const pokeFav: IPokemon | undefined  =  favoritos.find(poke => poke.id == item.id)
                    return pokeFav 
                    ?<Pokemon key={item.id} pokemon={item} state ={true}/> 
                    :<Pokemon key={item.id}  pokemon={item}/>})}
                </>}
            </PokesContainer>
        </div>
    )
}

export default Pokemons

