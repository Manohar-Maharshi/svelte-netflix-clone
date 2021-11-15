<script>
	import {router} from 'tinro';

	import { uriArray,fetchMovies } from '$store/movieRows'
	import movieTrailer from 'movie-trailer';

	export let name = "";
	export let uri = "";

	let promise;
	let clickedMovieData = null;
	let movieData = null;

	const getMovieData = (id) => {
		if(movieData){
			movieData = null;
		}else{
			promise = fetchClickedMovieData(id)
		}
	}

	const fetchClickedMovieData = async (id) => {
 		const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&append_to_response=providers,videos,images,alternative_titles,credits,keywords,recommendations,reviews,similar`)
 		const json = await res.json();
		movieData = json;
 		return json;
	}
</script>
<div class="mb-4">
	<div class="container mx-auto px-4 md:px-0 flex flex-col mb-2">
		<h2 class="text-2xl  font-medium leading-relaxed my-2">{name}</h2>
	      <div class="flex overflow-x-auto went px-1" >
	        <div class="flex flex-nowrap items-center space-x-5" >
	        	{#await fetchMovies(uri)}
	        		loading...
	    		{:then result}
					{#each result as item}	
						{#if !!item?.poster_path}						
							<div on:click={() => getMovieData(item?.id)} class="group w-[11rem] my-1 rounded hover:ring hover:ring-gray-400 cursor-pointer">
								<img class="  w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="poster">
							</div>
						{/if}
					{/each}
	        	{/await}
	        </div>
	      </div>
	</div>
		{#if movieData}
			<section class="bg-[#090909] w-full md:min-h-[25rem]">
				<div class="container mx-auto py-3">
					{#await promise}
						loading...
					{:then result}
						<div class="w-full md:min-h-[25rem] flex px-5 md:px-0 justify-between space-x-3">
							<div class="w-full">
								<div class="flex flex-col justify-center  h-full">
									<h2 class="font-bold md:text-[2rem] leading-relaxed truncate">{result?.name}</h2>
									<p class="line-clamp-3">{result?.overview}</p>
									{#if result?.credits?.cast}
										 <div class="w-full line-camp-2 leading-relaxed py-2 text-sm opacity-8">
									    	<p class="line-camp-2 text-gray-300">
									    		<span>Starring :</span> 
									    		{#each result?.credits?.cast.slice(0,5) as cast, index}
									    		    <span>{cast?.name} &nbsp;</span>
									    		{/each}
									    	</p>
									    </div>					
									{/if}
								    <div class="flex items-center space-x-5 my-5 mb-12">
								    	<button on:click={() => router.goto(`/browse/tv/${result?.id}`)} class="bg-[#e50914] px-6 text-center py-[0.5rem] font-medium rounded bg-gray-100">
								    		<div class="flex items-center justify-center space-x-1">
								    			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
												  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
								    			<span>Know More</span>
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
							<div class="hidden md:block w-full">				
								{#await movieTrailer(`${result?.name}`)}
									loading...Trailer
								{:then id}
									<iframe title="Youtube Iframe for Movie Trailer's" type="text/html" class="w-full min-h-[25rem]" src={`https://www.youtube.com/embed/${id}?showinfo=0&iv_load_policy=3&controls=0&disablekb=1&rel=0`} frameborder="0"></iframe>
								{/await}
							</div>
						</div>
					{/await}
				</div>
			</section>
		{/if}
</div>


<style>
	::-webkit-scrollbar {
	  width: 14px;
	  display: none;
	}
	::-webkit-scrollbar-track {
	  box-shadow: inset 0 0 10px 10px transparent;
	  border: solid 4px transparent;
	}

	::-webkit-scrollbar-thumb {
	  box-shadow: inset 0 0 14px 14px #1c1c1c;
	  border: solid 5px transparent;
	  border-radius: 14px;
	}
	::-webkit-scrollbar-button {
	  display: none;
	}
</style>