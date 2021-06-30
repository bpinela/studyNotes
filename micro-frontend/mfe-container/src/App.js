import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AppHeader from './components/AppHeader/index';
import MicroFrontend from './components/MicroFrontend/index'
import About from './components/About/index'

import GlobalStyle from './styles/global'

const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_PROFILE_HOST: profileHost,
} = process.env;

// let pokemonId = 1;
// fetch(`${process.env.REACT_APP_CONTENT_HOST}/restaurants.json`)
//   .then(res => res.json())
//   .then(restaurants => {
//     pokemonId = restaurants.length;
//   });

// const getRandomRestaurantId = () =>
//   Math.floor(Math.random() * pokemonId);

const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);
// const Profile = ({ history }) => (
//   <MicroFrontend history={history} host={profileHost} name="Profile" />
// );

// const Random = () => <Redirect to={`/profile/${getRandomRestaurantId()}`} />;

const App = () => (
  <BrowserRouter>
    <>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Browse} />
        {/* <Route exact path="/profile/:id" component={Profile} /> */}
        {/* <Route exact path="/random" render={Random} /> */}
        <Route exact path="/about" render={About} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
)

export default App;
