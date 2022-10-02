import { useState } from "react"
import {  useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { types } from "../services/types"
import { Img, Nav, NavBarContainer, Favorites, Filter, Input, Logo, Search, FilterPokemon, Select, FavoritesPokemons, PokesFav, CheckPokeFavs } from "../styledComponents/NavBar"
import PokemonFav from "./PokemonFav"

const NavBar = () => {

    const state = useSelector( state => state)
    const { favoritos } = state.pokemon

    const [ modalFavoritos , setModalFavoritos ] = useState(false)

    const [ pokemonTypes ] = types()
    
    const [ inputs , handleFilter] = useForm({
        type : String
    })

    const {  type } = inputs

    return (
        <NavBarContainer>
            <Nav>
                <Logo to={'/'}>
                    <Img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="POKEAPI" />
                </Logo>
                <Filter>
                    <FilterPokemon>
                        <Input type="text" name="name" placeholder="Ingrese Pokemon" onChange={handleFilter}/>
                        <Search>🔎</Search>
                    </FilterPokemon>
                    <Select name="type" id="" value={type} onChange={handleFilter}>
                        {pokemonTypes.length < 1
                        ? <></>
                        : pokemonTypes.map(item => (
                            <option key={item.name} value={item.name}>{item.name}</option>)
                        )}
                    </Select>
                </Filter>
                <Favorites onClick={()=>setModalFavoritos(!modalFavoritos)}>❤️</Favorites>
                {favoritos.length > 0 ? 
                    modalFavoritos ?
                        <FavoritesPokemons> 
                            <PokesFav>
                                {favoritos.map(pokemon =>(
                                    <PokemonFav pokemonFav={pokemon}/>
                                ))}
                            </PokesFav>
                        <CheckPokeFavs to={'/pokemones/favoritos'}>Ver favoritos</CheckPokeFavs>
                        </FavoritesPokemons> 
                    :<></>
                : <></>}
            </Nav>
        </NavBarContainer>
    )
}

export default NavBar