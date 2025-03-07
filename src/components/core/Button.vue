<script setup lang="ts">
const Button = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'accent', 'outline'].includes(value),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="['button', `button-${variant}`, `button-${size}`]"
    :type="type"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.button-primary {
  background-color: var(--color-primary);
  color: white;
}

.button-primary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-primary), black 10%);
}

.button-secondary {
  background-color: var(--color-secondary);
  color: var(--color-text);
}

.button-secondary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-secondary), black 10%);
}

.button-accent {
  background-color: var(--color-accent);
  color: white;
}

.button-accent:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-accent), black 10%);
}

.button-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
}

.button-outline:hover:not(:disabled) {
  background-color: rgba(139, 94, 60, 0.1);
}

/* Sizes */
.button-small {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}

.button-medium {
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
}

.button-large {
  padding: 0.75rem 1.75rem;
  font-size: 1.125rem;
}
</style>
