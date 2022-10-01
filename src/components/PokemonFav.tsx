import { useDispatch } from "react-redux"
import { favorite } from "../redux/actions/pokemonActions"
import { Fav, Img, PokeFav, PokeFavImg, PokeFavInfo } from "../styledComponents/NavBar"

const PokemonFav = ({ pokemonFav }) => {

    const { name , id , sprites } = pokemonFav

    const dispach = useDispatch()

    return (
        <PokeFav>
            <PokeFavImg><Img src={sprites.front_default} alt="" /></PokeFavImg>
            <PokeFavInfo>
                <span>{name}</span>
                <span>#{id}</span>
            </PokeFavInfo>
            <Fav onClick={()=>dispach(favorite(pokemonFav))}>❤️</Fav>
        </PokeFav>
    )
}

export default PokemonFav