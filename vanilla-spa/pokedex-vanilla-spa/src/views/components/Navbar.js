let Navbar = {
  render: async () => {
    let view =  /*html*/`
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div
            id="navbarBasicExample"
            class="navbar-menu is-active"
            aria-expanded="false"
          >
            <div class="navbar-start">
              <p class="navbar-item"> 
                <img src='../../images/zubat.png' alt='pokedex' />
                <span> Pokédex </span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    `
    return view
  },
  after_render: async () => { }
}

export default Navbar;