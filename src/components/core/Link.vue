<script setup lang="ts">
const Link = defineProps({
  href: {
    type: String,
    rqeuired: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <a
    :herf="href"
    :class="['custom-link', { 'with-underline': underline }]"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot></slot>
  </a>
</template>

<style>
.custom-link {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.custom-link:hover {
  color: color-mix(in srgb, var(--color-primary), black 20%);
}

.with-underline {
  text-decoration: underline;
}
</style>
