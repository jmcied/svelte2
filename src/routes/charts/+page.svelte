<script>
    import PlacesByCounty from "$lib/PlacesByCounty.svelte";
    import PlacesByDifficulty from "$lib/PlacesByMethod.svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Walks Added</h1>
        <PlacesByDifficulty />
    </div>
    <div class="column has-text-centered">
        <PlacesByCounty />
    </div>
</div>