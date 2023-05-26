<script>
	// @ts-nocheck

	import { onMount } from "svelte";
	import Coordinates from "./Coordinates.svelte";
	import { placeService } from "../services/place-service";

	let title = "";
	let lat = 52.160858;
	let lng = -7.15242;

	let countyList = [];
	let selectedCounty = "";

	let paymentMethods = ["Easy", "Medium", "Hard"];
	let selectedMethod = "";

	let message = "Place walk";

	onMount(async () => {
		countyList = await placeService.getCountys();
	});

	async function donate() {
		if (selectedCounty && title && selectedMethod) {
			const countyNames = selectedCounty.split(",");
			const county = countyList.find((county) => county.lastName == countyNames[0] && county.firstName == countyNames[1]);
			const place = {
				title: title,
				method: selectedMethod,
				county: county._id,
				lat: lat,
				lng: lng
			};
			const success = await placeService.donate(place);
			if (!success) {
				message = "Placemark not completed - some error occurred";
				return;
			}
			message = `Thanks! You placed ${title} in ${county.firstName} ${county.lastName}`;
		} else {
			message = "Please select title, difficulty and county";
		}
	}
</script>

<form on:submit|preventDefault={donate}>
	<div class="field">
		<label class="label" for="title">Enter Walk Details</label>
		<input bind:value={title} class="input" placeholder="title" name="title" type="text" />
	</div>
	<div class="field">
		<div class="control">
			{#each paymentMethods as method}
				<input bind:group={selectedMethod} class="radio" type="radio" value={method} /> {method}
			{/each}
		</div>
	</div>
	<div class="field">
		<div class="select">
			<select bind:value={selectedCounty}>
				{#each countyList as county}
					<option>{county.lastName},{county.firstName}</option>
				{/each}
			</select>
		</div>
	</div>

	<Coordinates bind:lat bind:lng />

	<div class="field">
		<div class="control">
			<button class="button is-link is-light">Add</button>
		</div>
	</div>
	<div class="box">
		{message}
	</div>
</form>
