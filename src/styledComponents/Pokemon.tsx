import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Pokemon = styled.div`
    position: relative;
`

export const PokeFavorite = styled.span`
    background-color: antiquewhite;
    position: absolute;
    right: 0%;
    font-size: 1.25rem;
    padding: 0.2rem;
    z-index: 25;
    border-radius: 0rem 1rem 0rem 1rem;
    color: black;
    filter: ${(props) =>( props.favorite ? "none" : "grayscale(100%);")};
    cursor: pointer;
`

export const PokemonInfo = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
    height: 8rem;
    padding: 0.5rem;
    width: 100%;
    justify-content: space-around;
    border-radius: 1rem;
`

export const PokeName = styled(Link)`
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
`
export const PokeId = styled.span`
    font-weight: bold;
`
export const PokeType = styled.div`
    display: flex;
    gap: 0.4rem;
    font-size: 1.2rem;
    align-items: center;
`
export const Type = styled.span`
    background-color: aqua;
    padding: 0.3rem;
    border-radius: 0.5rem;
`

export const  PokemonImg = styled.div`
    height: 8rem;
    position: absolute;
    right: -0.5rem;
    top: 0rem;
`

export const PokeImg = styled.img`
    width: 100%;
    height: 100%;
`

export const BtnsContainer = styled.div`
    position: fixed;
    max-width: 400px;
    height: 2rem;
    bottom: 2rem;
    z-index: 100;
    left: 0%;
    right: 0%;
    margin-left: auto;
    margin-right: auto;
    padding: 0rem 1rem;
    display: flex;
    gap: 0.1rem;
`
export const Btn = styled.button`
    font-weight: bold;
    width: 50%;
    height: 100%;
    text-align: center;
    padding-right: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    color: white;
    background-color: green;
    transition: all 150ms ease;
    letter-spacing: 0.1rem;
    &:hover {
        background-color: #b5fcb5;
    }
` 