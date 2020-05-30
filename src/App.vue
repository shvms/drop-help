<template>
  <div id="app">
    <HeroContainer />

    <div class="container">
      <router-view :database="database" />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import db from "./database.json";
import HeroContainer from "@/components/HeroContainer";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    HeroContainer,
    TheFooter,
  },
  data() {
    return {
      database: db,
    };
  },
};
</script>
