<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h3>Buttered Buns</h3>
          <p>Artisanal bread baked with love</p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>123 Bakery Street</p>
          <p>Flour City, FC 123456</p>
          <p><a href="mailto:contact@butteredbuns.com">contact@butteredbuns.com</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Buttered Buns. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: var(--color-primary);
  color: white;
  padding: var(--space-lg) 0 var(--space-md);
  margin-top: var(--space-xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.footer-logo h3 {
  margin-bottom: var(--space-sm);
}

.footer-links h4,
.footer-contact h4 {
  margin-bottom: var(--space-md);
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--space-sm);
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-links a:hover {
  opacity: 0.8;
}

.footer-contact p {
  margin-bottom: var(--space-sm);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--space-md);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
