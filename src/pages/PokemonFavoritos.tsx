import { useSelector } from "react-redux"
import PokesContainer from "../layout/PokesContainer"
import  Pokemon  from "../components/Pokemon"
import { useFilter } from "../hooks/useFilter"
import ErrorPokemon from "../components/ErrorPokemon"

const PokemonFavoritos = () => {

    const state = useSelector( state => state)
    const { favoritos } = state.pokemon
    const { pokefiltered } = useFilter(favoritos)

    return(
        <>
            {
                pokefiltered.length > 0
                ?<PokesContainer>
                    {pokefiltered.map(item => <Pokemon key={item.id} pokemon={item} state={true}/>)}
                </PokesContainer>
                :<ErrorPokemon type={"con esas caracteristicas en tus favoritos"}/>
            }
        </>
    )
}

export default PokemonFavoritos