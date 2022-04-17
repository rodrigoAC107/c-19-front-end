<template>
  <LayoutVertical>
    <h1>Dashboard</h1>
    <div class="flex flex-row space-x-2 my-2 justify-around">
      <div
        class="bg-white border-1 border-solid h-44 w-46 rounded-lg shadow-xl shadow-gray-400 hover:bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer"
      >
        <div
          class="flex flex-col h-full justify-center align-middle px-4 py-2 space-y-6 bg-hover-white"
        >
          <h1 class="text-blue-500 font-medium">50601</h1>
          <h1 class="text-blue-700 font-bold">CONFIRMED</h1>
          <h2 class="text-gray-500 font-normal">Today have been 31</h2>
        </div>
      </div>
      <div
        class="bg-white border-1 border-solid h-44 w-46 rounded-lg shadow-xl shadow-gray-400 hover:bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer"
      >
        <div
          class="flex flex-col h-full justify-center align-middle px-4 py-2 space-y-6 bg-hover-white"
        >
          <h1 class="text-blue-500 font-medium">37930</h1>
          <h1 class="text-blue-700 font-bold">RECUPERED</h1>
          <h2 class="text-gray-500 font-normal">Today have been 64</h2>
        </div>
      </div>
      <div
        class="bg-white border-1 border-solid h-44 w-46 rounded-lg shadow-xl shadow-gray-400 hover:bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer"
      >
        <div
          class="flex flex-col h-full justify-center align-middle px-4 py-2 space-y-6 bg-hover-white"
        >
          <h1 class="text-blue-500 font-medium">52566 ALL</h1>
          <h1 class="text-blue-700 font-bold">DECEASED</h1>
          <h2 class="text-gray-500 font-normal">Today have been 0</h2>
        </div>
      </div>
      <div
        class="bg-white border-1 border-solid h-44 w-46 rounded-lg shadow-xl shadow-gray-400 hover:bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer"
      >
        <div
          class="flex flex-col h-full justify-center align-middle px-4 py-2 space-y-6 bg-hover-white"
        >
          <h1 class="text-blue-500 font-medium">5000</h1>
          <h1 class="text-blue-700 font-bold">IN TREATMENT</h1>
          <h2 class="text-gray-500 font-normal">Today have been 33</h2>
        </div>
      </div>
      <div
        class="bg-white border-1 border-solid h-44 w-1/4 rounded-lg shadow-xl shadow-gray-400 hover:bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer"
      >
        <div class="flex flex-col h-full w-full bg-hover-white">
          <div class="flex flex-row h-1/2 py-4">
            <div class="text-center w-1/2">
              <p class="text-blue-700 font-bold">HABITANTES</p>
              <p class="text-blue-500 font-medium">3402563</p>
            </div>
            <div class="text-center w-1/2">
              <p class="text-blue-700 font-bold">RAZÓN</p>
              <p class="text-blue-500 font-medium">ALTA</p>
            </div>
          </div>
          <div class="flex flex-row h-1/2 py-4">
            <div class="text-center w-1/2">
              <p class="text-blue-700 font-bold">INCIDENCIA</p>
              <p class="text-blue-500 font-medium">ALTA</p>
            </div>
            <div class="text-center w-1/2">
              <p class="text-blue-700 font-bold">CLASIFICACIÓN</p>
              <p class="text-blue-500 font-medium">ALTA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutVertical>
</template>

<script>
import LayoutVertical from "../layout/LayoutVertical.vue";
export default {
  components: {
    LayoutVertical,
  },
  setup() {
    
  },
};
</script>

<style scoped>
.bg-hover-white:hover h1,
.bg-hover-white:hover h2,
.bg-hover-white:hover p {
  color: white !important;
}
</style>
