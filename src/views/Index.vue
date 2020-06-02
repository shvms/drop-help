<template>
  <div>
    <SearchBar @search="fuzzySearch" />

    <OrgList :orgs="actualDB" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import OrgList from "@/components/OrgList";
import * as JsSearch from "js-search";

export default {
  name: "Index",
  components: {
    SearchBar,
    OrgList
  },
  props: {
    database: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      results: this.database,
      jssearch: new JsSearch.Search("id")
    };
  },
  methods: {
    fuzzySearch(needle) {
      this.results = this.jssearch.search(needle);
      console.log(this.results.length);
    }
  },
  computed: {
    actualDB() {
      return this.results.length > 0 ? this.results : this.database;
    }
  },
  mounted() {
    this.jssearch.addIndex("title");
    this.jssearch.addIndex(["locationServingAt", "city"]);
    this.jssearch.addIndex(["concerns", "tags"]);
    this.jssearch.addDocuments(this.database);
  }
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

* {
  font-family: "Noto Sans JP", sans-serif;
}

.display-3 {
  font-family: "Poppins", sans-serif;
}
</style>
