import { PropsErrorPokemon } from "../models/props"
import { Img } from "../styledComponents/NavBar"
import { PokeDetailsContainer, PokeImgError, PokeInfoError, PokemonDetailsError } from "../styledComponents/PokemonDetails"

const ErrorPokemon = ({type}:PropsErrorPokemon) => {
    return (
        <PokeDetailsContainer>
                <PokemonDetailsError>
                    <PokeImgError><Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="Pokeball" /></PokeImgError>
                    <PokeInfoError>' Lo sentimos no hemos encontrado un pokemon {type}'</PokeInfoError>
                </PokemonDetailsError>
        </PokeDetailsContainer>

    )
}

export default ErrorPokemon