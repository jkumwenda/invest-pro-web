<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Access rights</h2>
      <div>
        <nuxt-link
          to="/administration/access_rights/add"
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
        <div class="p-5 w-4/12">Access right</div>
        <div class="p-5 flex-auto">Code</div>
      </div>
      <div
        class="flex bg-white mb-1"
        v-for="access_right in access_rights"
        :key="access_right.access_right_id"
      >
        <div class="p-5 w-4/12">
          {{ access_right.access_right }}
        </div>
        <div class="p-5 flex-auto">
          {{ access_right.code }}
        </div>
        <div class="p-5 w-max flex flex-row bg-tory-blue-500 text-tory-blue-50">
          <nuxt-link
            :to="`/administration/access_rights/${access_right.access_right_id}`"
            ><solid-eye-icon class="h-6 w-6"
          /></nuxt-link>
          <nuxt-link
            :to="`/administration/access_rights/${access_right.access_right_id}/edit`"
            ><solid-pencil-icon class="h-6 w-6"
          /></nuxt-link>
          <div class="cursor-pointer" @click="showConfirmDeleteModal()">
            <solid-trash-icon class="h-6 w-6" />
          </div>
          <confirm-delete
            v-show="isConfirmDeleteModalVisible"
            modalHeadline="Delete confirm"
            deleteMessage="This action cannot be undone. Are you sure? "
            @deleteRecordEvent="deleteAccessRight(access_right.access_right_id)"
            @close="closeConfirmDeleteModal"
          ></confirm-delete>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { get, destroy } from "~/services/api.service";
import ConfirmDelete from "~/components/ConfirmDelete.vue";

export default Vue.extend({
  components: { ConfirmDelete },
  layout: "logged",
  data() {
    return {
      isConfirmDeleteModalVisible: false,
      access_rights: {},
      count: "",
      previous: "",
      next: "",
    };
  },

  methods: {
    showConfirmDeleteModal() {
      this.isConfirmDeleteModalVisible = true;
    },
    closeConfirmDeleteModal() {
      this.isConfirmDeleteModalVisible = false;
    },
    deleteAccessRight(id: Number) {
      destroy(this.$axios, "access_right/" + id + "/")
        .then((results) => {
          this.isConfirmDeleteModalVisible = false;
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async fetch() {
    get(this.$axios, "access_right/")
      .then((results) => {
        this.access_rights = results.results;
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
