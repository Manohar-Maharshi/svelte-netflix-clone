<script>
	import {onMount} from 'svelte'
	import movieTrailer from 'movie-trailer';

	import {meta} from 'tinro';
	const route = meta();


	let open = false;

	const getMovieDetailsFromId = async (id) => {
 		const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&append_to_response=providers,videos,images,alternative_titles,credits,keywords,recommendations,reviews,similar`)
 		const json = await res.json();
 		return json;
	}

	const timeConvert = (n) => {
		var num = n;
		var hours = (num / 60);
		var rhours = Math.floor(hours);
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		return rhours + "h" + " " + rminutes + "m";
	}
</script>


{#await getMovieDetailsFromId(route?.params?.title)}
	<main style="background-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%); background-repeat: no-repeat; background-size: cover;background-position: top;" class="bg-[#000cc] w-full h-[30rem] md:h-[35rem]">
	</main>
{:then result}	
	<main style="background-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url({'https://image.tmdb.org/t/p/original' + result?.backdrop_path}); background-repeat: no-repeat; background-size: cover;background-position: top;" class="bg-[#000cc] w-full h-screen md:h-[35rem]">
		<div class="bg-[#000] bg-opacity-60 pt-[7rem] md:pt-[4rem]">		
			<div class="container mx-auto w-full h-full px-4 md:px-0">
				<div class="flex flex-col justify-center mt-[3.7rem] md:mt-10 md:w-[50%] h-full">
					<dialog class="rounded md:w-[60%] bg-[#090909]" {open}>
						<p on:click={() => open = !open} class="text-right text-red-100 mb-2 cursor-pointer">Close</p>
							{#await movieTrailer(`${result?.name}`)}
								loading...Trailer
							{:then id}
								<iframe title="Youtube Iframe for Movie Trailer's" type="text/html" class="w-full min-h-[25rem]" src={`https://www.youtube.com/embed/${id}?showinfo=0&iv_load_policy=3&controls=0&disablekb=1&rel=0`} frameborder="0"></iframe>
							{/await}
					</dialog>
					<div class="leading-relaxed my-2 md:-mt-0 -mt-20">
						<h2 class="font-bold text-3xl md:text-[2.6rem] py-2 truncate">{result?.name}</h2>
						<small>{result?.tagline}</small>
					</div>
					<p class="leading-none text-red-100 text-[0.9rem]">{new Date(result?.first_air_date).getFullYear()} | {result?.original_language.toUpperCase()} | ⭐{result?.vote_average}</p>
					<p class="my-3 mt-5">{result?.overview}</p>
					<div class="w-full flex flex-col space-y-2">
						<p class="w-full line-camp-2">
							<span class="text-[#e50914]">No. Seasons:</span>
							<span class="hover:text-[#e50914] cursor-default">{result?.number_of_seasons} &nbsp;</span>
						</p>
						<p class="w-full line-camp-2">
							<span class="text-[#e50914]">No. Episodes:</span>
							<span class="hover:text-[#e50914] cursor-default">{result?.number_of_episodes} &nbsp;</span>
						</p>
						<p class="w-full line-camp-2">
							<span class="text-[#e50914]">Starring:</span>
							{#each result?.credits?.cast.splice(0,10) as item, index}
								<span class="hover:text-[#e50914] cursor-default">{item?.name} &nbsp;</span>
							{/each}
						</p>
						<p class="w-full line-camp-2 text-gray-300">
							<span class="text-[#e50914]">Genres:</span>
							{#each result?.genres as item, index}
								<span class="hover:text-[#e50914] cursor-default">{item?.name} &nbsp;</span>
							{/each}
						</p>
						<p class="w-full line-camp-2 text-gray-300">
							<span class="text-[#e50914]">Production:</span>
							{#each result?.production_companies as item, index}
								<span class="hover:text-[#e50914] cursor-default">{item?.name}({item?.origin_country}) &nbsp;</span>
							{/each}
						</p>
					</div>
				    <div class="flex items-center space-x-5 my-5 mb-12">
				    	<button on:click={() => open = !open} class="bg-[#e50914] px-6 text-center py-[0.5rem] font-medium rounded bg-gray-100">
				    		<div class="flex items-center justify-center space-x-1">
				    			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
								  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
				    			<span>Play Trailer</span>
				    		</div>
				    	</button>
				    	<button class="text-gray-700 px-6 text-center py-[0.5rem] font-medium rounded bg-gray-100">
							<div class="flex items-center justify-center space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
								</svg>
								<span>My List</span>
							</div>
				    	</button>
				    </div>
				</div>
			</div>
		</div>
	</main>

{/await}