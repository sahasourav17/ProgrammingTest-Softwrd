<script>
  import { onMount } from "svelte";
  import countryDataStore from "../../stores/countryDataStore";

  let countryData = [];
  countryDataStore.subscribe((data) => {
    countryData = data;
  });

  onMount(() => {
    fetchData();
  });

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      countryDataStore.set(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
</script>

<div class="bg-slate-500">
  <div class="overflow-x-auto">
    <table class="w-fulltext-sm text-left text-black">
      <thead class="text-xs text-black-100 uppercase bg-white">
        <tr>
          <th scope="col" class="px-6 py-3"> Flag </th>
          <th scope="col" class="px-6 py-3"> Name </th>
          <th scope="col" class="px-6 py-3">Population</th>
          <th scope="col" class="px-6 py-3"> CIOC </th>
          <th scope="col" class="px-6 py-3"> UN Member Status </th>
          <th scope="col" class="px-6 py-3">Currencies (Key)</th>
          <th scope="col" class="px-6 py-3">Languages</th>
        </tr>
      </thead>
      <tbody>
        {#each countryData as country}
          <tr class="bg-white border-b">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-black-100 whitespace-nowrap dark:text-white"
            >
              <img src={country.flags.png} alt="Flag" width="20" />
            </th>
            <td class="px-6 py-4">
              {country.name.common}
            </td>
            <td class="px-6 py-4">
              {country.population}
            </td>
            <td class="px-6 py-4">
              {country.cioc}
            </td>
            <td class="px-6 py-4">
              {country.status}
            </td>
            <td class="px-6 py-4">
              {Object.keys(country.currencies).join(", ")}
            </td>
            <td class="px-6 py-4">
              {Object.values(country.languages).join(", ")}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
