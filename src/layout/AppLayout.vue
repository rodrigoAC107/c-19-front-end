<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const layout = computed(() =>
      route.meta.layout === "full" ? "layout-full" : "layout-vertical"
    );

    return {
      layout,
    };
  },
};
</script>
