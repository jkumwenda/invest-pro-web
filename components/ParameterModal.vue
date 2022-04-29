<template>
  <div
    class="flex fixed inset-0 justify-center items-center bg-gray-800 bg-opacity-75"
    @click="$emit('close-modal')"
  >
    <div class="bg-white rounded-2xl w-6/12 p-6" @click.stop>
      <h6 class="text-xl">Project Space Details</h6>
      <form
        class="w-full max-w-3xl bg-white rounded-xl"
        @submit.prevent="addProjectSpace"
      >
        <div class="flex flex-row mb:flex-col p-2 bg-gray-100 mb-1">
          <label
            class="block w-10/12 text-gray-500 text-xs font-normal py-1 px-2 text-lg"
            for="grid-project"
          >
            Is the value of discounted earnings greater than the current market
            value?
          </label>

          <select
            class="h-8 w-2/12 text-gray-500 border border-gray-300 rounded-xl py-1 px-2 focus:outline-none"
            id="status"
            name="status_id"
            v-model="projectSpaceData.space_id"
            type="text"
            placeholder="Building type..."
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div class="flex flex-row p-2 bg-gray-100">
          <label
            class="grow-0 w-10/12 text-gray-500 text-xs font-normal py-1 px-2 text-lg"
            for="grid-project"
          >
            Is the value of discounted earnings greater than the current market
            value? Is the value of discounted earnings greater than the current
            market value?
          </label>

          <select
            class="h-8 w-2/12 text-gray-500 border border-gray-300 rounded-xl py-1 px-2 focus:outline-none"
            id="status"
            name="status_id"
            v-model="projectSpaceData.space_id"
            type="text"
            placeholder="Building type..."
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div class="flex flex-wrap mt-6">
          <div class="block w-full md:w-1/2 py-1 md:pr-1">
            <button
              type="submit"
              class="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500 font-bold text-blue-100 border-1 rounded-2xl border-blue-500 hover:bg-blue-800 focus:outline-none focus:border-gray-500 py-2 px-4"
              id="submit"
            >
              Submit
            </button>
            <button
              type="button"
              class="font-bold text-blue-800 bg-blue-100 hover:bg-gray-100 focus:outline-none focus:border-blue-200 border-1 rounded-2xl border-blue-500 py-2 px-4"
              id="submit"
              @click="$emit('close-modal')"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { post, get } from "~/services/api.service";
export default Vue.extend({
  data() {
    return {
      projectSpaceData: {
        size: "",
        space_id: "",
        project_id: this.$route.params.id,
      },
      spaces: "",
    };
  },
  created() {
    this.getSpace();
  },
  methods: {
    getSpace() {
      get(this.$axios, "space/")
        .then((results) => {
          this.spaces = results.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addProjectSpace() {
      post(this.$axios, "project_space/", this.projectSpaceData)
        .then((result) => {
          this.$router.go();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
