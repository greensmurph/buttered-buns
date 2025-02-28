<script setup lang="ts">
import { defineProps, ref } from 'vue';
import Button from '../core/Button.vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  subject: 'General Inquiry',
});

const formStatus = ref({
  submitted: false,
  success: false,
  message: '',
});

const subjects = ['General Inquiry', 'Custom Order', 'Catering', 'Baking Classes', 'Feedback'];

const submitForm = () => {
  // In a real application, you would send the form data to a server
  // For now, we'll just simulate a successful submission
  formStatus.value = {
    submitted: true,
    success: true,
    message: 'Thank you for your message! We will get back to you soon.',
  };

  // Reset form after successful submission
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: 'General Inquiry',
    };
    formStatus.value.submitted = false;
  }, 3000);
};
</script>

<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <div class="form-status" v-if="formStatus.submitted">
      <p :class="{ success: formStatus.success, error: !formStatus.success }">
        {{ formStatus.message }}
      </p>
    </div>

    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formData.name" required placeholder="Your name" />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        required
        placeholder="Your email address"
      />
    </div>

    <div class="form-group">
      <label for="phone">Phone (optional)</label>
      <input type="tel" id="phone" v-model="formData.phone" placeholder="Your phone number" />
    </div>

    <div class="form-group">
      <label for="subject">Subject</label>
      <select id="subject" v-model="formData.subject">
        <option v-for="subject in subjects" :key="subject" :value="subject">
          {{ subject }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="5"
        placeholder="Your message"
      ></textarea>
    </div>

    <div class="form-submit">
      <Button type="submit" variant="primary" size="large">Send Message</Button>
    </div>
  </form>
</template>

<style>
.contact-form {
  background-color: white;
  padding: var(--space-lg);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: var(--space-md);
}

.form-group label {
  display: block;
  margin-bottom: var(--space-xs);
  font-weight: 500;
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--space-sm);
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: var(--font-family-base);
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-submit {
  margin-top: var(--space-lg);
}

.form-status {
  margin-bottom: var(--space-md);
  padding: var(--space-sm);
  border-radius: 4px;
}

.form-status .success {
  color: #2e7d32;
  background-color: #e8f5e9;
  padding: var(--space-sm);
  border-radius: 4px;
}

.form-status .error {
  color: #c62828;
  background-color: #ffebee;
  padding: var(--space-sm);
  border-radius: 4px;
}
</style>
