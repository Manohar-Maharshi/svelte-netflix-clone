<script>
	import {router} from 'tinro'
	import { uriArray,fetchMovies } from '$store/movieRows'
	import movieTrailer from 'movie-trailer';

	export let name = "";
	export let uri = "";
</script>
<div class="mb-5">
	<div class="container mx-auto px-4 md:px-0 flex flex-col -mt-20 -z-10">
		<h2 class="text-2xl  font-medium leading-relaxed my-2">{name}</h2>
	      <div class="flex overflow-x-auto went px-1" >
	        <div class="flex flex-nowrap items-center space-x-5 " >
	        	{#await fetchMovies(uri)}
	        		loading...
	    		{:then result} 		
					{#each result as item}	
						{#if !!item?.backdrop_path}						
							<div on:click={() => router.goto(`/browse/tv/${item?.id}`)} class="  group w-[17rem] h-[10rem] my-1 rounded hover:ring hover:ring-gray-400 cursor-pointer">
								<div class=" w-full h-full">
									<img loading="lazy" title={item?.name} class="w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt="poster">
								</div>
							</div>
						{/if}
					{/each}
	        	{/await}
	        </div>
	      </div>
	</div>
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