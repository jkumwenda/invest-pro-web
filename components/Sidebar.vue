<template>
  <div class="flex flex-col text-lg">
    <div class="h-18 w-full"><img src="~/assets/images/logo.png" /></div>
    <div class="flex flex-col py-6 space-y-4">
      <nuxt-link to="/dashboard" class="flex items-center"
        ><solid-home-icon class="h-6 w-6" />
        <p class="pl-1">Dashboard</p></nuxt-link
      >
      <nuxt-link to="/equity_analysis" class="flex items-center"
        ><solid-trending-up-icon class="h-6 w-6 text-turquoise-500" />
        <p class="pl-1">Equity</p>
        Analysis</nuxt-link
      >
      <div class="border-t-2 border-seashell-500"></div>
      <p class="text-sm font-semibold uppercase">Administration</p>
      <!-------------------------->
      <div
        class="flex items-center cursor-pointer"
        v-on:click="parameterConfigDropdownMenu"
      >
        <solid-question-mark-circle-icon class="h-6 w-6 text-turquoise-700" />
        <p class="pl-1">Parameter Config</p>
      </div>
      <div
        class="bg-white border-1 py-4 shadow rounded-xl px-2 py-4 hidden flex-col text-gray-500"
        id="parameterConfigDropdown"
      >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/parameter_config/answer_types"
          >Answer Types</nuxt-link
        >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/parameter_config/answer_values"
          >Answer Values</nuxt-link
        >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/parameter_config/parameter_categories"
          >Parameter Categories</nuxt-link
        >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/parameter_config/parameters"
          >Parameters</nuxt-link
        >
      </div>
      <!-------------------------->
      <div
        class="flex items-center cursor-pointer"
        v-on:click="manageDropdownMenu"
      >
        <solid-cog-icon class="h-6 w-6 text-turquoise-700" />
        <p class="pl-1">Manage</p>
      </div>
      <div
        class="bg-white border-1 py-4 shadow rounded-xl px-2 py-4 hidden flex-col text-gray-500"
        id="manageDropdown"
      >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/manage/sectors"
          >Sectors</nuxt-link
        >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/manage/companies"
          >Companies</nuxt-link
        >
      </div>
      <!------------------------------>
      <div
        class="flex items-center cursor-pointer"
        v-on:click="projectDropdownMenu"
      >
        <solid-users-icon class="h-6 w-6 text-turquoise-700" />
        <p class="pl-1">User Management</p>
      </div>
      <div
        class="bg-white border-1 py-4 shadow rounded-xl px-2 py-4 hidden flex-col text-gray-500"
        id="projectDropdown"
      >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/administration/users"
          >Users</nuxt-link
        >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/administration/roles"
          >Roles</nuxt-link
        >
        <nuxt-link
          class="p2-1 p-2 px-5 mx-1 cursor-pointer text-sm hover:bg-gray-400 rounded-xl hover:text-gray-50"
          to="/administration/access_rights"
          >Access Rights</nuxt-link
        >
      </div>
      <!------------------------------>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    parameterConfigDropdownMenu() {
      const dropdown = document.querySelector("#parameterConfigDropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex");
    },
    configureDropdownMenu() {
      const dropdown = document.querySelector("#configureDropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex");
    },
    userManagementDropdownMenu() {
      const dropdown = document.querySelector("#userManagementDropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex");
    },
    projectDropdownMenu() {
      const dropdown = document.querySelector("#projectDropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex");
    },
    manageDropdownMenu() {
      const dropdown = document.querySelector("#manageDropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("flex");
    },
  },
};
</script>
