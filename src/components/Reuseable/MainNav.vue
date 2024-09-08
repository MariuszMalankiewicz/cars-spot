<script setup>
import Button from './Buttons/PrimaryButton.vue'
</script>

<template>
    <nav class="py-[16px] relative z-10">
        <div class="mx-auto w-[95%] lg:w-[90%] xl:w-[80%] px-4 flex flex-wrap items-center justify-center sm:justify-between gap-x-[24px] gap-y-[12px] sm:gap-[10px]">
            <div>
                <img class="mt-[0.79px] mx-auto sm:mx-0" src="../../assets/imgs/Group 255.png" alt="logo called cars spot">
            </div>
            <div class="flex gap-[24px] mt-2 mb-2 sm:mt-0 sm:mb-0">
                <a href="#headers" class="font-robotoFlex font-normal text-[14px] leading-[24px] text-center cursor-pointer text-dark">Galeria zdjęć</a>
                <p class="font-robotoFlex font-normal text-[16px] leading-[24px] text-center cursor-pointer text-dark">FaQ</p>
            </div>
            <div class="flex gap-[10px] justify-center sm:justify-end">
                <Button>Zadzwoń do nas</Button>
            </div>
        </div>
    </nav>
</template>

<style>
html{
    scroll-behavior: smooth;
}
</style>
