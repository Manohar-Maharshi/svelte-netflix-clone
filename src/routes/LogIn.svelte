<script>
	import { auth,db } from '$store/firebase'
	import { createUserWithEmailAndPassword } from "firebase/auth";	
	import { router } from 'tinro'
	let isSignUpFormOpened = false;
	let error = "";

	let email ="";
	let password = "";
	let confirmPassword ="";

	 const handleLogin = () => {
	    if(email.trim() != "" && password.trim() != ""){
	    	router.goto('browse')
	    }else{
	    	alert("Enter email and password!!!!!!");
	    }
	}

	 const handleSignUp = async () => {
	    if(email.trim() != "" && password.trim() != "" && password.trim() != "" && confirmPassword.trim() != ""){
	    	if(password === confirmPassword){
	    		error = "";
	    	}else{
	    		error ="Passwrods didn't match, please check"
	    	}
	    }else{
	    	alert("Must Enter Your Email and Password!!!");
	    }
	 }

	$: if (error) {
		setTimeout(() =>{
			error = "";
		}, 3000);
	}
</script>
<main>
	<div class="relative h-[706.984px]">
		<img class="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg">
	</div>
	<div style="background-image: linear-gradient(to top,#000000cc 0,#00000000 60%,#000000cc 100%);" class="bg-[#00000066] absolute text-white inset-0  h-[706.984px]">
	   <nav class="flex items-center justify-between  container mx-auto px-5 py-8">
		<a href="/">
			<svg viewBox="0 0 111 30" class="fill-[#e50914] w-[6rem] md:w-[8.375rem] h-[2.25rem]" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
		</a>
	   </nav>
	   <section class="max-w-md container mx-auto bg-[#000000bf] p-10">
		   	{#if error}	   		
		   		<div class="bg-[#e87c03] rounded p-2 text-xs w-full">
		   			{error}
		   		</div>
		   	{/if}
		   	{#if !isSignUpFormOpened}
		   		<h3 class="my-3 mb-6 text-3xl font-medium">Sign In</h3>
		   		<form on:submit|preventDefault={handleLogin} class="flex items-center flex-col w-full space-y-4">
		   			<input required bind:value={email} class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="email" placeholder="Email or Phone number">
		   			<input required bind:value={password} class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="password" placeholder="Password">
		   			<div class="pt-4 w-full">
		   				<button type="submit" class="w-full py-2.5 text-lg font-medium bg-[#e50914]">Sign In</button>
		   			</div>
		   		</form>
		   		<div class="w-full h-0.5 bg-gray-900 my-6"></div>
	   			<div class="w-full">
	   				<button>New to Netflix? <span  on:click={() => isSignUpFormOpened = !isSignUpFormOpened}   class="text-[#e50914] hover:underline">Sign up now.</span></button>
	   			</div>
	   		{:else}
		   		<h3 class="my-3 mb-6 text-3xl font-medium">Sign Up</h3>
		   		<form on:submit|preventDefault={handleSignUp} class="flex items-center flex-col w-full space-y-4">
		   			<input required bind:value={email} class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="email" placeholder="Email or Phone number">
		   			<input required bind:value={password} class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="password" placeholder="Password">
		   			<input required bind:value={confirmPassword} class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="password" placeholder="Confirm Password">
		   			<div class="pt-4 w-full">
		   				<button type="submit" class="w-full py-2.5 text-lg font-medium bg-[#e50914]">Sign Up</button>
		   			</div>
		   		</form>
		   		<div class="w-full h-0.5 bg-gray-900 my-6"></div>
	   			<div class="w-full">
	   				<button>Already Have An Account? <span  on:click={() => isSignUpFormOpened = !isSignUpFormOpened}  class="text-[#e50914] hover:underline">Sign in now.</span></button>
	   			</div>
		   	{/if}
	   </section>
	</div>
</main>