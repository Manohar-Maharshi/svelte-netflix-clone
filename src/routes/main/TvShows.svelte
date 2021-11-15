<script>
	import TvRow from '$lib/TvRow.svelte';
	import { uriArray} from '$store/movieRows'
	  import Footer from '$lib/Footer.svelte'


	const getGenres = async () => {
		const res = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=04c35731a5ee918f014970082a0088b1&language=en-US')
		return await res.json();
	}

	const getMoviesByGenre = async () => {
		const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${id}`)
		return await res.json();
	}
</script>

<main class="pt-[5rem]">
	{#await getGenres()}
		loading...
	{:then result}
		{#each result.genres as {name,id}, index}
			<TvRow name={`Trending ${name} Tv Shows`} uri={`https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${id}`} />
		{/each}
	{/await}
		<Footer />

</main>