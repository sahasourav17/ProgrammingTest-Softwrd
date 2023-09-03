<script>
  import { Route, Router } from "svelte-routing";
  import Layout from "./lib/Layout.svelte";
  import MapPage from "./lib/MapPage.svelte";
  import ChartPage from "./lib/chartPage/ChartPage.svelte";
</script>

<main>
  <Router>
    <Route path="/" component={Layout} />
    <Route path="/chartpage" component={ChartPage} />
    <Route path="/map-page" component={MapPage} />
  </Router>
</main>

<style>
</style>
