<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">System users</h2>
      <div>
        <nuxt-link
          to="/administration/users/add"
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
        <div class="p-5 w-4/12">Name</div>
        <div class="p-5 w-5/12">Username</div>
        <div class="p-5 flex-auto">Email</div>
        <div class="p-5 flex-1">Controls</div>
      </div>
      <div class="flex bg-white mb-1" v-for="user in users" :key="user.id">
        <div class="p-5 w-4/12">{{ user.first_name }} {{ user.last_name }}</div>
        <div class="p-5 w-5/12">{{ user.username }}</div>
        <div class="p-5 flex-auto">{{ user.email }}</div>
        <div class="p-5 flex flex-1 flex-row bg-black">
          <nuxt-link :to="`/administration/users/${user.id}`"
            ><solid-eye-icon class="h-8 w-8"
          /></nuxt-link>
          <nuxt-link :to="`/administration/users/${user.id}/edit`"
            ><solid-pencil-icon class="h-8 w-8"
          /></nuxt-link>
          <div class="cursor-pointer" @click="deleteUser(user.id)">
            <solid-trash-icon class="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { get, destroy } from "~/services/api.service";

export default Vue.extend({
  layout: "logged",
  data() {
    return {
      users: {},
      count: "",
      previous: "",
      next: "",
    };
  },

  methods: {
    deleteUser(id: Number) {
      destroy(this.$axios, "user/" + id + "/")
        .then((results) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async fetch() {
    get(this.$axios, "user/")
      .then((results) => {
        this.users = results.results;
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
