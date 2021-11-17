<script>
	import { user } from '$store/user'
	import { auth,db } from '$store/firebase'
	import { onAuthStateChanged  } from "firebase/auth";	

	let signedUser = null;

	import {Route,router} from 'tinro'; 
	import SignUp from "$routes/SignUp.svelte";
	import LogIn from '$routes/LogIn.svelte';

	import HomeNavBar from '$lib/HomeNavBar.svelte'
	import Footer from '$lib/Footer.svelte'
	import Error from '$lib/Error.svelte'

	import Home from "$routes/main/Home.svelte";
	import Movies from '$routes/main/Movies.svelte'
	import TvShows from '$routes/main/TvShows.svelte'
	import Profile from '$routes/main/Profile.svelte'
	import Film from '$routes/main/Film.svelte'
	import Tv from '$routes/main/Tv.svelte'
	import MyList from '$routes/main/MyList.svelte'

$: console.log($user)

	$: onAuthStateChanged(auth, (user) => {
		  if (user) {
		    signedUser = user
		  } else {
		    signedUser = null
		  }
	});

	$: if(signedUser){
		$user = signedUser
		router.goto("/browse")
	}else{
		$user = null;
		router.goto("/")
	}

</script>




{#if !$user}	
	<Route path="/*">
		<Route path="/">
			<SignUp />
		</Route>
		<Route path="/login">
			<LogIn />
		</Route>
	</Route>
{:else}	
	<Route path="/browse/*">
		<HomeNavBar />
	    <Route path="/">
	    	<Home />
	    </Route>
		<Route path="/movies">
			<Movies />
		</Route>
		<Route path="/tv-shows">
			<TvShows />
		</Route>
		<Route path="/profile">
			<Profile />
		</Route>
		<Route path="/my-list">
			<MyList />
		</Route>
		<Route path="/film/:title" let:meta>
			<Film />
		</Route>
		<Route path="/tv/:title" let:meta>
			<Tv />
		</Route>
		<Route fallback>
			<Error />
		</Route>
	</Route>
{/if}
