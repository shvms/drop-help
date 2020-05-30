<template>
  <div class="jumbotron jumbotron-fluid" ref="jumbotron">
    <div class="container">
      <h1 class="display-3">DropHelp</h1>
      <p class="lead">
        An open source initiative to drive more awareness towards local NGOs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroContainer",
};
</script>

<style scoped>
.jumbotron {
  background-color: #eff8f5;
  background-image: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  height: 60vh;

  display: flex;
  align-items: center;
}
</style>
