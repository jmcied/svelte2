<script>
	import { beforeUpdate } from "svelte";
	import { placeService } from "../services/place-service";

	beforeUpdate(() => {
		placeService.reload();
	});
</script>

<div class="container">
	<slot />
</div>
