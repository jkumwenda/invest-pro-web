<!-- Please remove this file from your project -->
<template>
  <form class="w-full" @submit.prevent="userLogin">
    <div class="w-3/3 md:w-2/3 mb-6 mx-auto">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
        id="username"
        name="username"
        type="text"
        placeholder="Username..."
        v-model="loginData.username"
      />
    </div>

    <div class="w-3/3 md:w-2/3 md mb-6 mx-auto">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tory-blue-500"
        id="password"
        name="password"
        v-model="loginData.password"
        type="password"
        placeholder="******************"
      />
    </div>

    <div class="flex mb-6 w-3/3 md:w-2/3 mx-auto">
      <label class="w-3/3 md:w-2/3 block text-gray-500 font-medium">
        <input class="mr-2 leading-tight" type="checkbox" />
        <span class="text-sm"> Remember me </span>
      </label>
    </div>

    <div class="w-3/3 md:w-2/3 mx-auto">
      <button
        class="shadow bg-tory-blue-500 hover:bg-tory-blue-400 focus:shadow-outline focus:outline-none text-white py-3 px-4 rounded-xl w-full uppercase text-sm font-medium"
        type="submit"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  layout: "login",
  head() {
    return {
      title: "InvestPro - Welcome",
    };
  },
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      await this.$axios
        .$post("auth/", this.loginData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((result: any) => {
          let token = result.access;
          let tokenParts = token.split(/\./);
          const tokenDecoded = JSON.parse(window.atob(tokenParts[1]));
          let user_id = tokenDecoded.user_id;
          localStorage.setItem("token", token);
          this.getUser(user_id, token);
          this.$router.push("/dashboard");
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
    async getUser(user_id: any, token: any) {
      await this.$axios
        .$get("user/" + user_id + "/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((result: any) => {
          localStorage.setItem("user_id", result.id);
          localStorage.setItem("first_name", result.first_name);
          localStorage.setItem("last_name", result.last_name);
          localStorage.setItem("username", result.username);
          localStorage.setItem("email", result.email);
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  },
});
</script>
