<template>
  <div class="intro">
    <h1 class="display-1">{{ title }}</h1>
    <p class="lead">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "OrgIntro",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
