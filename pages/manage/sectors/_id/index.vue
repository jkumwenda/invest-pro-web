<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">
        {{ roleData.role }}
      </h2>
    </div>
    <div class="my-5">
      <div class="flex bg-white">Content Here</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { get } from "~/services/api.service";
export default Vue.extend({
  layout: "logged",
  data() {
    return {
      roleData: {
        role: "",
      },
    };
  },
  created() {
    this.getRole();
  },
  methods: {
    getRole() {
      get(this.$axios, "role/" + this.$route.params.id + "/")
        .then((result) => {
          this.roleData = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
