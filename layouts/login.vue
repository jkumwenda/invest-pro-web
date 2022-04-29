<template>
  <div
    class="h-screen w-full flex flex-col justify-between bg-turquoise-500 font-sans"
  >
    <div class="pt-6 mx-auto">
      <img
        src="~/assets/images/login_logo.png"
        class="object-contain h-24 w-full"
      />
    </div>
    <div
      class="flex flex-col bg-white rounded-xl p-5 w-full lg:w-1/2 mx-auto m-5"
    >
      <h1 class="mx-auto text-2xl font-medium p-6">Log In</h1>
      <Nuxt />
      <div class="mx-auto text-sm p-5">Forgot your password?</div>
    </div>
    <div><Footer /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "~/components/Footer.vue";
export default Vue.extend({
  name: "login",
  components: { Footer },
});
</script>
