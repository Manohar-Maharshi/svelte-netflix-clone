<script>
  import {Route} from 'tinro'; 
  import SignUp from "$routes/SignUp.svelte";
  import LogIn from '$routes/LogIn.svelte';

  import HomeNavBar from '$lib/HomeNavBar.svelte'

  import Home from "$routes/main/Home.svelte";
  import Movies from '$routes/main/Movies.svelte'
  import TvShows from '$routes/main/TvShows.svelte'
  import Profile from '$routes/main/Profile.svelte'

</script>




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
</Route>
