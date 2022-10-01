import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import PokemonsDetails from './pages/PokemonDetails'
import PokemonFavoritos from './pages/PokemonFavoritos'
import Pokemons from './pages/Pokemos'
import store from './redux/store'
import './styledComponents/normalize.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Pokemons/>}/>
                    <Route path='pokemon/:nombre' element={<PokemonsDetails/>}/>
                    <Route path='pokemones/favoritos' element={<PokemonFavoritos/>}/>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
)
