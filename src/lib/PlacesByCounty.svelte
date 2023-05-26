<script>
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placeService } from "../services/place-service";
    import { latestPlace } from "../stores";

    latestPlace.subscribe(async (place) => {
        if (place) {
            await refreshChart();
        }
    });

    let totalByCounty = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    };

    function populateByCounty(placeList, countys) {
        totalByCounty.labels = [];
        countys.forEach((county) => {
            totalByCounty.labels.push(`${county.firstName}, ${county.lastName}`);
            totalByCounty.datasets[0].values.push(0);
        });
        countys.forEach((county, i) => {
            totalByCounty.datasets[0].values[i] = 0;
            placeList.forEach((place) => {
                if (place.county._id == county._id) {
                    totalByCounty.datasets[0].values[i] ++;
                }
            });
        });
    }

    async function refreshChart() {
        let placeList = await placeService.getPlaces();
        let countys = await placeService.getCountys();
        populateByCounty(placeList, countys);
    }

    onMount(async () => {
        await refreshChart();
    });
</script>

<h1 class="title is-4">Places By County</h1>
<Chart data={totalByCounty} type="bar" />
