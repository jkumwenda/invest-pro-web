<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-turquoise-100 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Update user</h2>
      <div></div>
    </div>
    <div class="my-5 font-semibold">
      <form
        class="w-8/12 bg-white rounded-xl p-8"
        v-on:submit.prevent="updateUser"
      >
        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Firstname"
            name="firstname"
            v-model="userData.first_name"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Lastname"
            name="lastname"
            v-model="userData.last_name"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Username"
            name="username"
            v-model="userData.username"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mb-6 mr-auto">
          <input
            class="appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
            id="inline-full-name"
            type="text"
            placeholder="Email"
            name="email"
            v-model="userData.email"
          />
        </div>

        <div class="w-4/4 md:w-3/4 mr-auto">
          <button
            class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl uppercase text-sm font-medium"
            type="submit"
          >
            Save User
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
      userData: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
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
          this.userData.first_name = result.first_name;
          this.userData.last_name = result.last_name;
          this.userData.username = result.username;
          this.userData.email = result.email;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateUser() {
      update(this.$axios, "user/" + this.$route.params.id + "/", this.userData)
        .then((results) => {
          this.$router.push("/administration/users/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
