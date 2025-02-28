<script setup lang="ts">
import Button from '../core/Button.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
  buttonLink: {
    type: String,
    default: '#',
  },
  backgroundImage: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <section class="hero" :style="backgroundImage ? `background-image: url(${backgroundImage})` : ''">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
        <p></p>
        <div v-if="buttonText" class="hero-action">
          <a :href="buttonLink">
            <Button variant="primary" sizes="large">{{ buttonText }}</Button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.hero {
  padding: var(--space-xl) 0;
  background-color: var(--color-primary);
  color: white;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: var(--space-md);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: var(--space-lg);
  opacity: 0.9;
}

.hero-action {
  margin-top: var(--space-lg);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
