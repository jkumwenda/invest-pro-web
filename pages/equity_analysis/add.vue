<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-turquoise-100 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Add new analysis portfolio</h2>
      <div></div>
    </div>
    <div class="my-5 font-semibold">
      <form
        class="w-8/12 bg-white rounded-xl p-8"
        v-on:submit.prevent="addAnalysisPortifolio"
      >
        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <select
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="grid-state"
            v-model="analysisPortifolioData.company_id"
          >
            <option
              v-for="company in companies"
              :value="company.company_id"
              :key="company.company_id"
            >
              {{ company.company }}
            </option>
          </select>
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-password"
            type="text"
            placeholder="Date"
            name="date"
            v-model="date"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mr-auto">
          <button
            class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl uppercase text-sm font-medium"
            type="submit"
          >
            Create New Portfolio
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { post, get } from "~/services/api.service";
export default Vue.extend({
  layout: "logged",
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      analysisPortifolioData: {
        company_id: "",
        date: "",
      },
      companies: {},
    };
  },
  methods: {
    addAnalysisPortifolio() {
      this.loading = true;
      this.$router.push("/equity_analysis");
    },
  },

  async fetch() {
    get(this.$axios, "company/")
      .then((results) => {
        this.companies = results.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
