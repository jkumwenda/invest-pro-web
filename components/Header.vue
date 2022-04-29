<template>
  <!-- <nuxt-link to="/users" class="flex items-center flex-shrink">
    <solid-user-circle-icon class="h-10 w-10" /> Joel</nuxt-link
  > -->

  <!-- Start here -->
  <div class="relative inline-block text-left">
    <div
      @mouseover="profileDropdownMenu"
      class="inline-flex flex-row text-base text-gray-700 hover:text-gray-500 cursor-pointer flex items-center flex-shrink"
    >
      <solid-user-circle-icon class="h-10 w-10" /> {{ username }}
      <svg
        class="-mr-1 ml-1 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div
      class="hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
      id="profileDropdown"
    >
      <div class="py-1">
        <nuxt-link to="/" class="text-gray-700 block px-4 py-2 text-sm"
          >Account settings</nuxt-link
        >
        <nuxt-link to="/" class="text-gray-700 block px-4 py-2 text-sm"
          >Support</nuxt-link
        >
        <div
          @click="logout()"
          class="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
        >
          Sign out
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    profileDropdownMenu() {
      const dropdown = document.querySelector("#profileDropdown");
      dropdown.classList.toggle("hidden");
      dropdown.classList.toggle("origin-top-right");
      // if(dropdown.classList.contains('hidden')){
      //   dropdown.classList.remove('hidden');
      //   dropdown.classList.add('flex');
      // }
      // else{
      //   dropdown.classList.remove('flex');
      //   dropdown.classList.add('hidden');
      // }
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>
