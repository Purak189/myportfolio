<script setup>

import IconEmail from "@/assets/icons/IconEmail.vue";
import IconMapPin from "@/assets/icons/IconMapPin.vue";
import IconBriefcase from "@/assets/icons/IconBriefcase.vue";
import IconLink from "@/assets/icons/IconLink.vue";
import IconDownload from "@/assets/icons/IconDownload.vue";
</script>

<template>
  <section id="home" class="h-screen bg-transparent flex items-center justify-center pl-32 pr-32 pb-32 pt-16">
    <div class="w-full h-full">
      <div class="w-full h-full pr-8 pl-8 flex items-center justify-between">
        <div class="h-full bg-amber-100 w-1/3 flex justify-end items-center">
          <div class="relative h-4/5 w-2/3">
            <div class="absolute top-[-4px] left-[-4px] h-full w-full border-8 border-brand-1 rounded-tl-[9rem] rounded-br-[9rem]"></div>
            <div class="relative h-full w-full bg-blue-300 border-white border-8 rounded-tl-[9rem] rounded-br-[9rem] flex flex-col items-center pt-8 pb-8 pl-4 pr-4 md:pt-16 md:pb-16 md:pl-6 md:pr-6 justify-center gap-4 md:gap-8">
              <div class="flex flex-col items-center">
                <img src="../assets/img/ProfilePhoto.png" alt="Foto de perfil" class="w-12 h-12 md:w-28 md:h-28">
                <h2 class="text-xl md:text-3xl font-medium">Jair Velasquez</h2>
                <p class="text-sm md:text-base">Ingenierio de Software</p>
              </div>
              <div>
                <ul class="flex flex-col gap-2 md:gap-3">
                  <li class="text-white flex gap-2 md:gap-3 items-center"><IconEmail class="w-4 h-4 md:w-6 md:h-6"></IconEmail> jairvelazpizar@gmail.com</li>
                  <li class="text-white flex gap-2 md:gap-3 items-center"><IconMapPin class="w-4 h-4 md:w-6 md:h-6"></IconMapPin> Lima, Peru</li>
                  <li class="text-white flex gap-2 md:gap-3 items-center"><IconBriefcase class="w-4 h-4 md:w-6 md:h-6"></IconBriefcase> Part-time / Freelancer</li>
                  <li class="text-white flex gap-2 md:gap-3 items-center"><IconLink class="w-4 h-4 md:w-6 md:h-6"></IconLink> www.jairvelasquez.com</li>
                </ul>
              </div>
              <div>
                <button class="font-ubuntu flex gap-2 md:gap-3 items-center text-sm md:text-xl bg-white p-2 md:p-2 rounded-3xl mr-4 md:mr-8">
                  Descargar CV <IconDownload class="w-4 h-4 md:w-6 md:h-6"></IconDownload>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full bg-red-300 w-2/3">
          <div class="flex flex-col items-center justify-center min-h-screen bg-transparent">
            <span class="text-teal-400 text-sm md:text-base lg:text-lg">&lt;h1&gt;</span>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Hey
            </h1>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Soy
              <span class="text-teal-400">Jair</span>,
            </h1>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Desarrollador Backend
            </h1>

            <!-- Etiqueta de cierre </h1> -->
            <span class="text-teal-400 text-sm md:text-base lg:text-lg">&lt;/h1&gt;</span>

            <div class="mt-5">
              <a
                  href="mailto:tucorreo@example.com"
                  class="text-teal-400 text-lg sm:text-xl flex items-center space-x-2"
              >
                <span>Contáctame!</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12H8m0 0l4 4m-4-4l4-4m-4 4h8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>