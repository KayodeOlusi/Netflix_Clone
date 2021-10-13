const API_KEY = "0a193097a8939855fb1c0f4890eea4c9";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRandom : `/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

export default requests