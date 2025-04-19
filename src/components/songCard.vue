<template>
  <div class="h-[290px] w-[220px] relative">
        <div class="w-[220px] h-[220px] bg-center bg-cover bg-no-repeat"  :style="{ backgroundImage: 'url(' + url + ')' }"></div>
        <h4 class="my-[10px] text-center text-[18px] font-bold">{{ title }}</h4>
        <h5 class="font-[300] text-center">{{ artist }}</h5>
    </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  artist: String,
  url: String
})

const { title, artist, url } = props
</script>

<style>

</style>