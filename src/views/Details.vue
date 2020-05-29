<template>
  <div>
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
</template>

<script>
import apiKeys from "@/constants/apiConfig";
import OrgIntro from "@/components/OrgIntro";
import LocationServing from "@/components/LocationServing";
import PocList from "@/components/PocList";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export default {
  name: "Details",
  components: {
    OrgIntro,
    LocationServing,
    PocList,
    GoogleMapEmbed,
  },
  data() {
    return {
      apiKey: apiKeys.googleEmbedApiKey,
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
  computed: {
    organisation() {
      return this.database.find((org) => org.slug === this.slug);
    },
  },
};
</script>
