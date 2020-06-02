<template>
  <div class="row row-cols-1 row-cols-md-3">
    <div class="col mb-4" v-for="org in orgs" :key="org.id">
      <div class="card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title" style="font-family: 'Roboto Mono', sans-serif;">{{ org.title }}</h5>
          <p class="card-text">
            <span v-for="(concern, i) in org.concerns" :key="i">
              {{ concern.topic }}
              <span v-if="i != org.concerns.length - 1">&bull;</span>
            </span>
          </p>
          <p class="card-text text-muted">
            Locations Serving:
            <span v-for="(loc, i) in org.locationServingAt" :key="i">
              {{ loc.city }}
              <span v-if="i != org.locationServingAt.length - 1">&bull;</span>
            </span>
          </p>
          <button type="button" class="btn btn-dark mr-1">Pay via GPay</button>
          <router-link
            :to="{
                name: 'Details',
                params: { slug: org.slug },
              }"
          >
            <button type="button" class="btn btn-dark mr-1">More Info</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrgList",
  props: {
    orgs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}

.card {
  transition: 0.3s ease all;
}

.card:hover {
  transform: translateY(-5px);
  transition: 0.3s ease all;
}

.btn {
  font-weight: 600;
  background: #000;
}

.btn:hover {
  background-color: #343a40;
}
</style>