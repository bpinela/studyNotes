import Requests from './../../services/Requests'

let Home = {
  render: async (pokemonId) => {
    let pokemon = await Requests.getPokemon(pokemonId)
    
    let view = /*html*/`
      <section class="section">
        <h1 class="mb-16 fs-24"> Pokémon data </h1>
        <img class='sprite' src='${pokemon.sprites.front_default}' alt='${pokemon.name}'/>
        <div class='rows'>
          <div class='row is-full mb-8'>
            <span><b>Name: </b>${pokemon.name}</span>
            <span class="ml-24"><b>Type:</b>
              ${pokemon.types.map(function(type) {
                return (
                  `<span class='${type.type.name} has-text-weight-bold'>
                    ${type.type.name}</span>`
                )
              })}
            </span>
          </div>
          <div class='row is-full mb-8'>
            <span><b>Weight: </b>${pokemon.weight}</span>
            <span class="ml-24"><b>Height: </b>${pokemon.height}</span>
          </div>

          <h1 class="mb-8 fs-20"> Stats </h1>
          <div class='row is-full mb-8'>
            <span><b>HP: </b>${pokemon.stats[5].base_stat}</span>
            <span class="ml-24"><b>Attack: </b>${pokemon.stats[4].base_stat}</span>
            <span class="ml-24"><b>Defense: </b>${pokemon.stats[3].base_stat}</span>
          </div>
          <div class='row is-full mb-8'>
            <span><b>Special Attack: </b>${pokemon.stats[2].base_stat}</span>
            <span class="ml-24"><b>Special Defense: </b>${pokemon.stats[1].base_stat}</span>
            <span class="ml-24"><b>Speed: </b>${pokemon.stats[0].base_stat}</span>
          </div>
        </div>
      </section>
    `
    return view
  },
  after_render: async () => {
  }
}

export default Home;