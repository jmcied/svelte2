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
		map.addLayerGroup("All Walks");
		map.addLayerGroup("Easy");
	//	map.addLayerGroup("Moderate");
	//	map.addLayerGroup("Hard");
		map.showLayerControl();
		
		const places = await placeService.getPlaces();
		places.forEach((place) => {
			addPlaceMarker(map, place);							
		});
	});

	function addPlaceMarker(map, place) {{
		const allPlaceStr = `${place.title}, ${place.county.firstName}, ${place.difficulty}`;
		map.addMarker({ lat: place.lat, lng: place.lng }, allPlaceStr, "All Walks");
		}
		
		if (place.difficulty === "Easy") {			
			const easyPlaceStr = `${place.title} - ${place.difficulty} `;
			map.addMarker({ lat: place.lat, lng: place.lng }, easyPlaceStr, "Easy Walks");
		}
	/*	if (place.difficulty === "Medium") {
			const mediumPlaceStr = `${place.title}, ${place.county.firstName} `;
			map.addMarker({ lat: place.lat, lng: place.lng }, mediumPlaceStr, "Moderate Walks")
		}
	/*	if (place.difficulty === "Hard") {
			const hardPlaceStr = `${place.title}, ${place.county.firstName} `;
			map.addMarker({ lat: place.lat, lng: place.lng }, hardPlaceStr, "Hard Walks")
		};		
	*/	};

	latestPlace.subscribe(async (place) => {
		if (place && map) {
			const county = await placeService.getCounty(place.county);
			place.county = county;
			addPlaceMarker(map, place);
		}
	});
</script>

<div class="box" id="place-map" style="height: 75vh" />
<div class="box" id="place-map" style="height: 75vh" />
