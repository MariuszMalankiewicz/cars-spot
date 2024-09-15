<script setup>
import PrimaryButton from '/src/components/atoms/PrimaryButton.vue'
import Logo from '/src/assets/imgs/logo.png'

import { AnOutlinedMenu } from "@kalimahapps/vue-icons";
import { ByClose } from "@kalimahapps/vue-icons";

import { ref } from 'vue'

const show = ref(false)

const showToogle = ()=>{
    show.value = !show.value
}
</script>

<template>
    <nav class="py-[16px] relative z-10">
        <!-- Mobile -->
        <div>
            <div class="sm:hidden bg-light w-full py-4 fixed top-0 flex justify-between shadow-2xl">
                <img class="ms-6" :src="Logo" alt="logo called cars spot">
            </div>
            <AnOutlinedMenu class="sm:hidden text-[32px] text-btn-primary cursor-pointer fixed top-4 right-6" v-if="!show" @click="showToogle()"></AnOutlinedMenu>
            <ByClose class="sm:hidden z-10 text-[28px] text-btn-primary cursor-pointer fixed top-4 right-6" v-if="show" @click="showToogle()"></ByClose>
            <div class="sm:hidden w-full h-[200px] flex flex-col justify-center gap-[24px] bg-dark fixed top-[65px] left-[0%] z-1 rounded-b-full" v-if="show">
                <a href="#headers" class="font-robotoFlex font-normal text-[14px] leading-[24px] text-center cursor-pointer text-light">Galeria zdjęć</a>
                <a href="#" class="font-robotoFlex font-normal text-[14px] leading-[24px] text-center cursor-pointer text-light">FaQ</a>
                <a href="#" class="font-robotoFlex font-normal text-[14px] leading-[24px] text-center cursor-pointer text-light">Zadzwoń do nas</a>
            </div>
        </div>

        <!-- desktop -->
        <div class="hidden sm:flex sm:mx-auto w-full lg:w-[90%] xl:w-[80%] px-4 justify-betwwen sm:justify-between gap-x-[24px] gap-y-[12px] sm:gap-[10px]">
            <div>
                <img class="mt-[0.79px] mx-auto sm:mx-0" :src="Logo" alt="logo called cars spot">
            </div>
            <div class="hidden sm:flex items-center gap-[24px] mt-2 mb-2 sm:mt-0 sm:mb-0">
                <a href="#headers" class="hover:font-semibold transition duration-300 font-robotoFlex font-normal text-[14px] leading-[24px] text-center cursor-pointer text-dark">Galeria zdjęć</a>
                <a href="#" class="hover:font-semibold transition duration-300 font-robotoFlex font-normal text-[16px] leading-[24px] text-center cursor-pointer text-dark">FaQ</a>
            </div>
            <div class="hidden sm:flex gap-[10px] justify-center sm:justify-end">
                <PrimaryButton>Zadzwoń do nas</PrimaryButton>
            </div>

        </div>
    </nav>
</template>

<style>
html{
    scroll-behavior: smooth;
}
</style>
