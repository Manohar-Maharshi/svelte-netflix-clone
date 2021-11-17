<script>
	import { uriArray,fetchMovies } from '$store/movieRows'
	import {router} from 'tinro';
	import Tabs from "$lib//Tabs.svelte";
	import { user } from '$store/user'
	import { auth,db } from '$store/firebase'
	import { doc, getDoc, updateDoc , collection, onSnapshot ,deleteDoc  } from "firebase/firestore";


	let tabItems = [
		{ label: "Movies", value: 1 },
		{ label: "Tv Shows", value: 2 },
	];

	let currentTab;
	let moviesArray = [];
	let tvArray = [];

	$: if($user){	
		onSnapshot(collection(db, "users" , $user?.uid , "MyList" , "Movies" , "Movie"), (doc) => {
		   	moviesArray = [];
		    doc.forEach((d)=>{
		    	moviesArray = [d.data(),...moviesArray]
		    })
		});

		onSnapshot(collection(db, "users" , $user?.uid , "MyList" , "TvShows" , "TvShow"), (doc) => {
		   	tvArray = [];
		    doc.forEach((d)=>{
		    	tvArray = [d.data(),...tvArray]
		    })
		});
	}


	const delMovie = async (id) => {
		try{
			await deleteDoc(doc(db, "users" , $user?.uid , "MyList" , "Movies" , "Movie" , id.toString()));
		}catch(e){
			alert(e.message)
		}finally{
			alert("deleted successfully")
		}
	}
	const delTv = async (id) => {
		try{
			await deleteDoc(doc(db, "users" , $user?.uid , "MyList" , "TvShows" , "TvShow" , id.toString()));
		}catch(e){
			alert(e.message)
		}finally{
			alert("deleted successfully")
		}
	}
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
					{#each moviesArray as item}	
						<div class="relative group w-[9rem] md:w-[11rem] my-1 rounded hover:ring hover:ring-gray-400 cursor-pointer">
							<img on:click={() => router.goto(`/browse/film/${item?.id}`)} loading="lazy" class="  w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.image}`} alt={item?.title}>
							<div on:click={() => delMovie(item?.id)} class="absolute bottom-0">
								❌
							</div>
						</div>
					{:else}
						<div class="h-full flex items-center my-10 justify-center w-full">
							<p >No Movies in your list</p>
						</div>
					{/each}
			    </div>
				<small class="text-center text-gray-900 my-10">double click on poster to remove from the list</small>
			{/if}
			{#if 2 === currentTab}
			    <div class="grid grid-cols-2 md:grid-cols-6 gap-y-3 place-items-center md:gap-y-6" >		
						{#each tvArray as item}	
							<img on:click={() => router.goto(`/browse/tv/${item?.id}`)} loading="lazy" class="  w-full h-full rounded object-cover" src={`https://image.tmdb.org/t/p/w500${item?.image}`} alt={item?.title}>
							<div on:click={() => delTv(item?.id)} class="absolute bottom-0">
								❌
							</div>
						{:else}
							<div class="h-full flex items-center my-10 justify-center w-full">
								<p >No Tv Shows in your list</p>
							</div>
						{/each}
			    </div>
				<small class="text-center text-gray-900 my-10">double click on poster to remove from the list</small>
			{/if}
		</div>
	</div>
</main>