<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-turquoise-100 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Update answer type</h2>
      <div></div>
    </div>
    <div class="my-5 font-semibold">
      <form
        class="w-8/12 bg-white rounded-xl p-8"
        v-on:submit.prevent="updateAnswerType"
      >
        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Firstname"
            name="firstname"
            v-model="answerTypeData.answer_type"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mr-auto">
          <button
            class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl uppercase text-sm font-medium"
            type="submit"
          >
            Save Answer Type
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
      answerTypeData: {
        answer_type: "",
      },
    };
  },
  created() {
    this.getAnswerType();
  },
  methods: {
    getAnswerType() {
      get(this.$axios, "answer_type/" + this.$route.params.id + "/")
        .then((result) => {
          this.answerTypeData.answer_type = result.answer_type;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateAnswerType() {
      update(
        this.$axios,
        "answer_type/" + this.$route.params.id + "/",
        this.answerTypeData
      )
        .then((results) => {
          this.$router.push("/parameter_config/answer_types/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
