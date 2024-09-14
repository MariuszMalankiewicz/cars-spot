<script setup>
import ArrowDown from '/src/assets/imgs/arrow-down.png'
</script>

<template>
    <div class="w-[95%] sm:w-[576px] h-[185px] flex flex-col gap-[36px] sm:gap-[16px]">
        <h3 class="h-[76px] font-bebaszNeue font-normal text-[25px] leading-[25px] tracking-[-3%] text-light">Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h3>
        <div class="flex flex-col gap-[24px]">
            <p class="font-robotoCondensed font-normal text-[14px] leading-[21px] text-light">Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</p>
            <button class="w-[58.73px] h-[27px] border-b-[1.5px] pb-[6px] flex gap-[6px]">
                <p class="font-robotoCondensed font-normal text-[14px] leading-[21px] text-btn-secondary">Rozwiń</p>
                <img class="mt-[3px] text-btn-text-teritiary" :src="ArrowDown" alt="arrow down">
            </button>
        </div>
    </div>
</template>