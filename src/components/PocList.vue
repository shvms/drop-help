<template>
  <div>
    <div class="card mb-3" v-for="(poc, i) in pocs" :key="i">
      <div class="card-body">
        <div class="card-title">{{ poc.name }}</div>
        <h6 class="card-subtitle text-muted">
          <span>{{ poc.phone }}</span
          >&nbsp;
          <span v-if="poc.location">&bull; {{ poc.location }}</span>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PocList",
  props: {
    pocs: {
      type: Array,
      required: String,
    },
  },
};
</script>
