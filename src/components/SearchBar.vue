<template>
  <form>
    <div class="form-group mb-4">
      <input
        id="search"
        type="email"
        placeholder="Search"
        class="form-control form-control-underlined border-success"
        v-model="needle"
        @keyup="keyup"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      needle: null,
    };
  },
  methods: {
    keyup() {
      this.$emit("search", this.needle);
    },
  },
};
</script>
