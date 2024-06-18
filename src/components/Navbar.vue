<template>
  <nav>
    <div class="logo-container">
      <router-link to="/" exact-active-class="active"><img :src="Image" alt="Logo" class="logo"></router-link>
    </div>
    <div class="menu-icon" @click="toggleMenu">
      <div :class="{'bar': true, 'change': isMenuOpen}"></div>
      <div :class="{'bar': true, 'change': isMenuOpen}"></div>
      <div :class="{'bar': true, 'change': isMenuOpen}"></div>
    </div>
    <ul :class="{'menu-open': isMenuOpen}">
      <li @click="closeMenu"><router-link to="/about" exact-active-class="active">About</router-link></li>
      <li @click="closeMenu"><router-link to="/contact" exact-active-class="active">Contact</router-link></li>
      <li @click="closeMenu"><router-link to="/login" exact-active-class="active">Login</router-link></li>
      <li @click="closeMenu"><router-link to="/register" exact-active-class="active">Register</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import Image from '../assets/logo-kostin.png';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

nav {
  background-color: #42b983;
  color: white;
  height: 60px;
  padding: 1em;
  animation: fadeIn 1s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  animation: slideIn 0.5s ease-in-out;
}

li {
  margin-right: 1em;
  position: relative;
}

.logo-container {
  margin-left: 1em;
  margin-top: 0.5em;
  padding: 0.5em;
  animation: slideIn 0.5s ease-in-out;
}

a {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.5em;
  transition: all 0.3s ease;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
  text-align: center;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

a::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

a:hover::before,
a.active::before {
  visibility: visible;
  transform: scaleX(1);
}

a:hover::after,
a.active::after {
  opacity: 1;
}

a:hover {
  color: #f3f3f3;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

a.active {
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  color: #ffffff;
}

.logo {
  height: 40px;
  width: auto;
  transition: transform 0.5s ease;
}

.logo:hover {
  transform: rotate(360deg) scale(1.1);
  animation: spin 0.5s ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease;
}

.change:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.change:nth-child(2) {
  opacity: 0;
}

.change:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.menu-open {
  display: flex;
}

@media (max-width: 768px) {
  .menu-icon {
    display: flex;
  }

  ul {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #42b983;
    width: 100%;
    padding: 1em;
    display: none;
  }

  ul.menu-open {
    display: flex;
  }

  li {
    margin-right: 0;
    margin-bottom: 1em;
    width: 100%;
    text-align: left;
  }

  a {
    padding: 0.8em;
    width: 100%;
  }

  .logo {
    height: 30px;
  }
}

@media (max-width: 480px) {
  nav {
    padding: 0.3em;
  }

  a {
    padding: 0.5em;
  }

  .logo {
    height: 25px;
  }
}
</style>
