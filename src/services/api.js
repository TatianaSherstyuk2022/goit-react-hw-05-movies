import axios from 'axios';

const API_KEY = '6761e5de3d20f3ac36b904d02ab8823a';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const fetchTrendingApi = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return data;
}

export const fetchSearchApi = async (query) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};

export const fetchReview = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
