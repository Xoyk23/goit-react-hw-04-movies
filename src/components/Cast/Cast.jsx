import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { imageUrl, getFilmCast } from '../../services/moviesApi';

// найти и вставить картинку заглушку типа анонима и.т.п

import defaultImg from '../../Images/default.jpg';

import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    getFilmCast(this.props.filmId).then(response =>
      this.setState({ cast: response.slice(0, 20) }),
    );
  }
  render() {
    const { cast } = this.state;
    return (
      <>
        <b>Cast</b>
        <ul className={styles.list}>
          {cast &&
            cast.map(actor => (
              <li key={actor.id} className={styles.item}>
                {actor.profile_path ? (
                  <img
                    src={imageUrl + actor.profile_path}
                    alt={actor.name}
                    width="100"
                  />
                ) : (
                  // найти и вставить картинку заглушку типа анонима и.т.п
                  <img src={defaultImg} alt={actor.name} width="100" />
                )}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default Cast;
