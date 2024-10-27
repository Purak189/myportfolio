<script setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css'

import IconMouse from "@/assets/icons/IconMouse.vue";
import IconLine from "@/assets/icons/IconLine.vue";
import IconGitHub from "@/assets/icons/IconGitHub.vue";
import IconMousePointer from "@/assets/icons/IconMousePointer.vue";
import IconLink from "@/assets/icons/IconLink.vue";
import IconVue from "@/assets/icons/technologiesIcons/IconVue.vue";
import IconTailwind from "@/assets/icons/technologiesIcons/IconTailwind.vue";
import IconMySql from "@/assets/icons/technologiesIcons/IconMySql.vue";
import IconNetCore from "@/assets/icons/technologiesIcons/IconNetCore.vue";
import IconJWT from "@/assets/icons/technologiesIcons/IconJWT.vue";
import IconSpringBoot from "@/assets/icons/technologiesIcons/IconSpringBoot.vue";
import IconAngular from "@/assets/icons/technologiesIcons/IconAngular.vue";
import IconPython from "@/assets/icons/technologiesIcons/IconPython.vue";

const imgProject1 = [
  new URL('@/assets/Project1Carousel/img1.png', import.meta.url).href,
  new URL('@/assets/Project1Carousel/img2.png', import.meta.url).href,
  new URL('@/assets/Project1Carousel/img3.png', import.meta.url).href,
  new URL('@/assets/Project1Carousel/img4.png', import.meta.url).href,
  new URL('@/assets/Project1Carousel/img5.png', import.meta.url).href,
  new URL('@/assets/Project1Carousel/img6.png', import.meta.url).href
];

const imgProject2 = [
  new URL('@/assets/Project2Carousel/img1.png', import.meta.url).href,
  new URL('@/assets/Project2Carousel/img2.png', import.meta.url).href,
  new URL('@/assets/Project2Carousel/img3.png', import.meta.url).href,
  new URL('@/assets/Project2Carousel/img4.png', import.meta.url).href,
  new URL('@/assets/Project2Carousel/img5.png', import.meta.url).href
];

const imgProject3 = [
  new URL('@/assets/Project3Carousel/img1.jpeg', import.meta.url).href,
  new URL('@/assets/Project3Carousel/img2.jpeg', import.meta.url).href,
  new URL('@/assets/Project3Carousel/img3.jpeg', import.meta.url).href
];

</script>

<template>

  <section id="projects" class="min-h-screen md:min-h-[75vh] lg:min-h-fit py-20 px-20 bg-background-2 text-gray-800 bg-projects-bg bg-repeat bg-[size:350px] max-lg:px-5 max-sm:px-0 max-lg:py-5">
    <div class="flex justify-center">
      <icon-mouse></icon-mouse>
    </div>
    <div class="flex flex-col items-center justify-center py-8">
      <h1 class="text-6xl text-brand-1 pb-1 max-sm:text-5xl">Proyectos</h1>
      <IconLine></IconLine>
    </div>
    <div class="max-sm:w-full max-sm:px-2">
      <div class="flex flex-col lg:flex-row items-center p-8 bg-background border border-brand-1 rounded-xl shadow-lg mx-auto my-6 w-3/4 max-lg:w-4/5 max-sm:px-4 max-sm:w-full">
        <!-- Imagen del proyecto -->
        <div class="w-full lg:w-2/5 p-4 max-sm:p-0">
          <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="(image, index) in imgProject1" :key="index">
              <img :src="image" alt="Project Image" class="rounded-md "/>
            </Slide>
          </Carousel>
        </div>

        <!-- Información del proyecto -->
        <div class="w-full lg:w-3/5 p-4 text-white flex flex-col gap-5 max-sm:p-2">
          <!-- Título del proyecto -->
          <div class="flex justify-between items-center">
            <h2 class="text-2xl text-brand-1 leading-relaxed flex items-center underline">
              Webmaster
              <IconMousePointer class="w-5 mt-6 ml-2"></IconMousePointer>
            </h2>
            <!-- Enlaces a GitHub y Live Demo -->
            <div class="flex space-x-4 mt-4 mr-3">
              <a href="https://github.com" target="_blank" class="text-teal-400 hover:text-teal-300">
                <IconGitHub color="#FFFFFF" width="25" height="25" ></IconGitHub>
              </a>
              <a href="https://webmaster.com" target="_blank" class="text-teal-400 hover:text-teal-300">
                <IconLink color="#FFFFFF" width="25" height="25"></IconLink>
              </a>
            </div>
          </div>

          <!-- Descripción -->
          <p class="mt-2 text-lg lg:text-base max-sm:text-sm text-justify">
            Web Master es una plataforma web intuitiva y fácil de usar que conecta a las empresas con desarrolladores freelance. Esta aplicación permite a las empresas publicar sus proyectos de software, mientras que los desarrolladores pueden postularse para colaborar en ellos. Construida con tecnologías como Vue, PrimeVue, Tailwind, .NET Core y MySQL.
          </p>

          <!-- Tecnologías usadas -->
          <div class="flex flex-wrap mt-4 space-x-2 max-sm:space-x-1">
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center"><IconVue></IconVue> Vue.js</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center"><IconTailwind></IconTailwind> Tailwind</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center"><IconMySql></IconMySql> MySQL</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center max-sm:my-2"><IconNetCore></IconNetCore> .NET Core</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center max-lg:my-2"><IconJWT></IconJWT> JSON Web Token</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center p-8 bg-background border border-brand-1 rounded-xl shadow-lg mx-auto my-6 w-3/4 max-lg:w-4/5 max-sm:px-4 max-sm:w-full">
        <!-- Imagen del proyecto -->
        <div class="w-full lg:w-2/5 p-4 max-sm:p-0">
          <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="(image, index) in imgProject2" :key="index">
              <img :src="image" alt="Project Image" class="rounded-md" />
            </Slide>
          </Carousel>
        </div>

        <!-- Información del proyecto -->
        <div class="w-full lg:w-3/5 p-4 text-white flex flex-col gap-5 max-sm:p-2">
          <!-- Título del proyecto -->
          <div class="flex justify-between items-center">
            <h2 class="text-2xl text-brand-1 leading-relaxed flex items-center underline">
              FromZero
              <IconMousePointer class="w-5 mt-6 ml-2"></IconMousePointer>
            </h2>
            <!-- Enlaces a GitHub y Live Demo -->
            <div class="flex space-x-4 mt-4 mr-3">
              <a href="https://github.com" target="_blank" class="text-teal-400 hover:text-teal-300">
                <IconGitHub color="#FFFFFF" width="25" height="25"></IconGitHub>
              </a>
              <a href="https://webmaster.com" target="_blank" class="text-teal-400 hover:text-teal-300">
                <IconLink color="#FFFFFF" width="25" height="25"></IconLink>
              </a>
            </div>
          </div>

          <!-- Descripción -->
          <p class="mt-2 text-lg lg:text-base max-sm:text-sm text-justify">
            From Zero es una plataforma web intuitiva y fácil de usar que conecta a las empresas con desarrolladores freelance. Esta aplicación permite a las empresas publicar sus proyectos de software, mientras que los desarrolladores pueden postularse para colaborar en ellos. Construida con tecnologías como Angular, Angular Material, Tailwind, Spring Boot y MySQL.
          </p>

          <!-- Tecnologías usadas -->
          <div class="flex flex-wrap mt-4 space-x-2 max-sm:space-x-1">
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center"><IconAngular></IconAngular> Angular</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center"><IconTailwind></IconTailwind> Tailwind</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center max-sm:my-2"><IconMySql></IconMySql> MySQL</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center max-lg:my-2"><IconSpringBoot></IconSpringBoot> Spring Boot</span>
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center max-lg:my-2"><IconJWT></IconJWT> JSON Web Token</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center p-8 bg-background border border-brand-1 rounded-xl shadow-lg mx-auto my-6 w-3/4 max-lg:w-4/5 max-sm:px-4 max-sm:w-full">
        <!-- Imagen del proyecto -->
        <div class="w-full lg:w-2/5 p-4 max-sm:p-0">
          <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="(image, index) in imgProject3" :key="index">
              <img :src="image" alt="Project Image" class="rounded-md" />
            </Slide>
          </Carousel>
        </div>

        <!-- Información del proyecto -->
        <div class="w-full lg:w-3/5 p-4 text-white flex flex-col gap-5 max-sm:p-2">
          <!-- Título del proyecto -->
          <div class="flex justify-between items-center">
            <h2 class="text-2xl text-brand-1 leading-relaxed flex items-center underline">
              WhaleWay
              <IconMousePointer class="w-5 mt-6 ml-2"></IconMousePointer>
            </h2>
            <!-- Enlaces a GitHub y Live Demo -->
            <div class="flex space-x-4 mt-4 mr-3">
              <a href="https://github.com" target="_blank" class="text-teal-400 hover:text-teal-300">
                <IconGitHub color="#FFFFFF" width="25" height="25"></IconGitHub>
              </a>
              <a href="https://webmaster.com" target="_blank" class="text-teal-400 hover:text-teal-300">
                <IconLink color="#FFFFFF" width="25" height="25"></IconLink>
              </a>
            </div>
          </div>

          <!-- Descripción -->
          <p class="mt-2 text-lg lg:text-base max-sm:text-sm text-justify">
            WhaleWay es una aplicación de escritorio diseñada para ayudar a las empresas a trazar rutas eficientes para la entrega de pedidos. Utilizando el algoritmo de Dijkstra, esta herramienta optimiza el recorrido de las entregas, asegurando un uso más efectivo del tiempo y los recursos. La interfaz de usuario se desarrolla con Tkinter. Además, se implementa osmnx para mapear y construir los nodos de un distrito de Lima, Perú, lo que facilita una planificación precisa y efectiva de las rutas.
          </p>

          <!-- Tecnologías usadas -->
          <div class="flex flex-wrap mt-4 space-x-2">
            <span class="px-3 py-1 bg-transparent border-brand-1 border-2 text-sm rounded-full flex gap-3 items-center"><IconPython></IconPython> Python</span>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
#about {
  position: relative;
  z-index: 1;
}
#about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: -1;
}
</style>