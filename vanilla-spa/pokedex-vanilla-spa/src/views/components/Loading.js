let Loading = {
  render: async () => {
    let view =  /*html*/`
    <div class="full-loading showing">
      <div class="full-loading__wrapper">
        <div class="full-loading__icon">
          <img class="full-loading__gif" src='./../../images/loading.gif'>
          <span class="full-loading__label">Gotta catch 'em all</span>
        </div>
      </div>
    </div>
    `
    return view
  },
  after_render: async () => { }
}

export default Loading;