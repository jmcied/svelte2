<script>
	import Header from "$lib/Header.svelte";
	import DonateForm from "$lib/DonateForm.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
	import PlaceMap from "$lib/PlaceMap.svelte";
	import PlacesByCounty from "$lib/PlacesByCounty.svelte";
</script>

<Header>
	<MainNavigator />
</Header>

<div class="columns is-vcentered">
	<div class="column has-text-centered">
		<!-- <PlaceMap /> -->
		<PlacesByCounty />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Add Places!</h1>
		<DonateForm />
	</div>
</div>
