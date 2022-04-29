<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-turquoise-100 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Update parameter</h2>
      <div></div>
    </div>
    <div class="my-5 font-semibold">
      <form
        class="w-8/12 bg-white rounded-xl p-8"
        v-on:submit.prevent="updateParameter"
      >
        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Parameter"
            name="parameter"
            v-model="parameterData.parameter"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <select
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="grid-state"
            v-model="parameterData.parameter_category_id"
          >
            <option
              v-for="parameter_category in parameter_categories"
              :value="parameter_category.parameter_category_id"
              :key="parameter_category.parameter_category_id"
            >
              {{ parameter_category.parameter_category }}
            </option>
          </select>
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <select
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="grid-state"
            v-model="parameterData.answer_type_id"
          >
            <option
              v-for="answer_type in answer_types"
              :value="answer_type.answer_type_id"
              :key="answer_type.answer_type_id"
            >
              {{ answer_type.answer_type }}
            </option>
          </select>
        </div>

        <div class="w-4/4 md:w-3/4 mr-auto">
          <button
            class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl uppercase text-sm font-medium"
            type="submit"
          >
            Save Parameter
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
      parameterData: {
        parameter: "",
        parameter_category_id: "",
        answer_type_id: "",
      },
      answer_types: {},
      parameter_categories: {},
    };
  },
  created() {
    this.getParameter();
  },
  methods: {
    getParameter() {
      get(this.$axios, "parameter/" + this.$route.params.id + "/")
        .then((result) => {
          this.parameterData.parameter = result.parameter;
          this.parameterData.answer_type_id = result.answer_type_id;
          this.parameterData.parameter_category_id =
            result.parameter_category_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateParameter() {
      update(
        this.$axios,
        "parameter/" + this.$route.params.id + "/",
        this.parameterData
      )
        .then((results) => {
          this.$router.push("/parameter_config/parameters/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async fetch() {
    get(this.$axios, "answer_type/")
      .then((results) => {
        this.answer_types = results.results;
      })
      .catch((error) => {
        console.log(error);
      });
    get(this.$axios, "parameter_category/")
      .then((results) => {
        this.parameter_categories = results.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
