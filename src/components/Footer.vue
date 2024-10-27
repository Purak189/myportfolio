<script setup>
import IconLinkedin from "@/assets/icons/IconLinkedin.vue";
import IconGitHub from "@/assets/icons/IconGitHub.vue";

</script>

<template>

  <footer class="bg-background-2 text-gray-400 py-4 border-t-2 border-grey shadow-2xl ">
    <div class="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
      <!-- Texto de derechos reservados -->
      <div class="mb-4 sm:mb-0">
        © 2024 Jair Velasquez. Sólo unos pocos derechos reservados.
      </div>

      <!-- Título o descripción -->
      <div class="mb-4 sm:mb-0 text-gray-300">
        Ingeniero de Software
      </div>

      <!-- Íconos de redes sociales -->
      <div class="flex space-x-4">
        <!-- LinkedIn -->
        <a
            href="https://www.linkedin.com/"
            class="text-teal-400 hover:text-teal-300 transition duration-300"
            aria-label="LinkedIn"
        >
          <IconLinkedin></IconLinkedin>
        </a>

        <!-- GitHub -->
        <a
            href="https://github.com/"
            class="text-teal-400 hover:text-teal-300 transition duration-300"
            aria-label="GitHub"
        >
          <IconGitHub></IconGitHub>
        </a>
      </div>
    </div>
  </footer>

</template>

<style scoped>

</style>