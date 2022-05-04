<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-turquoise-100 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Create answer value</h2>
      <div></div>
    </div>
    <div class="my-5 font-semibold">
      <form
        class="w-8/12 bg-white rounded-xl p-8"
        v-on:submit.prevent="addAnswerValue"
      >
        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Answer"
            name="answer_value"
            v-model="answerValueData.answer_value"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <select
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="grid-state"
            v-model="answerValueData.answer_type_id"
          >
            <option value="" disabled hidden>Select Age</option>
            <option
              v-for="answer_type in answer_types"
              :value="answer_type.answer_type_id"
              :key="answer_type.answer_type_id"
            >
              {{ answer_type.answer_type }}
            </option>
          </select>
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Value"
            name="value"
            v-model="answerValueData.value"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mr-auto">
          <button
            class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl uppercase text-sm font-medium"
            type="submit"
          >
            Save Answer Value
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
      answerValueData: {
        answer_value: "",
        value: "",
        answer_type_id: "",
      },
      answer_types: {},
      count: "",
      previous: "",
      next: "",
    };
  },
  methods: {
    addAnswerValue() {
      this.loading = true;
      post(this.$axios, "answer_value/", this.answerValueData)
        .then((results) => {
          this.$router.push("/parameter_config/answer_values/");
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
