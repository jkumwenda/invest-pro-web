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
        <div class="p-5 w-4/12">Company</div>
        <div class="p-5 w-5/12">Section</div>
        <div class="p-5 flex-auto">Status</div>
      </div>
      <div class="flex bg-white">
        <div class="p-5 w-4/12">Airtel Malawi</div>
        <div class="p-5 w-5/12">Telecommunication</div>
        <div class="p-5 flex-auto">Pending</div>
        <div class="p-5 flex-1">
          <nuxt-link to="#"><solid-trash-icon class="h-8 w-8" /></nuxt-link>
        </div>
        <div class="p-5 flex-1">
          <nuxt-link to="/equity_analysis/company"
            ><solid-view-grid-add-icon class="h-8 w-8"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "logged",
});
</script>
