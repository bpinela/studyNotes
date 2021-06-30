let Bottombar = {
  render: async () => {
    let view =  /*html*/`
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Pokédex built with ☕ and ❤ by Bruno Pinela
          </p>
        </div>
      </footer>
    `
    return view
  },
  after_render: async () => { }
}

export default Bottombar