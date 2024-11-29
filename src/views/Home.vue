<script setup>
import { ref } from 'vue';
import IconEmail from "@/assets/icons/IconEmail.vue";
import IconMapPin from "@/assets/icons/IconMapPin.vue";
import IconBriefcase from "@/assets/icons/IconBriefcase.vue";
import IconLink from "@/assets/icons/IconLink.vue";
import IconDownload from "@/assets/icons/IconDownload.vue";

const message = ref('');

function scrollToSection(sectionName) {
  const sectionElement = document.getElementById(sectionName);
  if (sectionElement) {
    const offsetPosition = sectionElement.offsetTop;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

const redirectToCV = () => {
  window.open('./src/assets/Jair-Velasquez-Pizarro-FlowCV-Resume-20241129.pdf', '_blank');
};

function copyLink() {
  navigator.clipboard.writeText('jairvelazpizar@gmail.com').then(() => {
    message.value = 'Correo copiado';
    setTimeout(() => {
      message.value = '';
    }, 2000);
  });
}
</script>

<template>
  <section id="home" class="h-screen bg-transparent flex items-center justify-center pl-32 pr-32 pb-32 pt-16 max-sm:px-2 max-sm:py-4 max-lg:h-fit max-lg:pb-10">
    <div class="w-full h-full max-lg:h-fit">
      <div class="w-full h-full pr-8 pl-8 flex items-center justify-between gap-20 max-lg:flex-col max-sm:gap-5">
        <div class="h-full w-1/3 flex justify-end items-center max-lg:w-full">
          <div class="relative h-4/5 2xl:w-2/3 xl:w-full max-lg:w-full max-lg:h-full max-sm:h-full">
            <div class="absolute top-[-4px] left-[-4px] h-full w-full border-4 border-brand-1 rounded-tl-[9rem] rounded-br-[9rem]"></div>
            <div class="relative h-full w-full border-white border-4 rounded-tl-[9rem] rounded-br-[9rem] flex flex-col items-center pt-8 pb-8 pl-4 pr-4 md:pt-16 md:pb-16 md:pl-6 md:pr-6 justify-center gap-4 md:gap-8 ">
              <div class="flex flex-col items-center">
                <img src="../assets/img/ProfilePhoto.png" alt="Foto de perfil" class="w-12 h-12 md:w-28 md:h-28 mb-5 max-sm:w-24 max-sm:h-24">
                <h2 class="text-xl md:text-3xl font-medium text-white">Jair Velasquez</h2>
                <p class="text-sm md:text-base text-white">Desarrollador de Software</p>
              </div>
              <div>
                <ul class="flex flex-col gap-2 md:gap-3 max-sm:gap-3 ">
                  <li class="text-white flex gap-2 md:gap-3 items-center" @click="copyLink">
                    <IconEmail class="w-4 h-4 md:w-6 md:h-6"></IconEmail> jairvelazpizar@gmail.com</li>
                  <li class="text-white flex gap-2 md:gap-3 items-center"><IconMapPin class="w-4 h-4 md:w-6 md:h-6"></IconMapPin> Lima, Peru</li>
                  <li class="text-white flex gap-2 md:gap-3 items-center"><IconBriefcase class="w-4 h-4 md:w-6 md:h-6"></IconBriefcase> Part-time / Freelancer</li>
                  <li class="text-white flex gap-2 md:gap-3 items-center cursor-pointer">
                    <IconLink class="w-4 h-4 md:w-6 md:h-6 cursor-pointer"></IconLink> jairvelasquez.netlify.app
                  </li>
                </ul>
                <p v-if="message" class="text-teal-400 mt-2">{{ message }}</p>
              </div>
              <div>
                <button class="font-ubuntu flex gap-2 md:gap-3 items-center text-sm md:text-xl bg-white p-2 md:p-2 rounded-3xl mr-4 md:mr-8"
                @click="redirectToCV">
                  Descargar CV <IconDownload class="w-4 h-4 md:w-6 md:h-6"></IconDownload>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full  w-2/3 flex justify-center items-center max-lg:h-80">
          <div class="flex flex-col items-start justify-center min-h-screen bg-transparent h-full">
            <span class="text-teal-400 text-sm md:text-base lg:text-lg">&lt;h1&gt;</span>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Hey
            </h1>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Soy
              <span class="text-teal-400">Jair</span>,
            </h1>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Desarrollador Backend <span class="text-teal-400 text-sm md:text-base lg:text-lg">&lt;/h1&gt;</span>
            </h1>

            <!-- Etiqueta de cierre </h1> -->

            <div class="mt-5">
              <button
                  @click="scrollToSection('contact')"
                  class="text-teal-400 text-lg sm:text-xl flex items-center space-x-2 hover:bg-brand-1 hover:text-white p-2 rounded-3xl transition"
              >
                <span class="text-3xl">Contáctame!</span>
                <icon-email  color="#FFFFFF"></icon-email>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>


</style>