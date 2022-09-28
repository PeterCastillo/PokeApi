import { types } from "../services/types"
import { Img, Nav, NavBarContainer, Favorites, Filter, Input, Logo, Search, FilterPokemon, Select } from "../styledComponents/NavBar"

const NavBar = () => {

    const [ pokemonTypes , loading ] = types()

    return (
        <NavBarContainer>
            <Nav>
                <Logo>
                    <Img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="POKEAPI" />
                </Logo>
                <Filter>
                    <FilterPokemon>
                        <Input type="text" name="" id="" placeholder="Ingrese Pokemon"/>
                        <Search>🔎</Search>
                    </FilterPokemon>
                    <Select name="" id="">
                        <option disabled selected value=''>Select an option</option>
                        {loading
                        ? <></>
                        : pokemonTypes.map(item => (
                            <option key={item.name} value={item.url}>{item.name}</option>)
                        )}
                    </Select>
                </Filter>
                <Favorites>
                    ❤️
                </Favorites>
            </Nav>
        </NavBarContainer>
    )
}

export default NavBar