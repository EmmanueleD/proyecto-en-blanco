<template>
  <nav class="bg-white shadow-sm">
    <div class="container mx-auto">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-2">
          <img src="https://img.logoipsum.com/254.svg" alt="Logo de Proyecto en Blanco">
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-600 hover:text-primary">Inicio</a>
          <a href="/sobre-nosotros" class="text-gray-600 hover:text-primary">Sobre Nosotros</a>
          <a href="/servicios" class="text-gray-600 hover:text-primary">Servicios</a>
          <a href="/libros" class="text-gray-600 hover:text-primary">Libros</a>
          <a href="/podcast" class="text-gray-600 hover:text-primary">Podcast</a>
          <!-- <a href="/blog" class="text-gray-600 hover:text-primary">Blog</a> -->
          <a href="/contacto" class="text-gray-600 hover:text-primary">Contacto</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="/" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Inicio
          </a>
          <a href="/sobre-nosotros" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Sobre Nosotros
          </a>
          <a href="/servicios" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Servicios
          </a>
          <a href="/libros" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Libros
          </a>
          <a href="/podcast" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Podcast
          </a>
          <!-- <a href="/blog" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Blog
          </a> -->
          <a href="/contacto" class="block px-3 py-2 text-gray-600 hover:text-primary">
            Contacto
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>
