<template>
  <div class="flex flex-1 flex-col">
    <div
      class="flex flex-col gap-2 bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <div class="flex text-2xl font-semibold">Aitel Malawi</div>
      <div class="flex text-md">
        <div class="font-semibold w-3/12">Sector</div>
        <div class="">: Telecommunication</div>
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
    </div>
    <div class="flex flex-wrap my-5">
      <div class="w-6/12" @click="showAddProjectSpaceModal = true">
        <div
          class="flex flex-col cursor-pointer p-3 gap-1 bg-white rounded-xl m-2 hover:bg-turquoise-400 hover:text-tory-blue-600"
        >
          <p class="p-2">
            Does the business have a strong balance sheet, preferably with net
            cash?
          </p>
          <span
            class="flex-none w-14 text-center bg-tory-blue-600 p-2 rounded-2xl text-white"
            >1/12</span
          >
        </div>
      </div>
      <div class="w-6/12">
        <div
          class="flex flex-col cursor-pointer p-3 gap-1 bg-white rounded-xl m-2 hover:bg-turquoise-400 hover:text-tory-blue-600"
        >
          <p class="p-2">
            Does the business have a strong balance sheet, preferably with net
            cash?
          </p>
          <span
            class="flex-none w-14 text-center bg-tory-blue-600 p-2 rounded-2xl text-white"
            >2/12</span
          >
        </div>
      </div>
      <div class="w-6/12">
        <div
          class="flex flex-col cursor-pointer p-3 gap-1 bg-white rounded-xl m-2 hover:bg-turquoise-400 hover:text-tory-blue-600"
        >
          <p class="p-2">
            Does the business have a strong balance sheet, preferably with net
            cash?
          </p>
          <span
            class="flex-none w-14 text-center bg-tory-blue-600 p-2 rounded-2xl text-white"
            >5/12</span
          >
        </div>
      </div>
    </div>
    <ParameterModal
      v-show="showAddProjectSpaceModal"
      @close-modal="showAddProjectSpaceModal = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ParameterModal from "~/components/ParameterModal.vue";

export default Vue.extend({
  layout: "logged",
  components: { ParameterModal },
  data() {
    return {
      showAddProjectSpaceModal: false,
    };
  },
  methods: {
    editSpaceModal() {
      this.showAddProjectSpaceModal = true;
    },
  },
});
</script>
