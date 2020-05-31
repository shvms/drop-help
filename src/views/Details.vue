<template>
  <div>
    <LoadingSpinner v-if="!organisation" />
    <div v-else>
      <OrgIntro
        :title="organisation.title"
        :description="organisation.description"
      />

      <LocationServing :locations="organisation.locationServingAt" />

      <div class="contiainer-fluid my-5">
        <div class="row">
          <div class="col-sm h-100">
            <GoogleMapEmbed
              :apiKey="apiKey"
              :address="organisation.location.address"
            />
          </div>

          <div class="col-sm">
            <PocList :pocs="organisation.pocs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiKeys from "@/constants/apiConfig";
import OrgIntro from "@/components/OrgIntro";
import LocationServing from "@/components/LocationServing";
import PocList from "@/components/PocList";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import LoadingSpinner from "@/components/LoadingSpinner";

export default {
  name: "Details",
  components: {
    OrgIntro,
    LocationServing,
    PocList,
    GoogleMapEmbed,
    LoadingSpinner,
  },
  data() {
    return {
      apiKey: apiKeys.googleEmbedApiKey,
      organisation: null,
    };
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
    database: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    axios
      .get(`https://api-drop-help.herokuapp.com/v1/details/${this.slug}`)
      .then((res) => {
        this.organisation = res.data;
      });
  },
};
</script>
