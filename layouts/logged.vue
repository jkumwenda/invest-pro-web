<template>
  <div
    class="flex flex-col lg:flex-row h-screen w-full font-nunito text-shuttle-gray-500"
  >
    <div class="w-12/2 lg:w-2/12 p-6 drop-shadow-md">
      <Sidebar />
    </div>
    <div class="flex flex-col flex-1 w-12/12 lg:w-10/12 bg-seashell-500">
      <div class="flex m-6 mb-0 p-5 bg-white rounded-xl justify-end">
        <Header />
      </div>
      <div class="flex-1 flex flex-col m-6"><Nuxt /></div>
      <div class=""><Footer /></div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Footer from "~/components/Footer.vue";

export default Vue.extend({
  name: "logged",
  components: { Sidebar, Header, Footer },
});
</script>
