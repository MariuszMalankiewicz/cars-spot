<script setup>
  import NavDots from '../Reuseable/NavDots.vue'
</script>

<template>
    <!-- Gallery block -->
    <section class="h-[678px] p-[80px] flex flex-col items-center gap-[48px] bg-white">
        <div class="h[446px] flex gap-[64px]">
            <img class="w-[600px] h-[446px]" src="../../assets/Images.png" alt="beautiful red car">
            <img class="w-[600px] h-[446px]" src="../../assets/Images (1).png" alt="beautiful black car">
            <img class="w-[600px] h-[446px]" src="../../assets/Images (2).png" alt="beautiful black car, that close-up of the front lights">
        </div>
        <NavDots/>
    </section>
</template>