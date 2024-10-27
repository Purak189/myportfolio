<script setup>

import IconMouse from "@/assets/icons/IconMouse.vue";
import IconLine from "@/assets/icons/IconLine.vue";
</script>

<template>

  <section id="formation" class="relative min-h-screen md:min-h-[75vh] lg:min-h-fit py-20 px-20 bg-background text-gray-800 mb-5 max-sm:pb-5 max-sm:px-2 max-lg:pb-5 max-sm:min-h-fit">
    <div class="flex justify-center">
      <icon-mouse></icon-mouse>
    </div>
    <div class="flex flex-col items-center justify-center py-8 ">
      <h1 class="text-6xl text-brand-1 pb-1 max-sm:text-5xl">Formación</h1>
      <IconLine></IconLine>
    </div>
    <div class="max-w-4xl mx-auto p-6 bg-transparent rounded-lg shadow-lg border border-brand-3 border-dashed my-4 max-lg:px-2 max-sm:pb-0">
      <!-- Primera tarjeta: Universidad -->
      <div class="flex justify-between items-center bg-transparent p-4 rounded-md border-2 border-grey-2 mb-4">
        <div class="max-lg:w-4/5 flex flex-col gap-2">
          <h3 class="text-lg font-bold text-white max-sm:text-sm">
          <span class="inline-flex items-center">
            <img src="../assets/img/upclogo.png" alt="UPC Logo" class="mr-2 w-6 h-6" />
            Universidad Peruana de Ciencias Aplicadas (UPC)
          </span>
          </h3>
          <p class="text-sm text-gray-300">Ingeniería de Software - 6to ciclo</p>
        </div>
        <div class="text-gray-400 text-sm max-lg:w-1/5">2021 - Actualidad</div>
      </div>

      <!-- Segunda tarjeta: Certificación -->
      <div class="flex justify-between items-center bg-zinc-800 p-4 rounded-md mb-4">
        <div class="max-lg:w-4/5">
          <h3 class="text-lg font-bold text-white">
          <span class="inline-flex items-center">
            <img src="../assets/img/codigofacilitologo.png" alt="Facilito Logo" class="mr-2 w-6 h-6" />
            Código Facilito
          </span>
          </h3>
          <p class="text-sm text-gray-300">Azure Identity Management - Bootcamp Azure AZ-204</p>
        </div>
        <div class="text-gray-400 text-sm max-lg:w-1/5">2024 - Actualidad</div>
      </div>

      <!-- Tercera tarjeta: Certificación Scrum -->
      <div class="flex justify-between items-center bg-transparent p-4 rounded-md border-2 border-grey-2">
        <div class="max-lg:w-4/5">
          <h3 class="text-lg font-bold text-white">
          <span class="inline-flex items-center">
            <img src="../assets/img/scrumstudylogo.png" alt="SCRUM Logo" class="mr-2 w-6 h-6" />
            SCRUMstudy
          </span>
          </h3>
          <p class="text-sm text-gray-300">Scrum Fundamentals Certified</p>
        </div>
        <div class="text-gray-400 text-sm max-lg:w-1/5">2023</div>
      </div>
    </div>
  </section>

</template>

<style scoped>

#formation {
  background-color: rgba(41, 47, 54, 0.9); /* Adjust the opacity as needed */
}

#formation::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/background-code.png'); /* Adjust the path as needed */
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Adjust the opacity as needed */
  z-index: -1;
}

</style>