<script>
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";

    import { donationService } from "../services/donation-service";

    let totalByDifficulty = {
        labels: ["Easy", "Medium", "Hard"],
        datasets: [
            {
                values: [0,0,0]
            }
        ]
    };

    function populateByDifficulty(donationList) {
        donationList.forEach((donation) => {
            if (donation.difficulty == "Easy") {
                totalByDifficulty.datasets[0].values[0] ++;
            } else if (donation.difficulty == "Medium") {
                totalByDifficulty.datasets[0].values[1] ++;
            }    else if (donation.difficulty == "Hard") {
                totalByDifficulty.datasets[0].values[2] ++;
            }
        });
    }

    async function refreshChart() {
        let donationList = await donationService.getDonations();
        populateByDifficulty(donationList);
    }

    onMount(async () => {
        refreshChart();
    });
</script>

<h1 class="title is-4">By Difficulty</h1>
<Chart data={totalByDifficulty} type="pie" />
