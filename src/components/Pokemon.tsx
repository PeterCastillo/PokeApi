const Pokemon = ( { pokemon }) => {

    const { name } = pokemon
    console.log(pokemon)

    return (
        <div>
            {name} 
            h
            {pokemon.types.map(item =>(
                <h1>{item.type.name}</h1>
            ))}
        </div>
    )
}

export default Pokemon