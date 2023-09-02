<!-- <script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let portfolio;
  const data = {
    labels: ["Expenses", "Savings", "Investments"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#7000e1", "#fc8800", "#00b0e8"],
        // hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
    options: {
      borderRadius: "30",
      responsive: true,
      cutout: "95%",
      spacing: 2,
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
          text: "My Personal Portfolio",
        },
      },
    },
  };
  onMount(() => {
    const ctx = portfolio.getContext("2d");
    // Initialize chart using default config set
    var myChart = new Chart(ctx, config);
  });
</script> -->

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
    labels: countryData.map((country) => country.name.common || "NA"),
    datasets: [
      {
        data: countryData.map((country) => country.population || 0),
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
    // Initialize chart using default config set
    var myChart = new Chart(ctx, config);
  });
</script>

<canvas bind:this={polarAreaChartCanvas} width={400} height={400} />
