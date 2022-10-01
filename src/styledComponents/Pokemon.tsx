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
    height: 8rem;
    padding: 0.8rem;
    width: 100%;
    justify-content: space-around;
    border-radius: 1rem;
    color: white;
    ${({ type }) => handleColorType(type)}
`

export const PokeName = styled(Link)`
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
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
    padding: 0.4rem;
    border-radius: 0.5rem;
    font-weight: bold;
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    ${({ type }) => handleColorType(type)}
`

export const  PokemonImg = styled.div`
    height: 7rem;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
`

export const PokeImg = styled.img`
    width: 100%;
    height: 100%;
`

export const BtnsContainer = styled.div`
    position: fixed;
    max-width: 400px;
    height: 2.3rem;
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
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 18px;
    background-color: #1da71d;
    transition: all 150ms ease;
    letter-spacing: 0.1rem;
    &:hover {
        background-color: #b5fcb5;
    }
` 

const handleColorType = type =>{
    switch(type){
        case('normal'):{
            return 'background-color:#b9b9b9 '
        }
        case('fighting'):{
            return 'background-color: #8f4747'
        }
        case('flying'):{
            return 'background-color: #809ab8'
        }
        case('poison'):{
            return 'background-color: #9c599c'
        }
        case('ground'):{
            return 'background-color: #726767'
        }
        case('rock'):{
            return 'background-color: #3d3c3c'
        }
        case('bug'):{
            return 'background-color: #52f152'
        }
        case('ghost'):{
            return 'background-color: #5c3e68'
        }
        case('steel'):{
            return 'background-color: #6b6b6b'
        }
        case('fire'):{
            return 'background-color: #ff5e5e'
        }
        case('water'):{
            return 'background-color: #8ed2fd'
        }
        case('grass'):{
            return 'background-color: #64c264'
        }
        case('electric'):{
            return 'background-color: #f8f867'
        }
        case('psychic'):{
            return 'background-color: #f74c69'
        }
        case('ice'):{
            return 'background-color: #98ecda'
        }
        case('dragon'):{
            return 'background-color: #9bacc4'
        }
        case('dark'):{
            return 'background-color: #616161'
        }
        case('fairy'):{
            return 'background-color: #ed94ff'
        }
        case('unknown'):{
            return 'background-color: '
        }
        case('shadow'):{
            return 'background-color: #BE9AD3'
        }
        default : {
            return 'background-color: red'
        }
    }
}