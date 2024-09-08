<script setup>
import Dot from '../NavDots/Dot.vue'
</script>

<template>
    <nav class="h-[24px] w-[80px] relative">
        <div class="flex">
            <span class="w-[8px] h-[8px] bg-btn-primary rounded-full absolute top-[8px] cursor-pointer"></span>
            <div class="w-[62px] h-[8px] flex cursor-pointer">
                <Dot class="left-[18px]"></Dot>
                <Dot class="left-[36px]"></Dot>
                <Dot class="left-[54px]"></Dot>
                <Dot class="left-[72px]"></Dot>
            </div>
        </div>
    </nav>
</template>