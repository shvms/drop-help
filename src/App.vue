<template>
  <div id="app" v-if="database">
    <HeroContainer />

    <div class="container">
      <router-view :database="database" />
    </div>

    <TheFooter />
  </div>
</template>

<script>
import axios from "axios";
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
      database: null,
    };
  },
  mounted() {
    this.loading = true;
    axios.get(`${process.env.VUE_APP_API_BASE_URL}/v1/list`).then((res) => {
      this.database = res.data;
    });
  },
};
</script>
