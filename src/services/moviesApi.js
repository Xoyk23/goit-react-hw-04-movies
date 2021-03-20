// const mainUrl = 'https://api.themoviedb.org/3';
// const apiKey = '95c834b1e89ed2a3d2569e8e8677470c';
// const imageUrl = 'https://image.tmdb.org/t/p/w500';

// const getTrending = async () => {
//   return await fetch(
//     `${mainUrl}/trending/movie/day?api_key=${apiKey}&media_type=movie`,
//   )
//     .then(response => response.json())
//     .then(json => json.results)
//     .catch(console.log);
// };

// const getFilmByQuery = async query => {
//   return await fetch(`${mainUrl}/search/movie?api_key=${apiKey}&query=${query}`)
//     .then(response => response.json())
//     .then(json => json.results)
//     .catch(console.log);
// };

// const getMovieById = async id => {
//   return await fetch(`${mainUrl}/movie/${id}?api_key=${apiKey}`)
//     .then(response => response.json())
//     .catch(console.log);
// };

// const getFilmCast = async id => {
//   return await fetch(`${mainUrl}/movie/${id}/credits?api_key=${apiKey}`)
//     .then(response => response.json)
//     .then(json => json.cast)
//     .catch(console.log);
// };

// const getFilmReviews = async id => {
//   return await fetch(`${mainUrl}/movie/${id}/reviews?api_key=${apiKey}`)
//     .then(response => response.json)
//     .then(json => json.reviews)
//     .catch(console.log);
// };

const mainUrl = 'https://api.themoviedb.org/3';
const apiKey = '0a6cfc32872b215b2ba133ea5a8329d8';
const imageUrl = 'https://image.tmdb.org/t/p/w500';

const getTrending = async () => {
  return await fetch(
    `${mainUrl}/trending/movie/day?api_key=${apiKey}&media_type=movie`,
  )
    .then(response => response.json())
    .then(json => json.results)
    .catch(console.log);
};

const getFilmByQuery = async query => {
  return await fetch(`${mainUrl}/search/movie?api_key=${apiKey}&query=${query}`)
    .then(response => response.json())
    .then(json => json.results)
    .catch(console.log);
};

const getFilmById = async id => {
  return await fetch(`${mainUrl}/movie/${id}?api_key=${apiKey}`)
    .then(response => response.json())
    .catch(console.log);
};

const getFilmCast = async id => {
  return await fetch(`${mainUrl}/movie/${id}/credits?api_key=${apiKey}`)
    .then(response => response.json())
    .then(json => json.cast)
    .catch(console.log);
};

const getFilmReviews = async id => {
  return await fetch(`${mainUrl}/movie/${id}/reviews?api_key=${apiKey}`)
    .then(response => response.json())
    .then(json => json.results)
    .catch(console.log);
};

export {
  getTrending,
  getFilmByQuery,
  getFilmById,
  getFilmCast,
  getFilmReviews,
  imageUrl,
};
