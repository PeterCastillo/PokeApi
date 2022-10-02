import { getPokemonDetails } from "../services/getPokemonDetails";

const PokemonsDetails = () => {

    const { pokemonDetails } = getPokemonDetails()
    
    console.log("chao",pokemonDetails)

    return (
        <div>
            details
        </div>
    )
}

export default PokemonsDetails