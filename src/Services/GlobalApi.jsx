import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3/"
const api_key="132b378a804ce5f8320e2c7bea6e9e7d"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=132b378a804ce5f8320e2c7bea6e9e7d';

// https://api.themoviedb.org/3/movie/157336?api_key=132b378a804ce5f8320e2c7bea6e9e7d

// https://api.themoviedb.org/3/discover/movie?api_key=132b378a804ce5f8320e2c7bea6e9e7d&with_genres=16

const getTrendingVideos=axios.get(movieBaseUrl+
  "trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}


