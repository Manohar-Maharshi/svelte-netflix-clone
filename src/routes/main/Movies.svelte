<script>
	import Row from '$lib/Row.svelte';
	import { uriArray} from '$store/movieRows'
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

<main class="pt-[5rem]">
	{#await getGenres()}
		<p class="text-gray-100">loading...</p>
	{:then result}
		{#each result.genres as {name,id}, index}
			<Row name={`Popular ${name} Movies`} uri={`https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${id}`} />
		{/each}
	{/await}
	{#each $uriArray as {name,uri}, index}
		<Row {name} {uri} />
	{/each}
		<Footer />

</main>