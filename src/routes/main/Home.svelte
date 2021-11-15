<script>
	import {onMount} from 'svelte'
	import { uriArray} from '$store/movieRows'
	import Banner from '$lib/Banner.svelte'
	import Row from '$lib/Row.svelte';
	import NetflixRow from '$lib/NetflixRow.svelte';
	import movieTrailer from 'movie-trailer';
  	import Footer from '$lib/Footer.svelte'



	const getGenres = async () => {
		const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1&language=en-US')
		return await res.json();
	}

	const getMoviesByGenre = async () => {
		const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${id}`)
		return await res.json();
	}

</script>

<Banner />


<main>	
	<NetflixRow name="Netflix Originals" uri="https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_network=123" />
	{#each $uriArray as {name,uri}, index}
		<Row {name} {uri} />
	{/each}
	{#await getGenres()}
		loading...
	{:then result}
		{#each result.genres as {name,id}, index}
			<Row name={`Popular ${name} Movies`} uri={`https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${id}`} />
		{/each}
	{/await}
	<Footer />
</main>





