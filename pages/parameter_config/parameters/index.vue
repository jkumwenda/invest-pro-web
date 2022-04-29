<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Answer values</h2>
      <div>
        <nuxt-link
          to="/parameter_config/parameters/add"
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
        <div class="p-5 w-4/12">Parameter</div>
        <div class="p-5 w-4/12">Category</div>
        <div class="p-5 flex-auto">Type</div>
      </div>
      <div
        class="flex bg-white mb-1"
        v-for="parameter in parameters"
        :key="parameter.parameter_id"
      >
        <div class="p-5 w-4/12">
          {{ parameter.parameter }}
        </div>
        <div class="p-5 w-4/12">
          {{ parameter.parameter_category.parameter_category }}
        </div>
        <div class="p-5 flex-auto">
          {{ parameter.answer_type.answer_type }}
        </div>
        <div class="p-5 w-max flex flex-row bg-black">
          <nuxt-link
            :to="`/parameter_config/parameters/${parameter.parameter_id}/edit`"
            ><solid-pencil-icon class="h-8 w-8"
          /></nuxt-link>
          <div
            class="cursor-pointer"
            @click="deleteParameter(parameter.parameter_id)"
          >
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
      parameters: {},
      count: "",
      previous: "",
      next: "",
    };
  },

  methods: {
    deleteParameter(id: Number) {
      destroy(this.$axios, "parameter/" + id + "/")
        .then((results) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async fetch() {
    get(this.$axios, "parameter/")
      .then((results) => {
        this.parameters = results.results;
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
