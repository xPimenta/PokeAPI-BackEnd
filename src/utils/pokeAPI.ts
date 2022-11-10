import axios from "axios"

export const getPokemonImg = async (pokeName: string) => {
  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  const pokemonImg = pokemon.data.sprites.front_default
  return pokemonImg
}