<script>
	import Header from "$lib/Header.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
	import DonationList from "$lib/DonationList.svelte";
</script>

<Header>
	<MainNavigator />
</Header>

<div class="columns">
	<div class="column has-text-centered">
		<img alt="cheer" src="/cheer-walk.jpg" width="300" />
	</div>
	<div class="column box has-text-centered">
		<h1 class="title is-4">Places to date</h1>
		<DonationList />
	</div>
</div>
