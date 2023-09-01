<script>
  import Layout from "./lib/Layout.svelte";
  import CountryTable from "./lib/chartPage/CountryTable.svelte";
</script>

<main>
  <Layout />
  <div class="p-4 flex flex-auto">
    <div class="w-1/2">
      <CountryTable />
    </div>
    <div class="w-1/2 pl-4">Polar Area Chart</div>
  </div>
</main>

<style>
</style>
