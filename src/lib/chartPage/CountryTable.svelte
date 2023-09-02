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
            <td class="px-6 py-4">
              {#if country}
                <img src={country.flags.png} alt="Flag" width="20" />
              {/if}
            </td>
            <td class="px-6 py-4">
              {#if country}
                {country.name.common}
              {/if}
            </td>
            <td class="px-6 py-4">
              {#if country}
                {country.population}
              {/if}
            </td>
            <td class="px-6 py-4">
              {#if country}
                {country.cioc}
              {/if}
            </td>
            <td class="px-6 py-4">
              {#if country}
                {country.status}
              {/if}
            </td>
            <td class="px-6 py-4">
              {#if country && country.currencies}
                {Object.keys(country.currencies).join(", ")}
              {:else}
                N/A
              {/if}
            </td>
            <td class="px-6 py-4">
              {#if country && country.languages}
                {Object.values(country.languages).join(", ")}
              {:else}
                N/A
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
