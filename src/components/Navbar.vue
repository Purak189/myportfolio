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
  <nav class="w-full bg-transparent p-10 flex justify-around items-center">
      <div class="w-1/2">
        <span class="text-brand-1 text-3xl mr-5">&lt;C/&gt;</span>
        <span class="text-white  text-3xl">Jair Velasquez</span>
      </div>
      <div class="w-2/5 flex justify-between items-center">
        <span class="text-2xl text-brand-1">Inicio</span>
        <span class=" text-xl font-bold tracking-wide">||||||</span>
        <ul class="flex space-x-5">
          <li><a href="" class="text-white flex gap-3 text-xl items-center"><IconLinkedin></IconLinkedin>Linkedin</a></li>
          <li><a href="" class="text-white flex gap-3 text-xl items-center"><IconEmail></IconEmail> Mail</a></li>
          <li><a href="" class="text-white flex gap-3 text-xl items-center"><IconGitHub></IconGitHub> GitHub</a></li>
        </ul>
      </div>
  </nav>
  <div class="flex justify-center pl-16 pr-16">
    <hr class="w-full bg-transparent pb-8 border-gray-500">
  </div>
</template>

<style scoped>

</style>