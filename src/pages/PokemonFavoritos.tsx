import { useSelector } from "react-redux"
import PokesContainer from "../layout/PokesContainer"
import  Pokemon  from "../components/Pokemon"
import { useFilter } from "../hooks/useFilter"

const PokemonFavoritos = () => {

    const state = useSelector( state => state)
    const { favoritos } = state.pokemon
    const { pokefiltered } = useFilter(favoritos)

    return(
        <PokesContainer>
            {pokefiltered.map(item =><Pokemon pokemon={item} state={true}/>)}
        </PokesContainer>
    )
}

export default PokemonFavoritos