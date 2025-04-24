<script setup>

</script>

<template>

<div class="absolute top-[30px] ">
<header class="w-[80%] m-auto flex justify-between align-center items-center">
  <div class="float-left"><img src="/img/logo-dark-bg.svg"></div>
  <ul class="flex justify-end float-right m-0">
    <li><a href="">樂曲排名</a></li>
    <li><a href="">故事</a></li>
    <li><a href="">周邊</a></li>
    <li class="login pl-[160px] relative">
        <a href=""><img src="/img/nav-login.svg" class="w-[140px] h-auto z-[-1] -top-[10px]"></a>
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