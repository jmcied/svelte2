<script>
	import { onMount } from "svelte";
	import { donationService } from "../services/donation-service";

	/**
	 * @type {any[]}
	 */
	let donationList = [];
	onMount(async () => {
		donationList = await donationService.getDonations();
	});
</script>

<table class="table is-fullwidth">
	<thead>
		<th>Title</th>
		<th>Difficulty</th>
		<th>Candidate</th>
		<th>Donor</th>
	</thead>
	<tbody>
		{#each donationList as donation}
			<tr>
				<td>
					{donation.title}
				</td>
				<td>
					{donation.difficulty}
				</td>
				<td>
					{donation.candidate.lastName}, {donation.candidate.firstName}
				</td>
				<td>
					{donation.donor.lastName}, {donation.donor.firstName}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
