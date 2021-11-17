<script>
	import { router } from "tinro"
	import { user, profileData } from '$store/user'
	import { auth,db } from '$store/firebase'
	import { signOut } from "firebase/auth";
	import { doc, getDoc, onSnapshot , updateDoc  } from "firebase/firestore";

	let profilePhoto = "";
	let profileName = "";
	let isLoading = false;

	const logOut = async () => {
		signOut(auth).then(() => {
		  	$user = null
		}).catch((error) => {
		  alert(error.message)
		});
	}


	$: if($user){	
		onSnapshot(doc(db, "users", $user.uid), (doc) => {
		    $profileData = doc.data();
		});
	}

	const sendData = async () => {
		isLoading = true
		if (profileName.trim() != "" && profilePhoto.trim() != "") {
			try{
				await updateDoc(doc(db, "users", $user.uid), {
				  name: profileName,
				  photo : profilePhoto,
				});
			}catch(e){
				alert(e)
			}finally{
				isLoading = false;
			}
		}else{
			alert("gsdsm")
		}
	}

</script>
<main class="mt-[7rem] md:mt-[7rem] md:mb-0 mb-10 w-full h-full">
	<section class="md:max-w-lg w-full container mx-auto md:px-0 px-5">
			<h3 class="text-3xl md:text-[2rem] text-gray-300">Edit Profile</h3>
			<div class="w-full h-0.5 bg-gray-900 mb-6"></div>
			<div class="md:flex items-start justify-between space-x-5">
				<div class="grid place-items-center md:mb-0 mb-5">
	   				<img class="w-[6rem] md:w-[10rem] h-[5rem] object-cover" src={ profilePhoto ? profilePhoto : $profileData?.photo} alt={$profileData?.name + " Pic"}>
				</div>
				<div class="flex items-center flex-col justify-center pr-[1.2rem] md:w-full space-y-4">
					<input required bind:value={profileName} class="rounded focus:outline-none bg-[#333] py-3 px-3 md:w-full w-[20rem]" type="text" placeholder={$profileData?.name}>
					<input required bind:value={profilePhoto} class="rounded focus:outline-none bg-[#333] py-3 px-3 md:w-full w-[20rem]" type="url" placeholder={$profileData?.photo}>
					<input disabled value={$profileData ? $profileData.email : 'Loading...'} class="disabled:text-gray-300 rounded focus:outline-none bg-[#333] py-3 px-3 w-[20rem] md:w-full" type="email" placeholder="Change Email">
					<div class="pt-1 md:pt-4 w-[20rem] md:w-full flex items-center text-lg justify-end space-x-3 md:space-x-5">
						<button on:click={logOut} type="button" class="py-1 px-5  font-medium text-[#e50914]">Logout</button>
						<button on:click={() => router.goto('/browse')} type="button" class="py-1 px-4 md:px-5  font-medium border border-[#e50914]">Cancel</button>
						<button disabled={(profileName.trim() === "" || profilePhoto.trim() === "")} on:click={sendData} class="disabled:cursor-not-allowed disabled:bg-red-600 py-1.5 px-6 md:px-10  font-medium bg-[#e50914]">{ isLoading ? 'Updating...' : 'Save'}</button>
					</div>
				</div>
			</div>
	</section>
</main>