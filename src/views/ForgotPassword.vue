<template>
    <div class="flex justify-center items-center bg-blue-100 h-screen">
      <div
        class="flex flex-row rounded-xl border-gray-100 bg-white w-3/5 h-4/5"
      >
        <div
          class="flex justify-center items-center border border-gray-300 w-1/2 rounded-tl-xl rounded-bl-xl"
        >
          <div class="text-center w-4/5 h-1/2 space-y-6">
            <p class="font-bold text-3xl text-blue-900">Recuperar Contraseña</p>
            <p class="font-semibold text-blue-800">
              Por favor ingresa tu email para recuperar contraseña.
            </p>
            <div>
              <input
                type="email"
                value=""
                placeholder="Email"
                class="border border-gray-300 rounded-md py-1 px-2 outline-gray-300 w-4/5"
              />
            </div>
            <div>
              <router-link
                to="/login"
                class="text-blue-700 hover:underline hover:cursor-pointer"
                >Incio de Sesión</router-link
              >
            </div>
            <div>
              <button
                class="bg-blue-400 text-white p-2 w-4/5 rounded-lg hover:bg-blue-600"
              >
                Recuperar
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center bg-blue-900 border border-blue-900 w-1/2 rounded-tr-xl rounded-br-xl"
        >
          <div class="flex justify-center items-center w-4/5 h-3/5">
            <img src="../assets/logo-new-c19.png" alt="logo-c-19" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
