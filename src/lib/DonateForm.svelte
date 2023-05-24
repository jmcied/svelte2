<script>
	// @ts-nocheck

	import { onMount } from "svelte";
	import Coordinates from "./Coordinates.svelte";
	import { donationService } from "../services/donation-service";

	let title = "";
	let lat = 52.160858;
	let lng = -7.15242;

	let candidateList = [];
	let selectedCandidate = "";

	let paymentMethods = ["Easy", "Medium", "Hard"];
	let selectedMethod = "";

	let message = "Please donate";

	onMount(async () => {
		candidateList = await donationService.getCandidates();
	});

	async function donate() {
		if (selectedCandidate && title && selectedMethod) {
			const candidateNames = selectedCandidate.split(",");
			const candidate = candidateList.find((candidate) => candidate.lastName == candidateNames[0] && candidate.firstName == candidateNames[1]);
			const donation = {
				title: title,
				method: selectedMethod,
				candidate: candidate._id,
				lat: lat,
				lng: lng
			};
			const success = await donationService.donate(donation);
			if (!success) {
				message = "Donation not completed - some error occurred";
				return;
			}
			message = `Thanks! You donated ${title} to ${candidate.firstName} ${candidate.lastName}`;
		} else {
			message = "Please select title, method and candidate";
		}
	}
</script>

<form on:submit|preventDefault={donate}>
	<div class="field">
		<label class="label" for="title">Enter title</label>
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
			<select bind:value={selectedCandidate}>
				{#each candidateList as candidate}
					<option>{candidate.lastName},{candidate.firstName}</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="field">
		<div class="control">
			<button class="button is-link is-light">Donate</button>
		</div>
	</div>
	<div class="box">
		{message}
	</div>
	<Coordinates bind:lat bind:lng />
</form>
