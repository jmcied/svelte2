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
		<th>County</th>
		<th>Added by</th>
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
					{donation.candidate.firstName}, {donation.candidate.lastName}
				</td>
				<td>
					{donation.donor.firstName}, {donation.donor.lastName}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
