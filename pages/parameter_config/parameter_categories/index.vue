<template>
  <div>
    <div
      class="flex items-center bg-turquoise-500 text-tory-blue-600 p-5 rounded-xl align-middle"
    >
      <h2 class="flex-1 text-xl font-semibold">Parameter Categories</h2>
      <div>
        <nuxt-link
          to="/parameter_config/parameter_categories/add"
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
        <div class="p-5 w-full">Parameter type</div>
      </div>
      <div
        class="flex bg-white mb-1"
        v-for="parameter_category in parameter_categories"
        :key="parameter_category.parameter_category_id"
      >
        <div class="p-5 w-full">
          {{ parameter_category.parameter_category }}
        </div>
        <div class="p-5 w-max flex flex-row bg-tory-blue-500 text-tory-blue-50">
          <nuxt-link
            :to="`/parameter_config/parameter_categories/${parameter_category.parameter_category_id}/edit`"
            ><solid-pencil-icon class="h-6 w-6"
          /></nuxt-link>
          <div
            class="cursor-pointer"
            @click="
              deleteParameterCategory(parameter_category.parameter_category_id)
            "
          >
            <solid-trash-icon class="h-6 w-6" />
          </div>
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
  layout: "logged",
  components: { ConfirmDelete },
  data() {
    return {
      isConfirmDeleteModalVisible: false,
      parameter_categories: {},
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
    deleteParameterCategory(id: Number) {
      destroy(this.$axios, "parameter_category/" + id + "/")
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
    get(this.$axios, "parameter_category/")
      .then((results) => {
        this.parameter_categories = results.results;
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
