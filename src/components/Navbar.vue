<script>

import {defineComponent} from "vue";
import IconCommunity from "@/assets/icons/IconEmail.vue";
import IconSupport from "@/assets/icons/IconLinkedin.vue";
import IconLinkedin from "@/assets/icons/IconLinkedin.vue";
import IconEmail from "@/assets/icons/IconEmail.vue";
import IconGitHub from "@/assets/icons/IconGitHub.vue";

export default defineComponent({
  components: {IconGitHub, IconEmail, IconLinkedin}
})
</script>

<template>
  <nav class="w-full bg-transparent p-10 flex flex-col md:flex-row justify-around items-center">
    <div class="w-full md:w-1/2 text-center md:text-left">
      <span class="text-brand-1 text-3xl mr-5">&lt;C/&gt;</span>
      <span class="text-white text-3xl">Jair Velasquez</span>
    </div>
    <div class="w-full lg:w-2/5 flex justify-between items-center gap-5 mt-5 lg:mt-0">
      <span class="text-2xl text-brand-1 hidden md:inline">Inicio</span>
      <span class="text-xl font-bold tracking-wide hidden md:inline">||||||</span>
      <ul class="flex space-x-5 justify-center w-full md:w-auto">
        <li>
          <a href="https://www.linkedin.com/in/jair-velasquez-pizarro-ab9027271/" target="_blank" rel="noopener noreferrer" class="text-white flex gap-3 text-xl items-center">
            <IconLinkedin></IconLinkedin>
            <span class="hidden lg:inline">Linkedin</span>
          </a>
        </li>
        <li>
          <a href="mailto:jairvelazpizar@gmail.com"  target="_blank" rel="noopener noreferrer" class="text-white flex gap-3 text-xl items-center">
            <IconEmail></IconEmail>
            <span class="hidden lg:inline">Mail</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Purak189" target="_blank" rel="noopener noreferrer"  class="text-white flex gap-3 text-xl items-center">
            <IconGitHub></IconGitHub>
            <span class="hidden lg:inline">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="flex justify-center pl-16 pr-16">
    <hr class="w-full bg-transparent pb-8 border-gray-500">
  </div>
</template>

<style scoped>

</style>