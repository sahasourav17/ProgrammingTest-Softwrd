<script>
  import { Route, Router } from "svelte-routing";
  import Layout from "./routes/Layout.svelte";
  import MapPage from "./routes/MapPage.svelte";
  import ChartPage from "./routes/ChartPage.svelte";
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
