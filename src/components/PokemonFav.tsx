import { useDispatch } from "react-redux"
import { PropsPokemon } from "../models/props"
import { favorite } from "../redux/actions/pokemonActions"
import { Fav, Img, PokeFav, PokeFavImg, PokeFavInfo } from "../styledComponents/NavBar"

const PokemonFav = ({ pokemon }:PropsPokemon):JSX.Element => {

    const { name , id , sprites } = pokemon

    const dispach = useDispatch()

    return (
        <PokeFav>
            <PokeFavImg><Img src={sprites.front_default} alt="" /></PokeFavImg>
            <PokeFavInfo>
                <span>{name}</span>
                <span>#{id}</span>
            </PokeFavInfo>
            <Fav onClick={()=>dispach(favorite(pokemon))}>❤️</Fav>
        </PokeFav>
    )
}

export default PokemonFav