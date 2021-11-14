<script>
	 const getData = async () => {
	    const res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&query=after&page=1&include_adult=true");
	    return res.json();
	 }

	 let openPopUp = false;
</script>

<main style="background-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%),url('https://image.tmdb.org/t/p/original/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg'); background-repeat: no-repeat; background-size: cover;background-position: top;" class="bg-[#000cc] w-full h-[30rem] md:h-[35rem]">
	<div class="container mx-auto w-full h-full px-4 md:px-0">
		<div class="flex flex-col justify-center md:w-[45%] h-full">
			<h2 class="font-bold text-3xl md:text-[3rem] leading-relaxed truncate">After We Fell</h2>
			<p class="line-clamp-3">Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.</p>
		    <div class="flex items-center space-x-5 my-5 mb-12">
		    	<button class="text-gray-700 px-6 text-center py-[0.5rem] font-medium rounded bg-gray-100">
		    		<div class="flex items-center justify-center space-x-1">
		    			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
						  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
		    			<span>Play</span>
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
</main>

<main class="">
	<div class="mb-20">
		<div class="container mx-auto px-4 md:px-0 flex flex-col -mt-20 mb-2">
			<h2 class="text-2xl  font-medium leading-relaxed my-2">Netflix Originals</h2>
		      <div class="flex overflow-x-auto went px-1" >
		        <div class="flex flex-nowrap items-center space-x-5" >
		        	{#await getData()}
		        		loading...
		    		{:then result} 		
						{#each result.results as item}	
							<div on:click={() => openPopUp = !openPopUp} class="group w-[11rem] my-1 rounded hover:ring hover:ring-gray-400 cursor-pointer">
								<img class="  w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="poster">
							</div>
						{/each}
		        	{/await}
		        </div>
		      </div>
		</div>
		{#if openPopUp}		
			<section class="bg-[#161616] w-full min-h-[25rem]">
				<div class="container mx-auto p-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi ducimus accusamus tempora, beatae aspernatur quos sint consequatur doloribus at excepturi soluta reprehenderit tempore numquam ipsam illum aliquam nisi laborum.
				</div>
			</section>
		{/if}
	</div>
</main>













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