import React, { Component } from 'react';
import { getTrending } from '../../services/moviesApi';

import MoviesList from '../../components/MoviesList';

import styles from './HomePage.module.css';

class HomePage extends Component {
  state = { movies: null };

  componentDidMount() {
    getTrending().then(threndingsMovie =>
      this.setState({ movies: threndingsMovie }),
    );
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        <h1 className={styles.title}>Trending Movies: </h1>

        {movies && (
          <MoviesList movies={movies} location={this.props.location} />
        )}
      </>
    );
  }
}

export default HomePage;
