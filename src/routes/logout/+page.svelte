<script>
	import { goto } from "$app/navigation";
	import { placeService } from "../../services/place-service";

	placeService.logout();
	goto("/");
</script>
