<template>
  <div class="flex flex-1 flex-col">
    <div
      class="flex flex-col gap-2 bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <div class="flex text-2xl font-semibold">{{ company.company }}</div>
      <div class="flex text-md">
        <div class="font-semibold w-3/12">Sector</div>
        <div class="">: {{ sector.sector }}</div>
      </div>
      <div class="flex text-md">
        <div class="font-semibold w-3/12">
          Total score - investment analysis parameters
        </div>
        <div class="">: 95%</div>
      </div>
      <div class="flex">
        <div class="font-semibold w-3/12">Investment decision</div>
        <div class="">: Sell</div>
      </div>

      <div class="flex">
        <div class="font-semibold w-3/12">Total Parameters</div>
        <div class="">: {{ analysis_portfolios.parameter_data }}</div>
      </div>

      <div class="flex">
        <div class="font-semibold w-3/12">Total Responses</div>
        <div class="">:</div>
      </div>
    </div>
    <div class="flex flex-col space-y-3 my-5">
      <div
        class="w-12/12"
        v-for="analysis_portfolio in analysis_portfolios"
        :key="analysis_portfolio.analysis_portfolio_id"
      >
        <div class="flex flex-col space-y-2 p-6 gap-1 bg-white rounded-xl">
          <h2 class="font-semibold text-lg text-tory-blue-600">
            {{ analysis_portfolio.parameter_category.parameter_category }}
          </h2>
          <div
            class="flex rounded-md bg-turquoise-100"
            v-for="analysis_parameter in analysis_portfolio.analysis_portfolio_category"
            :key="analysis_parameter.analysis_parameter_id"
          >
            <div class="flex-grow p-2 inline-block align-middle">
              {{ analysis_parameter.parameter.parameter }}
            </div>
            <div
              class="p-2 rounded-r-md bg-turquoise-200"
              :set="(value_state = 0)"
            >
              <p
                v-for="analysis_parameter_value of analysis_parameter.analysis_parameter_value"
                :key="analysis_parameter_value.analysis_value_id"
                :set="(value_state = analysis_parameter_value)"
              ></p>
              <select
                class="text-gray-500 border border-gray-300 rounded-xl py-1 px-2 focus:outline-none"
                id="status"
                name="status_id"
                type="text"
                placeholder="Answer..."
                @change="
                  addAnalysisValue(
                    $event,
                    analysis_parameter.analysis_parameter_id,
                    add
                  )
                "
              >
                <option
                  v-if="value_state.analysis_value_id"
                  :value="value_state.answer_value_id"
                  :key="value_state.answer_value_id"
                >
                  {{ value_state.answer_value.answer_value }}
                </option>
                <option v-else>--Option--</option>
                <option
                  class="text-sm"
                  v-for="answer_value in analysis_parameter.parameter
                    .answer_type.answer_types"
                  :value="answer_value.answer_value_id"
                  :key="answer_value.answer_value_id"
                >
                  {{ answer_value.answer_value }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { get, post } from "~/services/api.service";
export default Vue.extend({
  layout: "logged",
  data() {
    return {
      company: "",
      sector: "",
      analysis_portfolios: "",
      key: "",

      analysisValueData: {
        analysis_parameter_id: "",
        answer_value_id: "",
      },
    };
  },
  created() {
    this.getAnalysisPortifolio();
  },
  methods: {
    getAnalysisPortifolio() {
      get(this.$axios, "analysis_portfolio/" + this.$route.params.id + "/")
        .then((result) => {
          this.company = result.company;
          this.sector = result.company.sector;
          this.analysis_portfolios = result.analysis_portfolios;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addAnalysisValue(answer_value: any, analysis_parameter_id: any, add: any) {
      this.analysisValueData.analysis_parameter_id = analysis_parameter_id;
      this.analysisValueData.answer_value_id = answer_value.target.value;

      post(this.$axios, "analysis_value/", this.analysisValueData)
        .then((results) => {
          this.$router.push("/equity_analysis/" + this.$route.params.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
