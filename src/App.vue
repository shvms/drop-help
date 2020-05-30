<template>
  <div id="app">
    <HeroContainer />

    <div class="container">
      <router-view :database="database" />
    </div>
  </div>
</template>

<script>
import db from "./database.json";
import HeroContainer from "@/components/HeroContainer";

export default {
  name: "App",
  components: {
    HeroContainer,
  },
  data() {
    return {
      database: db,
    };
  },
};
</script>
