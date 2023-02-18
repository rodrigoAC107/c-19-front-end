<template>
  <div class="flex justify-center">
    <img
      src="../assets/logo-new-c19.png"
      alt="Logo C19"
      class="w-5/12 rounded-lg"
    />
  </div>
  <hr class="my-4" />
  <div class="px-2 pb-2">
    <ul class="space-y-2 p-2">
      <router-link
        :to="{ name: 'dashboard' }"
        class="hover:bg-sky-300 hover:rounded-md hover:p-2 hover:cursor-pointer hover:text-blue-900 hover:font-medium font-medium p-2 flex flex-row"
      >
        <TemplateIcon class="h-6 w-5 mr-2" />
        <p>Dashboard</p>
      </router-link>
      <router-link
        :to="{ name: 'cases' }"
        class="hover:bg-sky-300 hover:rounded-md hover:p-2 hover:cursor-pointer hover:text-blue-900 hover:font-medium font-medium p-2 flex flex-row"
      >
        <ChartSquareBarIcon class="h-6 w-5 mr-2" />
        <p>Cases</p>
      </router-link>
      <router-link
        :to="{ name: 'laboratory' }"
        class="hover:bg-sky-300 hover:rounded-md hover:p-2 hover:cursor-pointer hover:text-blue-900 hover:font-medium font-medium p-2 flex flex-row"
      >
        <BeakerIcon class="h-6 w-5 mr-2" />
        <p>Laboratory</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";
import {
  TemplateIcon,
  BeakerIcon,
  ChartSquareBarIcon,
} from "@heroicons/vue/outline";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
export default {
  components: {
    TemplateIcon,
    BeakerIcon,
    ChartSquareBarIcon,
  },
  setup() {
    const router = useRouter();
    const { getUser, clearLocalStorage } = useAuth();

    onMounted(async () => {
      try {
        await getUser();
      } catch (error) {
        clearLocalStorage();
        router.push({ name: "login" });
      }
    });
  },
};
</script>

<style scoped>
.router-link-active {
  --tw-text-opacity: 1;
  background-color: rgb(125 211 252 / var(--tw-text-opacity));
  font-weight: 500;
  border-radius: 0.375rem;
  color: rgb(30 58 138 / var(--tw-text-opacity));
}
</style>
