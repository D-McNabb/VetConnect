<template>
  <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-200 to-cyan-400">
    <div class="text-center text-white">
      <h1 class="text-5xl font-extrabold mb-4 drop-shadow">Welcome to VetConnect</h1>
      <p class="text-xl font-medium mb-8">Smart solutions for modern veterinary clinics</p>
      <router-link to="/login" class="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default { name: 'Home' };
</script>
