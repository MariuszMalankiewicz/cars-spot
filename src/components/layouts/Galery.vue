<script setup>
  import NavDots from '../Reuseable/NavDots/NavDots.vue'
</script>

<template>
    <section class="mx-[1%] my-[20px] sm:mx-0 sm:my-[80px] flex flex-col items-center gap-[48px]">
        <div class="w-[95%] md:w-[90%] flex flex-wrap sm:flex-nowrap gap-[64px]">
            <img class="w-full h-auto object-cover max-w-[600px] max-h-[446px]" src="../../assets/imgs/Images.png" alt="beautiful red car">
            <img class="w-full h-full object-cover max-w-[600px] max-h-[446px]" src="../../assets/imgs/Images (1).png" alt="beautiful black car">
            <img class="w-full h-full object-cover max-w-[600px] max-h-[446px]" src="../../assets/imgs/Images (2).png" alt="beautiful black car, that close-up of the front lights">
        </div>
        <NavDots/>
    </section>
</template>