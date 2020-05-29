<template>
  <div class="location-served mb-5">
    <h4>
      Helping at:&nbsp;
      <small class="text-muted">
        <span v-for="(loc, i) in locations" :key="i">
          {{ loc.city }}
          <span v-if="i != lastIndex">&bull;</span>
        </span>
      </small>
    </h4>
  </div>
</template>

<script>
export default {
  name: "LocationServing",
  props: {
    locations: {
      type: Array,
      required: true,
    },
  },
  computed: {
    lastIndex() {
      return this.locations.length - 1;
    },
  },
};
</script>
