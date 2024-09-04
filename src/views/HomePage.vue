<script setup>
  import NavComponent from '../components/NavComponent.vue'
</script>

<template>
  <div class="relative overflow-x-hidden">
    <NavComponent/>
    <section class="Hero 1/Left h-[825px] py-[30px] sm:py-[120px] gap-[48px] ">
        <div class="Element w-[668.05px] h-[659px] absolute top-0 right-[3%] sm:right-[-40%] md:right-[-15%] lg:right-[0%] xl:right-[10%] 2xl:right-[5%]">
          <img class="w-[659px] h-[668.05px]" src="../assets/Subtract.png">
        </div>
        <div class="Container mx-auto w-[95%] lg:w-[90%] xl:w-[80%] flex flex-col gap-[48px] relative z-10">
          <div class="Content w-full xl:w-[1200px] flex flex-col gap-[32px]">
            <h1 class="Header H1 w-[50%] sm:w-full xl:w-[1120px] font-bebaszNeue font-semibold text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76.29px] leading-[83.92px] tracking-[-4px] lg:tracking-[-6px] xl:tracking-[-8px] text-black uppercase">Sprzedajemy samochody z europy</h1>
            <p class="Paragraph w-full h-[48px] font-robotoCondensed font-normal w-[400px] text-[16px] leading-[24px] text-black">Kup komfortowy pojazd, aby każda podróż 
              <span class="block">była wyjątkowym przeżyciem.</span></p>
          </div>
          <div class="Buttons group h-[47px] flex gap-[12px] sm:gap-[24px] ">
            <button class="buttons w-[148px] h-[47px] rounded-[8px] bg-blue"><p class="CTA h-[23px] font-robotoFlex font-semibold text-[15px] leading-[22.5px] tracking-[-2%] text-center text-white">Zobacz zdjęcia</p></button>
            <button class="Buttons w-[158px] h-[47px] border-[1px]  border-blue rounded-[8px]"><p class="CTA h-[23px] font-robotoFlex font-semibold text-[15px] leading-[22.5px] tracking-[-2%] text-center text-blue">Zadzwoń do nas</p></button>
          </div>
        </div>
        <div class="Group 254 w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1450px] h-[404.37px] absolute top-[45%] right-[0%] overflow-hidden">
          <img class="Group 252 w-[1064px] h-[404.37px] absolute top-[20%] sm:top-[0%] right-[-30%] sm:right-[-25%] md:right-0" src="../assets/Hero.png" alt="hero img 3 cars">
          <div class="Rechtangle 296 w-[105px] sm:w-[95px] md:w-[105px] lg:w-[130px] xl:w-[156px] h-[85px] rounded-tl-full absolute top-[32%] sm:top-[13%] right-[6%] sm:right-[12%] md:right-[36%] lg:right-[36%] xl:right-[31%] 2xl:right-[26%] bg-blueGreen/30"></div>
        </div>
    </section>
  </div>

        
  
</template>
  