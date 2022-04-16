<template>
  <div class="flex flex-row min-h-screen">
    <div
      class="bg-blue-900 text-white duration-500"
      :class="[sidebarToggle ? 'w-0 p-0' : 'w-1/5 p-3']"
    >
      <side-bar />
    </div>
    <div class="w-full flex flex-col">
      <div class="bg-blue-100">
        <nav-bar />
      </div>
      <div class="h-full w-full bg-blue-100">
        <div class="p-3">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/BarSide.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    NavBar,
    SideBar,
  },
  setup() {
    const store = useStore();

    const sidebarToggle = computed(
      () => store.getters["sidebar/getSidebarToggle"]
    );

    return {
      sidebarToggle,
    };
  },
};
</script>
