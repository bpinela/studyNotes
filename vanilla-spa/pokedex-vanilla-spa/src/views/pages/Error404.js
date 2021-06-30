let Error404 = {
  render: async () => {
    let view =  /*html*/`
      <section class="section">
          <img src="../../images/404.png" class="centered" />
      </section>
    `
    return view
  },
  after_render: async () => { }
}
export default Error404;