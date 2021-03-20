import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import FilmCard from '../../components/FilmCard';

import routes from '../../routes';
import { getFilmById } from '../../services/moviesApi';

import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    film: null,
    cameFrom: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    getFilmById(movieId).then(searchFilm =>
      this.setState({ film: searchFilm }),
    );
    this.setState({ cameFrom: this.props.location.state });
  }

  handleGoBack = () => {
    const { cameFrom } = this.state;

    if (cameFrom) {
      this.props.history.push(cameFrom.from);
      return;
    }

    this.props.history.push(routes.home);
  };

  render() {
    const { film } = this.state;
    return (
      <div className={styles.card}>
        <button
          className={styles.goBackBtn}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        {film && (
          <>
            <FilmCard film={film} />

            <p className={styles.title}>Aditional information</p>
            <ul className={styles.info}>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={{
                    pathname: `${routes.movies}/${film.id}/cast`,
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={{
                    pathname: `${routes.movies}/${film.id}/reviews`,
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Switch>
              <Route
                path={routes.moviesCast}
                exact
                render={props => (
                  <Cast {...props} filmId={this.state.film.id} />
                )}
              />
              <Route
                path={routes.moviesReviews}
                exact
                render={props => (
                  <Reviews {...props} filmId={this.state.film.id} />
                )}
              />
            </Switch>
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
