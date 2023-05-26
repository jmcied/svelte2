<script>
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";

    import { placeService } from "../services/place-service";

    let totalByDifficulty = {
        labels: ["Easy", "Medium", "Hard"],
        datasets: [
            {
                values: [0,0,0]
            }
        ]
    };

    function populateByDifficulty(placeList) {
        placeList.forEach((place) => {
            if (place.difficulty == "Easy") {
                totalByDifficulty.datasets[0].values[0] ++;
            } else if (place.difficulty == "Medium") {
                totalByDifficulty.datasets[0].values[1] ++;
            }    else if (place.difficulty == "Hard") {
                totalByDifficulty.datasets[0].values[2] ++;
            }
        });
    }

    async function refreshChart() {
        let placeList = await placeService.getPlaces();
        populateByDifficulty(placeList);
    }

    onMount(async () => {
        refreshChart();
    });
</script>

<h1 class="title is-4">By Difficulty</h1>
<Chart data={totalByDifficulty} type="pie" />
