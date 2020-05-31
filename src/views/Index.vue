<template>
  <div>
    <SearchBar @search="fuzzySearch" />

    <div class="row row-cols-1 row-cols-md-3">
      <div class="col mb-4" v-for="org in actualDB" :key="org.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ org.title }}</h5>
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
            <button type="button" class="btn btn-dark mr-1">
              Pay via GPay
            </button>
            <router-link
              :to="{
                name: 'Details',
                params: { slug: org.slug },
              }"
            >
              <button type="button" class="btn btn-dark mr-1">
                More Info
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import * as JsSearch from "js-search";

export default {
  name: "Index",
  components: {
    SearchBar,
  },
  props: {
    database: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      results: this.database,
      jssearch: new JsSearch.Search("id"),
    };
  },
  methods: {
    fuzzySearch(needle) {
      this.results = this.jssearch.search(needle);
      console.log(this.results.length);
    },
  },
  computed: {
    actualDB() {
      return this.results.length > 0 ? this.results : this.database;
    },
  },
  mounted() {
    this.jssearch.addIndex("title");
    this.jssearch.addIndex(["locationServingAt", "city"]);
    this.jssearch.addIndex(["concerns", "tags"]);
    this.jssearch.addDocuments(this.database);
  },
};
</script>

<style>
.form-control:focus {
  box-shadow: none;
}

.form-control-underlined {
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding-left: 0;
}

.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}
</style>
