<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const items = ref([
  { image: '/src/assets/imgs/Images.png', title: 'Alfa Romeo 4C', description: 'Alfa Romeo 4C to kompaktowy, sportowy samochód produkowany przez włoską markę Alfa Romeo w latach 2013–2020.', content: false },
  { image: '/src/assets/imgs/Images (1).png', title: 'Maserati Grancabrio', description: 'Maserati GranCabrio to elegancki i luksusowy kabriolet, który łączy w sobie włoską finezję z niesamowitą wydajnością.', content: false },
  { image: '/src/assets/imgs/Images (2).png', title: 'Audi A6', description: 'Audi A6 to luksusowy samochód klasy średniej-wyższej produkowany przez niemiecką markę Audi.', content: false },
  { image: '/src/assets/imgs/Images.png', title: 'Alfa Romeo 4C', description: 'Alfa Romeo 4C to kompaktowy, sportowy samochód produkowany przez włoską markę Alfa Romeo w latach 2013–2020.' },
  { image: '/src/assets/imgs/Images (1).png', title: 'Maserati Grancabrio', description: 'Maserati GranCabrio to elegancki i luksusowy kabriolet, który łączy w sobie włoską finezję z niesamowitą wydajnością.', content: false },
]);

const currentIndex = ref(0);

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
}

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

const step = computed(() => {
  if (windowWidth.value < 639) {
    return 100;
  } else if (windowWidth.value < 1024) {
    return 40;
  } else {
    return 21;
  }
});

onMounted(() => {
  window.addEventListener('resize', updateWidth);
});

function showContent(item) {
  item.content = !item.content;
}

function goToSlide(index) {
  currentIndex.value = index;
}
</script>

<template>
 <div class="relative w-[95%] md:w-[90%] pb-[54px] mt-6 mb-10 xl:my-[80px] mx-auto">
    <!-- Slider -->
    <div
      class="transition-transform duration-300 flex sm:gap-[10px] md:gap-[20px] lg:gap-[48px]"
      :style="{ transform: `translateX(-${currentIndex * step}%)` }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        
        class="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
      >
        <!-- Slide content -->
        <img :src="item.image" :alt="item.title" class="w-3/4 sm:w-[350px] md:w-full mx-auto object-cover" @click="showContent(item)"/>
        <div class="w-3/4 sm:w-full absolute bottom-0 left-[12.5%] sm:left-0 px-2 bg-light/80" v-if="items[index].content">
          <h3 class="text-[20px] lg:text-[22px] font-semibold">{{ item.title }}</h3>
          <p class="text-[14px] sm:text-[15px]">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(item, index) in items"
        :key="index"
        @click="goToSlide(index)"
        class="w-[8px] h-[8px] rounded-full"
        :class="currentIndex === index ? 'bg-btn-primary' : 'bg-btn-muted'"
      ></button>
    </div>
  </div>
</template>