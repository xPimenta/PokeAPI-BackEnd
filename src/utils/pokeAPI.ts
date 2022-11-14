import axios from "axios"
import { errorFactory } from "./errorFactory"

export const getPokemonImg = async (pokeName: string) => {
	try {
		const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
		const pokeImageUrl = pokeData.data.sprites.front_default
		return pokeImageUrl

	} catch (err) {
		throw errorFactory("error_invalid_pokemon")
	}
}