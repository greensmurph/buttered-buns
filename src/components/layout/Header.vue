<template>
  <header class="class">
    <div class="container header-container">
      <div class="logo">
        <a href="/">Buttered Buns</a>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/about" class="nav-link">About</a></li>
          <li><a href="/services" class="nav-link">Services</a></li>
          <li><a href="/portfolio" class="nav-link">Portfolio</a></li>
          <li><a href="/contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
.header {
  padding: var(--space-md) 0;
  background-color: var(--color-background);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo a {
  color: var(--color-primary);
  text-decoration: none;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: var(--space-md);
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: var(--space-md);
  }

  .nav-list {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
