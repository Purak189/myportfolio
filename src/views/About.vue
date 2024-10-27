<script setup>

import IconMouse from "@/assets/icons/IconMouse.vue";
</script>

<template>
  <section id="about" class="min-h-screen md:min-h-[75vh] lg:min-h-[100vh]  py-20 px-20 bg-background-2 text-gray-800 bg-about-bg bg-cover bg-center max-sm:px-0 w-full max-lg:py-5">
    <div class=" flex justify-center">
      <icon-mouse></icon-mouse>
    </div>
    <div class=" h-full flex mt-10 max-lg:flex-col">
      <div class="w-2/3 max-lg:w-full max-sm:px-5">
        <div class="w-fit py-4 px-6 bg-background text-white font-ubuntu text-5xl border-4 border-brand-1 rounded-tl-3xl rounded-br-3xl">
          Sobre mí
        </div>
        <div class="mt-10 p-10 bg-background gap-5 flex flex-col rounded-3xl">
          <span class="text-teal-400 text-sm md:text-base lg:text-lg">&lt;p&gt;</span>
          <p class="font-ibmPlexMono text-lg text-justify text-white 2xl:text-lg max-2xl:text-sm">
            Soy
            <span class="text-brand-1">desarrollador backend</span>,
            con experiencia en la creación de soluciones escalables y eficientes para resolver problemas complejos. Mi stack principal incluye
            <span class="text-brand-1">Spring Boot</span>,
            <span class="text-brand-1">JWT</span>,
            <span class="text-brand-1">MySQL</span>,
            <span class="text-brand-1">Docker</span> y
            <span class="text-brand-1">Vue.js</span> en el frontend.<br><br>
            He trabajado en múltiples proyectos, tanto de forma individual como en colaboraciones en equipo. He desarrollado APIs, implementado bases de datos y desplegado soluciones con Docker. Además, mi conocimiento abarca metodologías ágiles como
            <span class="text-brand-1">Scrum</span>, diseño de arquitecturas backend robustas y control de versiones con
            <span class="text-brand-1">Git</span>.<br><br>
            Complementando mi formación técnica, poseo certificaciones en
            <span class="text-brand-1">UX/UI Design</span> y
            <span class="text-brand-1">Scrum Fundamentals</span>, lo que me permite abordar proyectos con una visión integral. Me apasiona aprender continuamente y aplicar nuevas tecnologías para optimizar el desarrollo de software.
          </p>
          <span class="text-teal-400 text-sm md:text-base lg:text-lg">&lt;/p&gt;</span>
        </div>
      </div>
      <div class="w-1/3 p-10 flex justify-center items-center max-lg:w-full max-sm:p-0 max-sm:py-10 max-sm:w-full">
        <div class="w-fit h-fit bg-background p-16 rounded-3xl flex flex-col gap-12 text-white max-sm:w-full max-sm:flex-row max-sm:p-6 max-sm:justify-around max-sm:rounded">
          <div>
            <span class="text-brand-1 text-6xl max-sm:text-4xl">+17</span> Promedio
          </div>
          <div>
            <span class="text-brand-1 text-6xl max-sm:text-4xl">+8</span> Proyectos
          </div>
          <div>
            <span class="text-brand-1 text-6xl max-sm:text-4xl">6to</span> Ciclo
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
  background-color: rgba(0, 0, 0, 0.50); /* Adjust the opacity as needed */
  z-index: -1;
}
</style>