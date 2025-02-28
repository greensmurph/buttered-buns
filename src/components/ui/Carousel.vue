<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';
import Image from '../core/Image.vue';

const props = defineProps({
  images: {
    type: Array as () => { src: string; alt: string }[],
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
});

const currentIndex = ref(0);
let timer: number | null = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

const startAutoplay = () => {
  if (props.autoplay && props.images.length > 1) {
    timer = window.setInterval(() => {
      next();
    }, props.interval);
  }
};

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

onMounted(() => {
  startAutoplay();
});
</script>

<template>
  <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="carousel-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-slide"
        :class="{ active: index === currentIndex }"
      >
        <div class="image-placeholder" v-if="!image.src">[Image Placeholder]</div>
        <Image v-else :src="image.src" :alt="image.alt" loading="eager" />
      </div>

      <button class="carousel-control prev" @click="prev" aria-label="Previous slide">&lt;</button>
      <button class="carousel-control next" @click="next" aria-label="Next slide">&gt;</button>
    </div>

    <div class="carousel-indicators" v-if="images.length > 1">
      <button
        v-for="(_, index) in images"
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  color: var(--color-text);
  font-weight: bold;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.carousel-control:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.indicator.active {
  background-color: white;
}

@media (max-width: 768px) {
  .carousel-container {
    height: 300px;
  }

  .carousel-control {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
}
</style>
