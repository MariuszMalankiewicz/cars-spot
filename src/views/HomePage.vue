<script setup>
  import MainNav from '../components/Reuseable/MainNav.vue'
  import Hero from '../components/layouts/Hero.vue'
  import Headers from '../components/layouts/Headers.vue'
  import Slider from '../components/Reuseable/Slider.vue'
  import Seo from '../components/layouts/SEO/Seo.vue'
  import Footer from '../components/layouts/Footer.vue'
</script>

<template>
  <div>
    <main class="overflow-hidden bg-light max-w-[1920px] mx-auto">
      <MainNav/>
      <Hero/>
      <Headers/>
      <Slider/>
      <Seo/>
      <Footer/>
    </main>
  </div>
</template>
  