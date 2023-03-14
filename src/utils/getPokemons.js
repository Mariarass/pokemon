import axios from "axios";

export const getPokemon = async (data) => {

    const pokemonData = await Promise.all(data.map(async (pokemon) => {
        const pokemonDataResponse = await axios.get(pokemon.pokemon?pokemon.pokemon.url:pokemon.url)
        const result = pokemonDataResponse.data
        const name = result.name
        const image = result.sprites.other["official-artwork"].front_default
        const types = result.types.map((type) => type.type)
        const id = result.id

        return {name, image, types, id}

    }))
    return pokemonData
}