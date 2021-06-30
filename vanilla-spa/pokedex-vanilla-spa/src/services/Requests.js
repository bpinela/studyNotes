import { fetch as fetchPolyfill } from 'whatwg-fetch'

let Requests = {
  getPokemon: async (pokemonId) => {
    const options = {
      method: 'GET'
    }

    try {
      const response = await fetchPolyfill(POKE_API + `pokemon/` + pokemonId, options)
      const json = await response.json()
      return json
    } catch (err) {
      window.location.href = '/#/404'
      console.log('Error getting pokémon', err)
    }
  }
}

export default Requests