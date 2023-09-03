<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  import countryDataStore from "../../stores/countryDataStore";

  let polarAreaChartCanvas;
  let countryData = [];
  countryDataStore.subscribe(async (data) => {
    countryData = data
      .slice()
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);
  });

  const data = {
    labels: countryData.map((country) => country.name.common),
    datasets: [
      {
        data: countryData.map((country) => country.population),
        backgroundColor: [
          "#FF5733",
          "#2ECC71",
          "#3498DB",
          "#9B59B6",
          "#F1C40F",
          "#E67E22",
          "#1ABC9C",
          "#E74C3C",
          "#34495E",
          "#ECF0F1",
        ],
      },
    ],
  };

  const config = {
    type: "polarArea",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          display: true,
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: "Polar Area Chart",
        },
      },
    },
  };
  onMount(async () => {
    const ctx = await polarAreaChartCanvas.getContext("2d");
    var myChart = new Chart(ctx, config);
  });
</script>

<canvas bind:this={polarAreaChartCanvas} width={400} height={400} />
