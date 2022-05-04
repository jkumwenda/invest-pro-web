<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Analysis portfolio</h2>
      <div>
        <nuxt-link
          to="/equity_analysis/add"
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
        <div class="p-5 w-4/12">Answer</div>
        <div class="p-5 w-4/12">Type</div>
        <div class="p-5 flex-auto">Value</div>
      </div>
      <div
        class="flex bg-white mb-1"
        v-for="analysis_portfolio in analysis_portfolios"
        :key="analysis_portfolio.analysis_portfolio_id"
      >
        <div class="p-5 w-4/12">
          {{ analysis_portfolio.company.company }}
        </div>
        <div class="p-5 w-4/12">
          {{ analysis_portfolio.company.sector.sector }}
        </div>
        <div class="p-5 flex-auto">
          {{ analysis_portfolio.analysis_date }}
        </div>
        <div class="p-5 w-max flex flex-row bg-tory-blue-500 text-tory-blue-50">
          <nuxt-link
            :to="`/equity_analysis/${analysis_portfolio.analysis_portfolio_id}`"
            ><solid-eye-icon class="h-6 w-6"
          /></nuxt-link>
          <nuxt-link
            :to="`/equity_analysis/${analysis_portfolio.analysis_portfolio_id}/edit`"
            ><solid-pencil-icon class="h-6 w-6"
          /></nuxt-link>
          <div class="cursor-pointer" @click="showConfirmDeleteModal()">
            <solid-trash-icon class="h-6 w-6" />
          </div>
          <confirm-delete
            v-show="isConfirmDeleteModalVisible"
            modalHeadline="Delete confirm"
            deleteMessage="This action cannot be undone. Are you sure? "
            @deleteRecordEvent="
              deleteAnalysisPortfolio(analysis_portfolio.analysis_portfolio_id)
            "
            @close="closeConfirmDeleteModal"
          ></confirm-delete>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { get, destroy } from "~/services/api.service";
import ConfirmDelete from "~/components/ConfirmDelete.vue";

export default Vue.extend({
  layout: "logged",
  components: { ConfirmDelete },
  data() {
    return {
      isConfirmDeleteModalVisible: false,
      analysis_portfolios: {},
      count: "",
      previous: "",
      next: "",
    };
  },
  created() {
    if (localStorage.getItem("username") === null) {
      console.log("Mulibe Kanthu");
    }
  },

  methods: {
    showConfirmDeleteModal() {
      this.isConfirmDeleteModalVisible = true;
    },
    closeConfirmDeleteModal() {
      this.isConfirmDeleteModalVisible = false;
    },
    deleteAnalysisPortfolio(id: Number) {
      return destroy(this.$axios, "analysis_portfolio/" + id + "/")
        .then((results) => {
          this.isConfirmDeleteModalVisible = false;
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async fetch() {
    get(this.$axios, "analysis_portfolio/")
      .then((results) => {
        this.analysis_portfolios = results.results;
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
