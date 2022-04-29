<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">System Roles</h2>
      <div>
        <nuxt-link
          to="/administration/roles/add"
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
        <div class="p-5 w-full">Name</div>
      </div>
      <div class="flex bg-white mb-1" v-for="role in roles" :key="role.role_id">
        <div class="p-5 w-full">
          {{ role.role }}
        </div>
        <div class="p-5 w-max flex flex-row bg-black">
          <nuxt-link :to="`/administration/roles/${role.role_id}`"
            ><solid-eye-icon class="h-8 w-8"
          /></nuxt-link>
          <nuxt-link :to="`/administration/roles/${role.role_id}/edit`"
            ><solid-pencil-icon class="h-8 w-8"
          /></nuxt-link>
          <div class="cursor-pointer" @click="deleteRole(role.role_id)">
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
      roles: {},
      count: "",
      previous: "",
      next: "",
    };
  },

  methods: {
    deleteRole(id: Number) {
      destroy(this.$axios, "role/" + id + "/")
        .then((results) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async fetch() {
    get(this.$axios, "role/")
      .then((results) => {
        this.roles = results.results;
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
