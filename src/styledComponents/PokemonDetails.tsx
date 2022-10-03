import styled from 'styled-components'

export const PokeDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`

export const PokeDetails = styled.div`
    max-width: 1000px;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1 0 15rem;
    align-items: center;
    background-color: #eee;
    border-radius: 1rem;
`

export const PokeImg = styled.div`
    padding: 1rem;
    flex: 1 2 20rem;
`
export const PokeInfo = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1 1 20rem;
`

export const PokeName = styled.span`
    font-weight: bold;
    letter-spacing: 0.15rem;
    font-size: 1.7rem;
`

export const Abilities = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    letter-spacing: 0.05rem;
    gap: 0.3rem;
`

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`


export const Types = styled.div`
    display: flex;
    gap: 0.8rem;
`


export const Stat = styled.div`
    font-size: 17px;
    letter-spacing: 0.05rem;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    flex-wrap: wrap;
    progress {
        -webkit-appearance: none;
        ::-webkit-progress-value {
            background-color: #1da71d;
            border-radius: 1rem;
        }
        ::-webkit-progress-bar {
        height: 1rem;
        padding: 0.2rem;
        border-radius: 1rem;
        background-color: #dbdbdb;
    }
    }
`


export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const PokemonDetailsLoading = styled.div`
    width: 1000px;
    margin: 1rem;
    height: 40rem;
    border-radius: 1rem;
    animation: progress 1.3s ease-in-out infinite;
    background-color: #eee;
    background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
    background-size: 200px 100%;
    background-repeat: no-repeat;

@keyframes progress {
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
    }
`

export const PokemonDetailsError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 1000px;
    background-color: #eee;
    padding: 2rem;
    border-radius: 1rem;
    margin: 1rem;

`
export const PokeImgError = styled.div`
    width: 15rem;
    height: 15rem;
`

export const PokeInfoError = styled.span`
    font-size: 2rem;
    font-weight: bold;
    max-width: 600px;
`