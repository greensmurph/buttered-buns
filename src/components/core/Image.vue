<script setup lang="ts">
const Image = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: 'auto',
  },
  height: {
    type: [String, Number],
    default: 'auto',
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value: string) => ['lazy', 'eager'].includes(value),
  },
});
</script>
<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    class="responsive-image"
  />
</template>
<style>
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
