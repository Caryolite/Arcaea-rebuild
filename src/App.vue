<script setup>
import Nav from './components/nav.vue'
import Main from './components/Main.vue'
import Footer from './components/footer.vue'
import story from './components/story.vue'

import { ref } from 'vue'
const pageIndex = ref(1);

</script>

<template>
  <Nav class="w-full z-[1] over-hidden" />
  <Main class="w-full overflow-hidden" />
  <!-- <story class="relative" /> -->
  <Footer/>
</template>

<style scoped>

</style>