<template>
  <div id="app">
    <div class="container">
      <router-view :database="database" />
    </div>
  </div>
</template>

<script>
import db from "./database.json";

export default {
  name: "App",
  data() {
    return {
      database: db,
    };
  },
};
</script>

<style></style>
