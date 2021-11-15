import {readable} from 'svelte/store';


export const uriArray = readable([
	{
		"name" : "Now Playing Movies",
		"uri" : "https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"
	},
	{	
		"name" : "Trending Movies",
		"uri" : "https://api.themoviedb.org/3/trending/movie/week?api_key=04c35731a5ee918f014970082a0088b1"
	},
	{
		"name" : "Popular Movies",
		"uri" : "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"
	},
	{
		"name" : "Top Movies",
		"uri" : "https://api.themoviedb.org/3/movie/top_rated?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"
	},
]);

export const fetchMovies = async (uri) =>{
	const res = await fetch(uri)
	const json = await res.json();
	return json.results;
}