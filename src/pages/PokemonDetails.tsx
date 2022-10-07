import ErrorPokemon from "../components/ErrorPokemon";
import ProgressBar from "../components/ProgressBar";
import { getPokemonDetails } from "../services/getPokemonDetails";
import { Type } from "../styledComponents/Pokemon";
import { Abilities, Img, PokeDetails, PokeDetailsContainer, PokeImg, PokeInfo, PokemonDetailsLoading, PokeName, Stat, Stats, Types } from "../styledComponents/PokemonDetails";

const PokemonsDetails = () => {


    const { pokemonDetails } = getPokemonDetails()

    const { name , id , types , sprites , abilities , stats } = pokemonDetails

    console.log(pokemonDetails)

    return (
        <>
        { Object.keys(pokemonDetails).length == 0 
            ?<PokeDetailsContainer>
                <PokemonDetailsLoading/>
            </PokeDetailsContainer>
            :pokemonDetails == "error"
            ?<ErrorPokemon type={"con ese nombre"}/>
            :<PokeDetailsContainer>
                <PokeDetails>
                    <PokeImg><Img src={sprites?.other.dream_world.front_default} alt={name} /></PokeImg>
                    <PokeInfo>
                        <PokeName>#{id} {name?.toUpperCase()}</PokeName>
                        <Types>
                            {types?.map(item =>(
                                <Type key={item.type.name} type={item.type.name}>{item.type.name}</Type>
                            ))}
                        </Types>
                        <Abilities>
                            {abilities?.map(item=>(
                                <span key={item.ability.name}>⚔️ {item.ability.name}</span>
                            ))}
                        </Abilities> 
                        <Stats>
                            {stats?.map(item=>(
                                <Stat key={item.stat.name}>
                                    <span>{item.stat.name}</span> <ProgressBar max={100} value={(((item.base_stat*1)/255)*100).toFixed(1)} />
                                </Stat>
                            ))}
                        </Stats>
                    </PokeInfo>
                </PokeDetails>
            </PokeDetailsContainer>
        }
        </>
    )
}

export default PokemonsDetails