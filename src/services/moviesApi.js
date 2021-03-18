const mainUrl = 'https://api.themoviedb.org/3';
const apiKey = '95c834b1e89ed2a3d2569e8e8677470c';
const imageUrl = 'https://image.tmdb.org/t/p/w500';

const getTrending = async () => {
  return await await fetch(
    `${mainUrl}/trending/all/day?api_key=${apiKey}&media_type=movie,`,
  )
    .then(responce => responce.json)
    .then(json => json.results)
    .catch(console.log);
};

export { getTrending };
