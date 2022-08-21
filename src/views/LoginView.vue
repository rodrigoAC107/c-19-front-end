<template>
  <div class="flex justify-center items-center bg-blue-100 h-screen">
    <div class="flex flex-row rounded-xl border-gray-100 bg-white w-3/5 h-4/5">
      <div
        class="flex justify-center items-center bg-blue-900 border border-blue-900 w-1/2 rounded-tl-xl rounded-bl-xl"
      >
        <div class="flex justify-center items-center w-4/5 h-3/5">
          <img src="../assets/logo-new-c19.png" alt="logo-c-19" />
        </div>
      </div>
      <div
        class="flex justify-center items-center border border-gray-300 w-1/2 rounded-tr-xl rounded-br-xl"
      >
        <div class="text-center w-4/5 h-1/2 space-y-6">
          <p class="font-bold text-3xl text-blue-900">Inciar Sesión</p>
          <p class="font-semibold text-blue-800">
            Por favor ingresa tus credenciales para iniciar sesión.
          </p>
          <form class="space-y-5" @submit.prevent="onSubmit">
            <div>
              <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="border border-gray-300 rounded-md py-1 px-2 outline-gray-300 w-4/5"
              />
            </div>
            <div>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="border border-gray-300 rounded-md py-1 px-2 outline-gray-300 w-4/5"
              />
            </div>
            <div>
              <router-link
                to="/forgot-password"
                class="text-blue-700 hover:underline hover:cursor-pointer"
                >Olvide mi contraseña</router-link
              >
            </div>
            <div>
              <button
                type="submit"
                class="bg-blue-400 text-white p-2 w-4/5 rounded-lg hover:bg-blue-600"
              >
                Inciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { meUser } from "../services/UserServices";
import useAuth from "../composables/useAuth";

export default {
  setup() {
    const { loginUser, setLocalStorage } = useAuth();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    return {
      email,
      password,

      // methods
      onSubmit: async () => {
        try {
          const { data } = await loginUser(email.value, password.value);
          const { user, token } = data;
          setLocalStorage("user", user);
          setLocalStorage("x-token", token);
          router.push({ name: "dashboard" });
        } catch (error) {
          console.log(error);
        }
      },
    };
  },
};
</script>

<style></style>
