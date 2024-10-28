<script setup>

import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Formation from "@/views/Formation.vue";
import Contact from "@/views/Contact.vue";
import NavigationProgress from "@/components/NavigationProgress.vue";
import Footer from "@/components/Footer.vue";
import NavMenu from "@/components/NavMenu.vue";
</script>

<template>

  <nav>
    <Navbar/>
  </nav>

  <main class="relative">
    <NavMenu/>
    <NavigationProgress></NavigationProgress>
    <Home/>
    <About/>
    <Projects/>
    <Formation/>
    <Contact/>
  </main>
  <pv-toast></pv-toast>

  <footer>
    <Footer/>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
