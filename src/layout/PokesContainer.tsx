import { PropsPokesContainer } from "../models/props"
import Container from "../styledComponents/Container"

const PokesContainer = ({ children }:PropsPokesContainer) => {

    return(
        <Container>
            {children}
        </Container>
    )
}

export default PokesContainer