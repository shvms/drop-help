<template>
  <iframe
    width="100%"
    height="450"
    frameborder="0"
    style="border:0"
    :src="embedUrl"
    allowfullscreen
  >
  </iframe>
</template>

<script>
export default {
  name: "GoogleMapEmbed",
  props: {
    apiKey: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  computed: {
    embedUrl() {
      return `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.address}`;
    },
  },
};
</script>
