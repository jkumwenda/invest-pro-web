<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">
        {{ companyData.company }}
      </h2>
    </div>
    <div class="my-5">
      <div class="flex flex-col p-5 bg-white">
        <h2 class="w-full text-xl font-semibold text-tory-blue-50">
          Company Sectors
        </h2>
        <div class="w-full py-3">
          <p class="flex p-1">
            <solid-chevron-right-icon
              class="h-5 w-5 text-turquoise-800 font-semibold"
            />
            Telecomunications
            <solid-trash-icon class="h-5 w-5 text-turquoise-800 mx-4" />
          </p>
          <p class="flex p-1">
            <solid-chevron-right-icon class="h-5 w-5 text-turquoise-800" />
            Finance <solid-trash-icon class="h-5 w-5 text-turquoise-800 mx-4" />
          </p>
          <p class="flex p-1">
            <solid-chevron-right-icon
              class="h-5 w-5 text-turquoise-800"
            />Banking
            <solid-trash-icon class="h-5 w-5 text-turquoise-800 mx-4" />
          </p>
        </div>
        <button
          type="button"
          class="flex w-max p-1 px-4 rounded-xl bg-tory-blue-400 text-white"
        >
          Assign
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { get } from "~/services/api.service";
export default Vue.extend({
  layout: "logged",
  data() {
    return {
      companyData: {
        company: "",
      },
    };
  },
  created() {
    this.getRole();
  },
  methods: {
    getRole() {
      get(this.$axios, "company/" + this.$route.params.id + "/")
        .then((result) => {
          this.companyData = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
