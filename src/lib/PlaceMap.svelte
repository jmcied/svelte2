<script>
	// @ts-nocheck

	// import "leaflet/dist/leaflet.css";
	import { LeafletMap } from "../services/leaflet-map";
	import { onMount } from "svelte";
	import { placeService } from "../services/place-service";
	import { latestPlace } from "../stores";

	const mapConfig = {
		location: { lat: 52.160858, lng: -7.15242 },
		zoom: 8,
		minZoom: 1
	};
	let map;

	onMount(async () => {
		map = new LeafletMap("place-map", mapConfig);
		map.showZoomControl();
		map.addLayerGroup("Places");
		map.showLayerControl();
		
		const places = await placeService.getPlaces();
		places.forEach((place) => {
			addPlaceMarker(map, place);
		});
	});

	function addPlaceMarker(map, place) {
		const placeStr = `${place.title}, ${place.county.firstName}, ${place.county.lastName}`;
		map.addMarker({ lat: place.lat, lng: place.lng }, placeStr, "Places");
		map.moveTo(8, { lat: place.lat, lng: place.lng });
	}

	latestPlace.subscribe(async (place) => {
		if (place && map) {
			const county = await placeService.getCounty(place.county);
			place.county = county;
			addPlaceMarker(map, place);
		}
	});
</script>

<div class="box" id="place-map" style="height: 75vh" />
