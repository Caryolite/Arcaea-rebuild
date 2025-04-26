<script setup>
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Nav class="w-full z-[1] over-hidden" />
  <router-view class="w-full overflow-hidden" />
  <Footer/>
</template>

<style scoped>

</style>