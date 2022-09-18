<template>
  <div class="p-2 flex flex-row justify-between text-gray-500">
    <div class="p-2">
      <MenuIcon
        @click="changeSidebar"
        class="h-8 w-8 text-gray-500 hover:cursor-pointer"
      />
    </div>
    <div class="p-1 flex flex-row space-x-2">
      <div
        class="p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-50 hover:rounded-lg"
      >
        <BellIcon
          class="ease-in-out duration-300 h-6 w-5 text-gray-500 hover:h-6 hover:w-6"
        />
      </div>
      <router-link
        to="/profile"
        class="p-2 flex flex-row space-x-4 cursor-pointer hover:bg-gray-50 hover:rounded-lg"
      >
        <p>{{ name }}</p>
      </router-link>
      <div
        @click="logOut"
        class="p-2 flex flex-row space-x-1 cursor-pointer hover:bg-gray-50 hover:rounded-lg"
      >
        <p>Logout</p>
        <LogoutIcon class="h-6 w-5" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  BellIcon,
  UserCircleIcon,
  LogoutIcon,
  MenuIcon,
} from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { computed } from "vue";
import useAuth from "../composables/useAuth";
import { useRouter } from "vue-router";
import { showConfirmation } from "../utils/Alerts";
export default {
  components: { BellIcon, UserCircleIcon, LogoutIcon, MenuIcon },
  setup() {
    const store = useStore();
    const { clearLocalStorage, getLocalStorage } = useAuth();
    const router = useRouter();
    const name = ref('');

    name.value = getLocalStorage('user').name;

    const sidebarToggle = computed(
      () => store.getters["sidebar/getSidebarToggle"]
    );

    return {
      name,
      // methods
      changeSidebar: () =>
        store.dispatch("sidebar/toggleSidebar", !sidebarToggle.value),
      logOut: async () => {
        const response = await showConfirmation({ title: '¿Desea salir?', confirmButtonText: 'Salir' });
        if (response.isConfirmed) {
          clearLocalStorage();
          router.push({ name: "login" });
        }
      },

      // computed
      sidebarToggle,
    };
  },
};
</script>
