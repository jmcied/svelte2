<script>
	import { beforeUpdate } from "svelte";
	import Header from "$lib/Header.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
	import PlaceMap from "$lib/PlaceMap.svelte";
	import { placeService } from "../../services/place-service";

	beforeUpdate(() => {
        placeService.checkPageRefresh();
    });
</script>

<Header>
	<MainNavigator />
</Header>

<PlaceMap />
