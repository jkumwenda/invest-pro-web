<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">
        {{ userData.first_name }}
        {{ userData.last_name }}
      </h2>
    </div>
    <div class="my-5">
      <div class="flex bg-white">Content Here</div>
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
      userData: {
        user: "",
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      get(this.$axios, "user/" + this.$route.params.id + "/")
        .then((result) => {
          this.userData = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // updateCategory() {
    //   update(
    //     this.$axios,
    //     "user/" + this.$route.params.id + "/",
    //     this.userData
    //   )
    //     .then((results) => {
    //       this.$router.push("/administration/users/");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
});
</script>
