<script setup>
import PrimaryButton from '../Reuseable/Buttons/PrimaryButton.vue'
import SecondaryButton from '../Reuseable/Buttons/SecondaryButton.vue'
</script>

<template>
    <section class="mt-24 sm:mt-0 h-[650px] sm:h-[825px] py-[30px] sm:py-[120px] gap-[48px] relative">
        <div class="w-[668.05px] h-[659px] hidden md:block sm:absolute top-[-170px] sm:top-[-80px] right-[3%] sm:right-[-40%] md:right-[-15%] lg:right-[0%] xl:right-[10%] 2xl:right-[5%]">
          <img class="w-[659px] h-[668.05px]" src="../../assets/imgs/Subtract.png">
        </div>
        <div class="mx-auto w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col gap-[48px] relative z-1">
          <div class="flex flex-col gap-[32px]">
            <h1 class="max-w-[940px] md:w-[750px] lg:w-full font-bebaszNeue font-semibold text-[45px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76.29px] leading-[55px] sm:leading-[83.92px] tracking-[-4px] lg:tracking-[-6px] xl:tracking-[-8px] text-dark uppercase">Sprzedajemy samochody <span class="block">z europy</span></h1>
            <p class="h-[48px] font-robotoCondensed font-normal text-[16px] leading-[24px] text-dark">Kup komfortowy pojazd, aby każda podróż 
              <span class="block">była wyjątkowym przeżyciem.</span></p>
          </div>
          <div class="h-[47px] flex gap-[12px] sm:gap-[24px]">
            <PrimaryButton><a href="#headers" class="text-[13.8px]">Zobacz zdjęcia</a></PrimaryButton>
            <SecondaryButton class="text-[13.8px]">Zadzwoń do nas</SecondaryButton>
          </div>
        </div>
        <div class="w-full sm:w-[700px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1050px] h-[404.37px] absolute top-[45%] right-[0%] overflow-hidden">
          <img class="min-w-[300px] w-[90%] min-h-[150px] h-auto sm:w-full absolute top-[30%] sm:top-[25%] md:top-[22%] lg:top-[0%] right-[0%] sm:right-[-25%] md:right-[-10%] 2xl:right-[0%]" src="../../assets/imgs/Hero.png" alt="hero img 3 cars">
          <div class="w-[70px] sm:w-[110px] md:w-[105px] lg:w-[130px] xl:w-[156px] h-[40px] lg:h-[80px] sm:h-[60px] rounded-tl-full absolute top-[35%] sm:top-[33%] md:top-[30%] lg:top-[10%] xl:top-[12%] right-[33%] sm:right-[10%] md:right-[26%] xl:right-[24%] 2xl:right-[35%] bg-[#1F4D60]/30"></div>
        </div>
    </section>
</template>