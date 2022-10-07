import { useDispatch } from "react-redux"
import { PropsPokemon } from "../models/props"
import { favorite } from "../redux/actions/pokemonActions"
import { PokeFavorite, PokeId, PokeImg, Pokemon as PokemonStyle, PokemonImg, PokemonInfo, PokeName, PokeType, Type} from "../styledComponents/Pokemon"

const Pokemon = ( { pokemon ,state = false }:PropsPokemon) => {

    const { name , id , types , sprites } = pokemon

    const dispach = useDispatch()
    
    return (
        <PokemonStyle>
            <PokeFavorite favorite={state} onClick={()=>dispach(favorite([pokemon]))}>❤️</PokeFavorite>
            <PokemonImg>
                <PokeImg src={sprites.other.dream_world.front_default} alt={name}/>
            </PokemonImg>
            <PokemonInfo type={types[0].type.name}>
                <PokeName 
                    to={{pathname:`/pokemon/${name}`}}
                >
                    {name.toUpperCase()}
                </PokeName>
                <PokeId><b>#</b>{id}</PokeId>
                <PokeType>
                    {types.map(item =>(
                        <Type key={item.type.name} type={item.type.name}>{item.type.name}</Type>
                    ))}
                </PokeType>
            </PokemonInfo>
        </PokemonStyle>
    )
}

export default Pokemon