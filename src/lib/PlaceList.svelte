<script>
	import { onMount } from "svelte";
	import { placeService } from "../services/place-service";

	/**
	 * @type {any[]}
	 */
	let placeList = [];
	onMount(async () => {
		placeList = await placeService.getPlaces();
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
		{#each placeList as place}
			<tr>
				<td>
					{place.title}
				</td>
				<td>
					{place.difficulty}
				</td>
				<td>
					{place.county.firstName}, {place.county.lastName}
				</td>
				<td>
					{place.donor.firstName}, {place.donor.lastName}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
