import { useState } from "react"
import {  useSelector } from "react-redux"
import { useForm } from "../hooks/useForm"
import { useTypes } from "../hooks/useTypes"
import { Img, Nav, NavBarContainer, Favorites, Filter, Input, Logo, Search, FilterPokemon, Select, FavoritesPokemons, PokesFav, CheckPokeFavs } from "../styledComponents/NavBar"
import PokemonFav from "./PokemonFav"

const NavBar = () => {

    const state = useSelector( state => state)
    const { favoritos } = state.pokemon

    const [ modalFavoritos , setModalFavoritos ] = useState(false)

    const { pokemonTypes } = useTypes() 
    
    const [ inputs , handleFilter , reset ] = useForm({
        name: "",
        type : ""
    })

    const {  type , name } = inputs

    return (
        <NavBarContainer>
            <Nav>
                <Logo to={'/'}>
                    <Img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="POKEAPI" />
                </Logo>
                <Filter>
                    <FilterPokemon>
                        <Input type="text" name="name" value={name} placeholder="Ingrese Pokemon" onChange={handleFilter}/>
                        <Search to={ `/pokemon/${name}`} onClick={reset}>🔎</Search>
                        {/* {name.length
                        ?<Search to={ `/pokemon/${name}`} onClick={reset}>🔎</Search>
                        :<Search to={``}>🔎</Search>} */}
                    </FilterPokemon>
                    <Select name="type" id="" value={type} onChange={handleFilter}> 
                        <option value="" selected disabled hidden>Choose type</option>
                        <option >none</option>
                        {pokemonTypes.length < 1
                        ? <option value="">...</option>
                        : pokemonTypes.map(item => (
                            <option key={item} value={item}>{item}</option>)
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