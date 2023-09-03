<script>
  import { Route, Router } from "svelte-routing";
  import Layout from "./lib/Layout.svelte";
  import ChartPage from "./lib/chartPage/ChartPage.svelte";
</script>

<main>
  <Router>
    <Route path="/" component={Layout} />
    <Route path="/chartpage" component={ChartPage} />
  </Router>
</main>

<style>
</style>
