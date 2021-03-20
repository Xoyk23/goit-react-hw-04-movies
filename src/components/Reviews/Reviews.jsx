import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getFilmReviews } from '../../services/moviesApi';

class Reviews extends Component {
  state = {
    reviews: null,
  };

  componentDidMount() {
    getFilmReviews(this.props.filmId).then(response =>
      this.setState({ reviews: response }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <b>Reviews</b>
        {(!reviews || reviews.length === 0) && (
          <p>No reviews on this film, sorry </p>
        )}
        {reviews && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default Reviews;
