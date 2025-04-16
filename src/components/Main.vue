<script setup>

</script>

<template>
    <div class="relative w-full h-screen overflow-hidden">
        <div class="bg h-[1024px] w-full m-auto absolute z-[-1]"></div>
        <img src="/img/char/tairitsu.webp" class="h-[1000px] top-[100px] -bottom-[20%]" style="left: calc(40vw - 400px);">
        <img src="/img/char/hikari.webp" class="h-[800px] top-[200px] -bottom-[10%] z-[-1]" style="right: calc(40vw - 400px);">
        <img src="/img/logo-tagline.svg" class="logo top-[70%] left-[50%]">
        <img src="/img/logo-homepage.png" class="logo h-[200px] top-[85%] left-[50%]">
        <a href="#"><img src="/img/google-play.png" class="link bottom-[40px] right-[8vw]"></a>
        <a href="#"><img src="/img/appStore.png" class="link absolute bottom-[90px] right-[8vw]"></a>
    </div>
</template>

<style scoped>
.bg{
    background-image: url(/img/bg/main_bg.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
img {
    position: absolute;
}
.logo{
    z-index: 2;
    transform: translate(-50%, -50%);
}
</style>