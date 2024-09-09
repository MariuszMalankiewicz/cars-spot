<script setup>
import PrimaryButton from '../Reuseable/Buttons/PrimaryButton.vue'
import SecondaryButton from '../Reuseable/Buttons/SecondaryButton.vue'
</script>

<template>
    <section class="mt-24 sm:mt-0 h-[825px] py-[30px] sm:py-[120px] gap-[48px] relative">
        <div class="w-[668.05px] h-[659px] absolute top-[-170px] sm:top-[-80px] right-[3%] sm:right-[-40%] md:right-[-15%] lg:right-[0%] xl:right-[10%] 2xl:right-[5%]">
          <img class="w-[659px] h-[668.05px]" src="../../assets/imgs/Subtract.png">
        </div>
        <div class="mx-auto w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col gap-[48px] relative z-1">
          <div class="flex flex-col gap-[32px]">
            <h1 class="max-w-[940px] font-bebaszNeue font-semibold text-[45px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76.29px] leading-[83.92px] tracking-[-4px] lg:tracking-[-6px] xl:tracking-[-8px] text-dark uppercase">Sprzedajemy samochody z europy</h1>
            <p class="h-[48px] font-robotoCondensed font-normal text-[16px] leading-[24px] text-dark">Kup komfortowy pojazd, aby każda podróż 
              <span class="block">była wyjątkowym przeżyciem.</span></p>
          </div>
          <div class="h-[47px] flex gap-[12px] sm:gap-[24px]">
            <PrimaryButton ><a href="#headers">Zobacz zdjęcia</a></PrimaryButton>
            <SecondaryButton>Zadzwoń do nas</SecondaryButton>
          </div>
        </div>
        <div class="w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1450px] h-[404.37px] absolute top-[45%] right-[0%] overflow-hidden">
          <img class="w-[1064px] h-[404.37px] absolute top-[0%] sm:top-[0%] right-[-30%] sm:right-[-25%] md:right-0" src="../../assets/imgs/Hero.png" alt="hero img 3 cars">
          <div class="w-[105px] sm:w-[95px] md:w-[105px] lg:w-[130px] xl:w-[156px] h-[85px] rounded-tl-full absolute top-[13%] right-[6%] sm:right-[12%] md:right-[36%] xl:right-[31%] 2xl:right-[26%] bg-[#1F4D60]/30"></div>
        </div>
    </section>
</template>