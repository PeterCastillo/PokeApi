import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavBarContainer = styled.div`
    background-color: red;
    /* position: fixed;
    width: 100vw; */
`

export const Nav = styled.div`
    max-width: 1000px;
    margin: auto;
    display: flex;
    position: relative;
    padding: 0.5rem 1rem 0.5rem 1rem;
    flex-wrap: wrap;
    position: relative;
`

export const Favorites = styled.span`
    position: absolute;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    top: 1.75rem;
`

export const Logo = styled.div`
    height: 5rem;
    width: 8rem;
    align-self: center;
    margin-right: 2rem;
`
export const Filter = styled.div`
    align-self: center;
    display: flex;
    flex-grow: 1;
    max-width: 40rem;
    min-width: 20rem;
    flex-shrink: 2;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-right: 4rem;
    @media screen and (max-width: 615px) {
        min-width: auto;
        max-width: 100%;
        margin-right: 0rem;
        flex-basis: 100%;
    }
    
`
export const FilterPokemon = styled.div`
    position: relative;
    height: 2.3rem;
    flex: 12rem 3 0;
    display: flex;
`

export const Select = styled.select`
    height: 2.3rem;
    flex: 9rem 1 0;
    border: none;
    border: solid 2px #cacaca;
    outline: none;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
`
export const Input = styled.input`  
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    border: none;
    border: solid 2px #cacaca ;
    outline: none;
    border-radius: 0.5rem;
`
export const Search = styled.span`
    position: absolute;
    background-color: #cacaca;
    height: 100%;
    right: 0;
    padding: 0rem 0.7rem;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
`

export const PokeFavImg = styled.div`
    height: 5rem;
    width: 5rem;
`
export const PokeFavInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: bold;
    font-size: 16px;
`
export const Fav = styled.span`
    font-size: 2rem;
    cursor: pointer;
`
export const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`






export const FavoritesPokemons = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 1rem;
    top: 4.5rem;
    z-index: 50;
`

export const PokeFav = styled.div`
    width: 100%;
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: space-around
`
export const PokesFav = styled.div`
    width: 100%;
    max-height: 15rem;
    background-color: aqua;
    overflow-x: auto;
`

export const CheckPokeFavs = styled(Link)`
    width: 100%;
    border: solid 5px antiquewhite;
    background-color: antiquewhite;
    text-decoration: none;
    font-weight: bold;
    padding: 0.8rem;
    font-size: 18px;
    text-align: center;
    &:hover{
        background-color: red;
    }
`
