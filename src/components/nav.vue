<script setup>
import { ref } from 'vue'

</script>

<template>

<div class="absolute top-[30px] ">
<header class="w-[80%] m-auto flex justify-between align-center items-center">
  <div class="float-left flex"><img src="/img/logo-dark-bg.svg" alt=""></div>
  <ul class="flex justify-end float-right m-0">
    <li><a href="">樂曲排名</a></li>
    <li><a href="">故事</a></li>
    <li><a href="">周邊</a></li>
    <li class="pl-[200px] relative">
        <img src="/img/nav-login.svg" alt="" class="absolute w-[140px] h-auto z-[-1] -top-[10px] ">
    </li>
  </ul>
</header></div>

</template>

<style scoped>
header ul a{
    color: var(--white);
    text-decoration: none;
    list-style: none;
    font-weight: 700;
    font-size: 18px;
    padding: 20px 0;
    margin-left: 50px;
}
header li{
    text-decoration: none;
    list-style: none;
}
header li img{
  right: calc(5%);
}
</style>