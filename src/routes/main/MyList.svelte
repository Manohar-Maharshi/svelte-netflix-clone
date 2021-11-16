<script>
	import { uriArray,fetchMovies } from '$store/movieRows'
	import Tabs from "$lib//Tabs.svelte";


	let tabItems = [
		{ label: "Movies", value: 1 },
		{ label: "Tv Shows", value: 2 },
	];

	let currentTab;
</script>
<main class="mt-[4rem]">
	<div class="container mx-auto px-4 md:px-0 w-full">
		<div class="flex flex-col justify-center w-full">
			<div class="flex items-center space-x-3   font-medium leading-relaxed my-4">
				<h4 class="text-[1.5rem]">My List :</h4>
				<Tabs bind:activeTabValue={currentTab} items={tabItems} />
			</div>
			{#if 1 === currentTab}
			    <div class="grid grid-cols-2 md:grid-cols-6 place-items-center gap-y-3 md:gap-y-6" >
			    	{#await fetchMovies("https://api.themoviedb.org/3/trending/movie/week?api_key=04c35731a5ee918f014970082a0088b1")}
			    		loading...
					{:then result} 		
						{#each result as item}	
							<div class="group w-[9rem] md:w-[11rem] my-1 rounded hover:ring hover:ring-gray-400 cursor-pointer">
								<img loading="lazy" class="  w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="poster">
							</div>
						{:else}
							<p>No Movies/Shows on your list</p>
						{/each}
			    	{/await}
			    </div>
			{/if}
			{#if 2 === currentTab}
			    <div class="grid grid-cols-2 md:grid-cols-6 gap-y-3 place-items-center md:gap-y-6" >
			    	{#await fetchMovies("https://api.themoviedb.org/3/discover/tv?api_key=04c35731a5ee918f014970082a0088b1&with_network=123")}
			    		loading...
					{:then result} 		
						{#each result as item}	
							<div class="group w-[9rem] md:w-[11rem] my-1 rounded hover:ring hover:ring-gray-400 cursor-pointer">
								<img loading="lazy" class="  w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="poster">
							</div>
						{:else}
							<p>No Movies/Shows on your list</p>
						{/each}
			    	{/await}
			    </div>
			{/if}
		</div>
	</div>
</main>