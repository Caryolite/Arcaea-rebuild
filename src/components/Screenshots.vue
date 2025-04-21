<template>
  <div>
    <img :src="scrURL" class="left-[0] h-[90px] w-auto">
  </div>
</template>

<script setup>

const props = defineProps({
  scrURL: String
})

</script>

<style scoped>
img{ 
    filter: brightness(0.5);
    transition-duration: 200ms;
    cursor: pointer;
}
img:hover{
    filter: brightness(1);
    transition-duration: 200ms;
}
</style>