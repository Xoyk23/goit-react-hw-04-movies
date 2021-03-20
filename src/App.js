import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppBar from './components/AppBar';

import Spinner from './components/Spinner';

import routes from './routes';

import './App.css';
// import MoviesInfo from './views/MoviesInfo/MoviesInfo';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route
              path={routes.movieDetailsPage}
              component={MovieDetailsPage}
            />
            <Route path={routes.movies} component={MoviesPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
