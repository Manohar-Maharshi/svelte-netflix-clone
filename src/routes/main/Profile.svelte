<script>
	import { router } from "tinro"
</script>
<main class="grid place-items-center mt-[5rem] md:mt-[7rem] md:mb-0 mb-10 w-full h-full">
	<section class="max-w-md container mx-auto md:px-0 px-5">
			<h3 class="text-3xl md:text-[2rem] text-gray-300">Edit Profile</h3>
			<div class="w-full h-0.5 bg-gray-900 mb-6"></div>
			<div class="md:flex items-start justify-between space-x-5">
				<div class="grid place-items-center mb-3 md:mb-0">
	   				<img class="w-[6rem]" src="https://avatars.dicebear.com/api/adventurer-neutral/netflix.svg?background=red" alt="Gooo">
				</div>
				<div class="flex items-center flex-col md:w-full space-y-4">
					<input class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="text" placeholder="Change Profile Name">
					<input class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="email" placeholder="Change Profile Image (url)">
					<input class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="email" placeholder="Change Email">
					<input class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="password" placeholder="Chnage Password">
					<input class="rounded focus:outline-none bg-[#333] py-3 px-3 w-full" type="password" placeholder="Confirm Password">
					<div class="pt-1 md:pt-4 w-full flex items-center text-lg justify-end space-x-5">
						<button on:click={() => router.goto('/browse')} type="button" class="py-1 px-5  font-medium border border-[#e50914]">Cancel</button>
						<button class="py-1.5 px-10  font-medium bg-[#e50914]">Save</button>
					</div>
				</div>
			</div>
	</section>
</main>