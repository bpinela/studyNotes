import '@babel/polyfill'

import Home from './views/pages/Home'
import Error404 from './views/pages/Error404'

import Loading from './views/components/Loading'
import Navbar from './views/components/Navbar'
import Bottombar from './views/components/Bottombar'

import Utils from './services/Utils'

const routes = {
  '/pokemon/:pokemonId': Home,
  '/404': Error404
}

const router = async () => {
  const loading = document.getElementById('loading_container')

  loading.innerHTML = await Loading.render()

  navbarRender()

  contentRender()

  footerRender()

  await Loading.after_render()
}

const navbarRender = async () => {
  const header = document.getElementById('header_container')

  header.innerHTML = await Navbar.render()
  await Navbar.after_render()
}

const contentRender = async () => {
  const content = document.getElementById('page_container')
  const request = Utils.parseRequestURL()
  const parsedURL = request.pokemonId ? '/pokemon/:pokemonId' : ''

  const page = routes[parsedURL] ? routes[parsedURL] : Error404

  content.innerHTML = await page.render(request.pokemonId)
  await page.after_render()
}

const footerRender = async () => {
  const footer = document.getElementById('footer_container')

  footer.innerHTML = await Bottombar.render()
  await Bottombar.after_render()
}

window.addEventListener('hashchange', router)

window.addEventListener('load', router)