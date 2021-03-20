import React, { Component } from 'react';
import queryString from 'query-string';

import { getFilmByQuery } from '../../services/moviesApi';
import MoviesList from '../../components/MoviesList';

import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: null,
  };
  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams.query) {
      getFilmByQuery(queryParams.query).then(queryMovies =>
        this.setState({ movies: queryMovies }),
      );
    }
  }

  handleInput = e => {
    this.setState({
      query: e.target.value,
    });
  };

  getMovie = e => {
    e.preventDefault();
    getFilmByQuery(this.state.query).then(queryMovies => {
      this.props.history.push({ search: `?query=${this.state.query}` });
      this.setState({ movies: queryMovies, query: '' });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={styles.container}>
        <form onSubmit={this.getMovie} className={styles.searchForm}>
          <input
            onInput={this.handleInput}
            value={this.state.query}
            className={styles.input}
          />
          <button
            type="button"
            onClick={this.getMovie}
            className={styles.button}
          >
            Search film
          </button>
        </form>
        {movies && (
          <MoviesList movies={movies} location={this.props.location} />
        )}
      </div>
    );
  }
}

export default MoviesPage;
