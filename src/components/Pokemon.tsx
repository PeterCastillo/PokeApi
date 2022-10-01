import { useDispatch } from "react-redux"
import { favorite } from "../redux/actions/pokemonActions"
import { PokeFavorite, PokeId, PokeImg, Pokemon as PokemonStyle, PokemonImg, PokemonInfo, PokeName, PokeType, Type} from "../styledComponents/Pokemon"

const Pokemon = ( { pokemon  , state = false }) => {

    const { name , id , types , sprites } = pokemon

    const dispach = useDispatch()

    return (
        <PokemonStyle>
            <PokeFavorite favorite={state} onClick={()=>dispach(favorite(pokemon))}>❤️</PokeFavorite>
            <PokemonImg>
                <PokeImg src={sprites.front_default} alt={name}/>
            </PokemonImg>
            <PokemonInfo>
                <PokeName to={`/pokemon/${name}`}>{name.toUpperCase()}</PokeName>
                <PokeId><b>#</b>{id}</PokeId>
                <PokeType>
                    {types.map(item =>(
                        <Type>{item.type.name}</Type>
                    ))}
                </PokeType>
            </PokemonInfo>
        </PokemonStyle>
    )
}

export default Pokemon