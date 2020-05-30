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

<style>
.jumbotron {
  background-color: #eff8f5;
  background-image: url("../src/assets/bg.jpg");
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60vh;

  display: flex;
  align-items: center;
}
</style>
