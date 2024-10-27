<template>
  <nav class="fixed top-30 left-5 flex flex-col items-center bg-gray-800 p-4 rounded-2xl border border-white z-50 max-sm:invisible">
    <ul class="space-y-6">
      <li
          v-for="(section, index) in sections"
          :key="index"
          @click.prevent="scrollToSection(section.name)"
          class="relative flex justify-center w-full"
      >
        <RouterLink
            :to="section.path"
            class="flex flex-col items-center text-white hover:text-green-500 transition"
            :class="{ 'text-green-500': activeSection === section.name }"
        >
          <component :is="section.icon" class="w-6 h-6" color="#FFFFFF"/>
          <span class="tooltip font-ubuntu text-lg">{{ section.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import IconHome from "@/assets/icons/IconHome.vue";
import IconAbout from "@/assets/icons/IconAbout.vue";
import IconMonitor from "@/assets/icons/IconMonitor.vue";
import IconBook from "@/assets/icons/IconBook.vue";
import IconEmail from "@/assets/icons/IconEmail.vue";

const sections = [
  { name: 'home', label: 'Inicio', path: '/home', icon: IconHome },
  { name: 'about', label: 'Sobre mí', path: '/about', icon: IconAbout },
  { name: 'projects', label: 'Proyectos', path: '/projects', icon: IconMonitor },
  { name: 'formation', label: 'Formación', path: '/formation', icon: IconBook },
  { name: 'contact', label: 'Contacto', path: '/contact', icon: IconEmail },
];

const activeSection = ref('home');
const navBarHeight = 80;

function handleScroll() {
  const scrollPosition = window.scrollY + navBarHeight;

  if (scrollPosition < 600) {
    activeSection.value = 'home';
  } else if (scrollPosition >= 600 && scrollPosition < 1200) {
    activeSection.value = 'about';
  } else if (scrollPosition >= 1200 && scrollPosition < 1800) {
    activeSection.value = 'projects';
  } else if (scrollPosition >= 1800 && scrollPosition < 2400) {
    activeSection.value = 'formation';
  } else {
    activeSection.value = 'contact';
  }
}

function scrollToSection(sectionName) {
  const sectionElement = document.getElementById(sectionName);
  if (sectionElement) {
    const offsetPosition = sectionElement.offsetTop + navBarHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Estilo opcional si deseas un efecto de grupo para la visibilidad del tooltip */
.tooltip {
  visibility: hidden;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  left: 180%;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
}

li:hover .tooltip {
  visibility: visible;
}
</style>
