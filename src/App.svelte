<script>
  import { Router, Route } from "svelte-routing";
  import Home from "$routes/Home.svelte";
  import SignUp from "$routes/SignUp.svelte";
  import LogIn from '$routes/LogIn.svelte'

  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="Home" component="{Home}" />
    <Route path="login" component="{LogIn}" />
    <Route path="/" component="{SignUp}" />
  </div>
</Router>
