<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Sector</h2>
      <div>
        <nuxt-link
          to="/manage/sectors/add"
          class="flex items-center text-tory-blue-500 font-semibold"
          ><div class="p-2 rounded-full bg-white mx-2">
            <solid-document-add-icon class="h-6 w-6" />
          </div>
          Add</nuxt-link
        >
      </div>
    </div>
    <div class="my-5">
      <div class="flex font-semibold">
        <div class="p-5 flex-auto">Sector</div>
      </div>
      <div
        class="flex bg-white mb-1"
        v-for="sector in sectors"
        :key="sector.sector_id"
      >
        <div class="p-5 flex-auto">
          {{ sector.sector }}
        </div>
        <div class="p-5 w-max flex flex-row bg-black">
          <nuxt-link :to="`/manage/sectors/${sector.sector_id}`"
            ><solid-eye-icon class="h-8 w-8"
          /></nuxt-link>
          <nuxt-link :to="`/manage/sectors/${sector.sector_id}/edit`"
            ><solid-pencil-icon class="h-8 w-8"
          /></nuxt-link>
          <div class="cursor-pointer" @click="deleteSector(sector.sector_id)">
            <solid-trash-icon class="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { get, destroy } from "~/services/api.service";

export default Vue.extend({
  layout: "logged",
  data() {
    return {
      sectors: {},
      count: "",
      previous: "",
      next: "",
    };
  },

  methods: {
    deleteSector(id: Number) {
      destroy(this.$axios, "sector/" + id + "/")
        .then((results) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async fetch() {
    get(this.$axios, "sector/")
      .then((results) => {
        this.sectors = results.results;
        this.count = results.count;
        this.next = results.next;
        this.previous = results.previous;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
