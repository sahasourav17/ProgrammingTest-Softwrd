import { writable } from "svelte/store";

// Initial state
const initialState = [];

// Create a writable store
const countryDataStore = writable(initialState);

// Function to fetch and update data
async function fetchData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countryDataStore.set(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Fetch data when the store is initialized
fetchData();

export default countryDataStore;
