import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './MoviesList.module.css';

import routes from '../../routes';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink
            className={styles.link}
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
