<script setup>
import Nav from './components/nav.vue'
import Main from './components/Main.vue'
import Footer from './components/footer.vue'
import story from './components/story.vue'

import { ref } from 'vue'
const pageIndex = ref(1);

const changePage = (page) => {
  pageIndex.value = page;
};

</script>

<template>
  <Nav class="w-full z-[1] over-hidden" @changePage="changePage" />
  <Main v-if="pageIndex===1" class="w-full overflow-hidden" />
  <story v-if="pageIndex===3" class="relative" />
  <Footer/>
</template>

<style scoped>

</style>