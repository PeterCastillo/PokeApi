import { useSearchParams } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { types } from "../services/types"
import { Img, Nav, NavBarContainer, Favorites, Filter, Input, Logo, Search, FilterPokemon, Select } from "../styledComponents/NavBar"

const NavBar = () => {

    const [ searchParamas , setSearchParamas ] = useSearchParams()


    const [ pokemonTypes , loading ] = types()

    const [ inputs , handleFilter] = useForm({
        name : String,
        type : String
    })

    const { name , type } = inputs

    const handleUseFilter = () => {
        if(name.length > 1 ){
            searchParamas.set("name", name ) 
            setSearchParamas(searchParamas)
        }
        if(type.length > 1 ){
            searchParamas.set("type", type ) 
            setSearchParamas(searchParamas)
        }
    }


    return (
        <NavBarContainer>
            <Nav>
                <Logo>
                    <Img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="POKEAPI" />
                </Logo>
                <Filter>
                    <FilterPokemon>
                        <Input type="text" name="name" value={name} placeholder="Ingrese Pokemon" onChange={handleFilter}/>
                        <Search onClick={handleUseFilter}>🔎</Search>
                    </FilterPokemon>
                    <Select name="type" id="" value={type} onChange={handleFilter}>
                        {loading
                        ? <></>
                        : pokemonTypes.map(item => (
                            <option key={item.name} value={item.name}>{item.name}</option>)
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