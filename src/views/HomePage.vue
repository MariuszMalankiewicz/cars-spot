<script setup>
  import TopNav from '/src/components/organisms/TopNav.vue'
  import Hero from '/src/components/organisms/Hero.vue'
  import Galery from '/src/components/organisms/Galery.vue'
  import Seo from '/src/components/organisms/Seo.vue'
  import Footer from '/src/components/organisms/Footer.vue'
</script>

<template>
  <div>
    <main class="overflow-hidden bg-light max-w-[1920px] mx-auto">
      <TopNav/>
      <Hero/>
      <Galery/>
      <Seo/>
      <Footer/>
    </main>
  </div>
</template>
  