<script setup>

import { defineEmits } from 'vue';

const emit = defineEmits(['changePage']);
const changePage = (page) => {
  emit('changePage', page);
};

</script>

<template>

<div class="absolute top-[30px] ">
<header class="w-[80%] m-auto flex justify-between align-center items-center">
  <div class="float-left" @click="changePage(1)"><img src="/img/logo-dark-bg.svg"></div>
  <ul class="flex justify-end float-right m-0">
    <li @click="changePage(2)">樂曲排名</li>
    <li @click="changePage(3)">故事</li>
    <li @click="changePage(4)">周邊</li>
    <li @click="changePage(5)" class="login pl-[160px] relative">
        <img src="/img/nav-login.svg" class="w-[140px] h-auto z-[-1] -top-[10px]">
    </li>
  </ul>
</header></div>

</template>

<style scoped>
header li{
    color: var(--white);
    text-decoration: none;
    list-style: none;
    font-weight: 700;
    font-size: 18px;
    padding: 20px 0;
    margin-left: 50px;
    align-content: center;
    text-decoration: none;
    list-style: none;
}
header li img{
  right: calc(5%);
}
li:hover{
  border-bottom: 2px solid var(--white);
  padding-bottom: 18px;
}
.login:hover{
  border-bottom: 0;
  padding: 20px 0;
  filter: drop-shadow(0 0 15px var(--purple));
  transition-duration: 200ms;
}
</style>