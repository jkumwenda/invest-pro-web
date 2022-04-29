<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-turquoise-100 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Update company</h2>
      <div></div>
    </div>
    <div class="my-5 font-semibold">
      <form
        class="w-8/12 bg-white rounded-xl p-8"
        v-on:submit.prevent="updateCompany"
      >
        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Firstname"
            name="firstname"
            v-model="companyData.company"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <select
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="grid-state"
            v-model="companyData.sector_id"
          >
            <option
              v-for="sector in sectors"
              :value="sector.sector_id"
              :key="sector.sector_id"
            >
              {{ sector.sector }}
            </option>
          </select>
        </div>

        <div class="w-4/4 md:w-3/4 mr-auto">
          <button
            class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl uppercase text-sm font-medium"
            type="submit"
          >
            Save Company
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { update, get } from "~/services/api.service";
export default Vue.extend({
  layout: "logged",
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      companyData: {
        company: "",
        sector_id: "",
      },
      sectors: {},
    };
  },
  created() {
    this.getCompany();
  },
  methods: {
    getCompany() {
      get(this.$axios, "company/" + this.$route.params.id + "/")
        .then((result) => {
          this.companyData.company = result.company;
          this.companyData.sector_id = result.sector_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateCompany() {
      update(
        this.$axios,
        "company/" + this.$route.params.id + "/",
        this.companyData
      )
        .then((results) => {
          this.$router.push("/manage/companies/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async fetch() {
    get(this.$axios, "sector/")
      .then((results) => {
        this.sectors = results.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
