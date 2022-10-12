<template>
  <div class="project-slides">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :speed="150"
      :parallax="true"
      :zoom="false"
      :navigation="true"
      :pagination="{ clickable: true }"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :loop="true"
      @slide-change-transition-start="onSlideChange"
    >
      <swiper-slide v-for="(image, index) in slides" :key="index">
        <picture>
          <source 
          :srcset="getImage(image, true)" 
          type="image/webp"
           />
          <img
            :src="getImage(image, false)"
            :alt="image.alt"
            :title="image.title"
            class="project-slides__slider-image"
            loading="lazy"
          />
        </picture>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { A11y, EffectFade, Navigation, Pagination, Parallax } from "swiper";
import { useSwiper, useSwiperSlide } from "swiper/vue";
import { useWindowWidth, getImageUrlWithPath } from "~/composables";

export default {
  name: "ProjectSlides",
  setup(props, { attrs }) {
    const { windowWidth, sm } = useWindowWidth();
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    const slides = ref(attrs.slides);

    const slideChanged = ref(true);

    const onSlideChange = () => {
      slideChanged.value = !slideChanged.value;
    };

    const handleSlideChanged = (value: boolean) => {
      slideChanged.value = value;
    };

    const getImage = (image, webp: boolean) => {
      const extension = webp ? "webp.webp" : "png.png";
      const type = 'original'
      return `${import.meta.env.VITE_API_URL}/portfolio/${image.path}/${image.image}-${type}_${extension}`;
    };

    return {
      swiper,
      swiperSlide,
      modules: [EffectFade, Navigation, Pagination, Parallax, A11y],
      windowWidth,
      sm,
      onSlideChange,
      slideChanged,
      handleSlideChanged,
      getImageUrlWithPath,
      slides,
      getImage,
    };
  },
};
</script>
