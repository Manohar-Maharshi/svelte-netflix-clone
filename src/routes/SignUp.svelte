<script>
  	import { Link,navigate  } from "svelte-routing";
	import NavLink from '$lib/NavLink.svelte'
	let input = "";

	const navigateToLogIn = () => {
		if (input.trim() != "") {
			navigate('/login')
		}else{
			return;
		}
	}
</script>
<main>
	<div class="relative h-[706.984px] border-b-8 border-[#fff]">
		<img class="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg">
	</div>
	<div style="background-image: linear-gradient(to top,#000000cc 0,#00000000 60%,#000000cc 100%);" class="bg-[#00000066] absolute text-white inset-0  h-[706.984px]">
	   <nav class="flex items-center justify-between  container mx-auto px-5 py-8">
		   <Link to="/">
				<svg viewBox="0 0 111 30" class="fill-[#e50914] w-[6rem] md:w-[8.375rem] h-[2.25rem]" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
		   </Link>
		   <div class="flex items-center space-x-5">
			   <select class="cursor-pointer bg-[#00000099] border border-gray-50 py-1.5 px-1 md:px-3 focus:outline-none" name="lang">
				    <option value="English" selected>English</option>
				    <option value="Hindi">Hindi</option>
			   </select>
			   <NavLink to="login">		   	
				   <button class="bg-[#e50914] py-1.5 px-2 md:px-3.5 rounded-sm text-base">
				   	     Sign in
				   </button>
			   </NavLink>
		   </div>
	   </nav>
	   <section class="flex flex-col mt-12 md:mt-36 items-center justify-between max-w-screen-md text-center container mx-auto">
	   	   <h1 class="text-[2.5rem] md:text-[3rem] font-bold leading-none shadow">Unlimited movies, TV shows and more.</h1>
	   	   <h3 class="text-3xl leading-relaxed md:my-3 mb-1">Watch anywhere. Cancel anytime.</h3>
	   	   <div class="mt-5 w-[90%] flex flex-col items-center justify-center space-y-3">
	   	   	     <p class="text-lg shadow-lg">Ready to watch? Enter your email to create or restart your membership.</p>
	   	   	     <form on:submit|preventDefault={navigateToLogIn} class="flex md:flex-row md:space-y-0 space-y-3 flex-col items-center w-full justify-center ">
	   	   	          <input bind:value={input} class="w-full flex-1 py-3 md:py-5 px-3 text-gray-900 focus:outline-none" type="email" placeholder="Email address">
	   	   	          <button class="bg-[#e50914] px-5 py-2 md:py-4 text-2xl flex items-center justify-center" type="submit whitespace-nowrap">
	   	   	               <span>Get Started</span>
	   	   	               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                           </svg>
	   	   	          </button>
	   	   	     </form>
	   	   </div>
	   </section>
	</div>
	<main>
		<section class="  border-b-8 border-[#222] md:py-0 py-[3rem] px-[45px]">
		    <div class="grid md:grid-cols-2 place-items-center max-w-[1100px] mx-auto">
			    <div class="">
				    <h1 class="text-[3rem] md:text-[3.5rem] font-bold">Enjoy on your TV.</h1>
				    <h3 class="text-3xl leading-normal">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
			    </div>
			    <div class="">
				    <img class="md:max-w-md object-cover" src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2015/03/netflix-tv.png?q=50&fit=contain&w=767&h=783&dpr=1.5" alt="tv">
			    </div>
		    </div>
		</section>
		<section class="  border-b-8 border-[#222] py-[3rem] px-[45px]">
		    <div class="grid md:grid-cols-2 place-items-center max-w-[1100px] mx-auto">
			    <div class=" flex justify-center">
				    <img class="w-[18rem] md:mr-[10rem]" src="https://techcrunch.com/wp-content/uploads/2021/10/Play-Something-Home-Screen.png?w=446" alt="tv">
			    </div>
			    <div class="">
				    <h1 class="text-[3rem] md:text-[3.3rem] leading-tight font-bold">Download your shows to watch offline.</h1>
				    <h3 class="text-3xl leading-normal">Save your favourites easily and always have something to watch.</h3>
			    </div>
		    </div>
		</section>
		<section class="  border-b-8 border-[#222] py-[3rem] md:py-[7.5rem] px-[45px]">
		    <div class="grid md:grid-cols-2 place-items-center max-w-[1100px] mx-auto">
			    <div class="">
				    <h1 class="text-[3rem] md:text-[3.5rem] font-bold">Watch everywhere.</h1>
				    <h3 class="text-3xl leading-normal">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
			    </div>
			    <div class=" flex justify-center">
				    <img class="md:ml-4 mt-10 w-full h-full object-cover" src="https://www.dialog.lk/dialogdocroot/content/images/vas/netflix/device.png" alt="tv">
			    </div>
		    </div>
		</section>
		<section class="  border-b-8 border-[#222] py-[3rem] px-[45px]">
		    <div class="grid md:grid-cols-2 place-items-center max-w-[1100px] mx-auto">
			    <div class=" flex justify-center">
				    <img class=" md:mr-[10rem]" src="https://occ-0-2164-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" alt="tv">
			    </div>
			    <div class="">
				    <h1 class="text-[3rem] md:text-[3.3rem] leading-tight font-bold">Create profiles for children.</h1>
				    <h3 class="text-3xl leading-normal">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
			    </div>
		    </div>
		</section>
	</main>
	<section class=" border-b-8 border-[#222] py-[5rem] px-[20px] md:px-[45px]">
		<div class="grid place-items-center max-w-screen-md mx-auto">
			<h1 class="text-[2rem] text-center md:text-[3.5rem] mb-[3rem] font-semibold">Frequently Asked Questions</h1>
			<div class="flex flex-col space-y-2 items-center md:w-[90%]">
				<details class="w-full">
					<summary class="cursor-pointer bg-[#303030] px-6 py-5 w-full text-2xl">What is Netflix?</summary>
					<p class="bg-[#303030] px-6 py-5 w-full text-2xl mt-1">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br> <br> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
				</details>
				<details class="w-full">
					<summary class="cursor-pointer bg-[#303030] px-6 py-5 w-full text-2xl">How much does Netflix cost?</summary>
					<p class="bg-[#303030] px-6 py-5 w-full text-2xl mt-1">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</p>
				</details>
				<details class="w-full">
					<summary class="cursor-pointer bg-[#303030] px-6 py-5 w-full text-2xl">Where can I watch?</summary>
					<p class="bg-[#303030] px-6 py-5 w-full text-2xl mt-1">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br> <br> You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
				</details>
				<details class="w-full">
					<summary class="cursor-pointer bg-[#303030] px-6 py-5 w-full text-2xl">How do I cancel?</summary>
					<p class="bg-[#303030] px-6 py-5 w-full text-2xl mt-1">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
				</details>
				<details class="w-full">
					<summary class="cursor-pointer bg-[#303030] px-6 py-5 w-full text-2xl">Is Netflix good for kids?</summary>
					<p class="bg-[#303030] px-6 py-5 w-full text-2xl mt-1">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br> <br> Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
				</details>
			</div>
	   	   <div class="mt-5 w-[90%] flex flex-col items-center justify-center space-y-3">
	   	   	     <p class="text-lg shadow-lg">Ready to watch? Enter your email to create or restart your membership.</p>
	   	   	     <form on:submit|preventDefault={navigateToLogIn} class="flex md:flex-row md:space-y-0 space-y-3 flex-col items-center w-full justify-center ">
	   	   	          <input bind:value={input} class="w-full flex-1 py-3 md:py-5 px-3 text-gray-900 focus:outline-none" type="email" placeholder="Email address">
	   	   	          <button class="bg-[#e50914] px-5 py-2 md:py-4 text-2xl flex items-center justify-center" type="submit whitespace-nowrap">
	   	   	               <span>Get Started</span>
	   	   	               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                           </svg>
	   	   	          </button>
	   	   	     </form>
	   	   </div>
		</div>
	</section>
	<section class="py-[3rem] px-[45px]">
		<div class="max-w-screen-lg container mx-auto opacity-60">
			<p>Questions? Call 000-800-040-1843</p>
			<div class="max-w-screen-lg flex md:fle w-full items-srart md:items-start justify-between my-9">
				<ul class="flex flex-col space-y-3.5 text-xs">
					<li>FAQ</li>
					<li>Investor Relations</li>
					<li>Privacy</li>
					<li>Speed Test</li>
				</ul>
				<ul class="hidden md:flex flex-col space-y-3.5 text-xs">
					<li>Help Center</li>
					<li>Jobs</li>
					<li>Cookie Preferences</li>
					<li>Legal Notices</li>
				</ul>
				<ul class="hidden md:flex flex-col space-y-3.5 text-xs">
					<li>Account</li>
					<li>Ways to Watch</li>
					<li>Corporate Information</li>
					<li>Only on Netflix</li>
				</ul>
				<ul class="flex flex-col space-y-3.5 text-xs">
					<li>Media Centre</li>
					<li>Terms of Use</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<select class="cursor-pointer bg-[#00000099] border border-gray-50 py-3 px-4 focus:outline-none" name="lang">
			    <option value="English" selected>English</option>
			    <option value="Hindi">Hindi</option>
			</select>
			<p class="mt-7 text-xs">Netflix India</p>
		</div>
	</section>
</main>



