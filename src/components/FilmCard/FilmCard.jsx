import React from 'react';
import PropTypes from 'prop-types';

import { imageUrl } from '../../services/moviesApi';

import styles from './FilmCard.module.css';

const FilmCard = ({ film }) => {
  return (
    <div className={styles.card}>
      <div>
        <img
          src={imageUrl + film.poster_path}
          alt={film.original_title}
          width="200"
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>{film.original_title}</h2>
        <p>User Rating: {film.vote_average * 10} %</p>

        <p className={styles.about}>About Film:</p>
        <p>{film.overview}</p>
        <h2>Genres: </h2>
        <ul className={styles.genreList}>
          {film.genres.map(genre => (
            <li className={styles.genresItem} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;
