<script>
  import {Route} from 'tinro'; 
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

</script>




<Route>
	<Route path="/">
		<SignUp />
	</Route>
	<Route path="/login">
		<LogIn />
	</Route>
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
	<Route fallback>
		<Error />
	</Route>
</Route>
