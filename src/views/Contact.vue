<script setup>

import IconMouse from "@/assets/icons/IconMouse.vue";
import IconLine from "@/assets/icons/IconLine.vue";
import IconSend from "@/assets/icons/IconSend.vue";

let formData = {
  name: "",
  email: "",
  message: "",
};

const submitForm = () => {
  console.log(formData);
};
</script>

<template>

  <section id="contact" class="relative min-h-screen md:min-h-[75vh] lg:min-h-fit py-20 px-20 bg-background-2 text-gray-800 max-sm:pb-5">
    <div class="flex justify-center">
      <icon-mouse></icon-mouse>
    </div>
    <div class="flex flex-col items-center justify-center py-8">
      <h1 class="text-6xl text-brand-1 pb-1">Contacto</h1>
      <IconLine></IconLine>
      <p class="text-white mt-5 text-lg">¿Proyecto en Mente? No dudes en contactarme.</p>
      <div class="w-fit py-4 px-6 bg-transparent text-brand-1 font-ubuntu text-4xl border-4 border-brand-1 rounded-tl-3xl rounded-br-3xl mt-10">
        Enviame un mensaje
      </div>
    </div>

    <div class="max-w-3xl mx-auto p-6  my-6">
      <form @submit.prevent="submitForm">
        <!-- Nombre y Correo -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-20 mb-6">
          <!-- Campo Nombre -->
          <div>
            <label for="name" class="block text-teal-400 mb-2">Nombre</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Ingresa tu nombre"
                class="w-full p-2 bg-transparent border-b-2 border-teal-500 focus:outline-none focus:border-teal-300 text-white"
                required
            />
          </div>

          <!-- Campo Correo -->
          <div>
            <label for="email" class="block text-teal-400 mb-2">Correo</label>
            <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Ingresa tu correo"
                class="w-full p-2 bg-transparent border-b-2 border-teal-500 focus:outline-none focus:border-teal-300 text-white"
                required
            />
          </div>
        </div>

        <!-- Campo Mensaje -->
        <div class="mb-6">
          <label for="message" class="block text-teal-400 mb-2">Mensaje</label>
          <textarea
              id="message"
              v-model="formData.message"
              placeholder="Ingresa tu mensaje"
              rows="4"
              class="w-full p-2 bg-transparent border-b-2 border-teal-500 focus:outline-none focus:border-teal-300 text-white"
              required
          ></textarea>
        </div>

        <!-- Botón Enviar -->
        <div class="text-center">
          <button
              type="submit"
              class="bg-teal-400 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-teal-300 transition duration-300 ease-in-out inline-flex items-center"
          >
            Enviar
            <IconSend></IconSend>
          </button>
        </div>
      </form>
    </div>

  </section>

</template>

<style scoped>

</style>