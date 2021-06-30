const Utils = {
  parseRequestURL: () => {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/")
    let request = {
      pokemonId: null
    }
    request.pokemonId = r[2]

    return request
  },
  sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default Utils;