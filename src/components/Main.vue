<script setup>
import { ref } from 'vue';

import SongCard from './SongCard.vue';

    class songCard {
        constructor (title, artist, url){
            this.title = title;
            this.artist = artist;
            this.url = url;
        }
    }

    const songCardList = [
        {"title": "Black Swan", "artist": "ぺのれり" ,"url" : "img/songs/blackswan.webp"},
        {"title": "Break! Break! Break!", "artist": "HiTECH NINJA vs Cranky" ,"url" : "img/songs/break!break!break!.jpg"},
        {"title": "Straight Into The Lights", "artist": "Cosmograph" ,"url" : "img/songs/Straight_into_the_lights.png"},
        {"title": "Distorted Fate", "artist": "Sakuzyo" ,"url" : "img/songs/Distorted_Fate.jpg"},
        {"title": "Astral Quantization", "artist": "DJ Grimoire" ,"url" : "img/songs/astralquant.jpg"}
    ]

    import Screenshot from './Screenshots.vue';

    class screenshot {
        constructor (scrURL){
            this.scrURL = scrURL;
        }
    }

    const screenshots = [
        {"scrURL": "/img/screenshot1.jpg"},
        {"scrURL": "/img/screenshot2.jpg"},
        {"scrURL": "/img/screenshot3.jpg"},
        {"scrURL": "/img/screenshot4.jpg"},
        {"scrURL": "/img/screenshot5.jpg"}
    ]

    const scrIndex = ref(0)

</script>

<template>

<!-- 首頁 -->
<div class="relative w-full h-screen overflow-hidden">
    <div class="h-[1024px] w-full m-auto absolute z-[-1] bg-[url(/img/bg/main_bg.jpg)] bg-center bg-cover bg-no-repeat"></div>
    <img src="/img/char/tairitsu.webp" class="absolute h-[1000px] top-[100px] -bottom-[20%] z-[-1]" style="left: calc(40vw - 400px);">
    <img src="/img/char/hikari.webp" class="absolute h-[800px] top-[200px] -bottom-[10%]" style="right: calc(40vw - 400px);">
    <img src="/img/logo-tagline.svg" class="logo absolute top-[70%] left-[50%]">
    <img src="/img/logo-homepage.png" class="logo absolute h-[200px] top-[85%] left-[50%]">
    <a href="#"><img src="/img/google-play.png" class="absolute bottom-[40px] right-[8vw]"></a>
    <a href="#"><img src="/img/appStore.png" class="absolute absolute bottom-[90px] right-[8vw]"></a>
</div>
<!-- 遊戲曲目 -->
<div class="w-full h-[600px]">
    <h2>遊戲曲目</h2>
    <h3>SONGS</h3>
    <P>遊戲中可能玩得到的部分精選曲目</P>
    <div class="w-[85%] pt-[36px] m-auto flex justify-between overflow-hidden">

        <div v-for="(song, index) in songCardList" :key="index">
            <SongCard :title="song.title" :artist="song.artist" :url="song.url" />
        </div>

    </div>
</div>
<!-- 登場人物 -->
<div class="w-full h-[700px] relative">
    <div class="w-full h-full absolute z-[-1] bg-[url(/img/bg/s3_bg_dark.jpg)] bg-center bg-cover bg-no-repeat"></div>
    <h2 class="font-[900] text-[36px] pt-[40px]">
        <span class="char-title">登場人物</span>
    </h2>
    <h3>CHARACTERS</h3>
    <div class="w-full mt-[40px] overflow-hidden flex justify-center gap-[20px]">
        <div class="self-end text-[40px] font-[900] mx-20[px]">
            <h4 style="text-align: right;">光</h4>
            <h5 class="pb-[40px] text-[#F95499]">HIKARI</h5>
        </div>
        <img src="/img/char/Hikari_Q.webp" class="char relative h-[400px] w-auto">
        <img src="/img/char/Tairitsu_Q.webp" class="char relative h-[400px] w-auto">
        <div class="self-end text-[40px] font-[900] mx-20[px]">
            <h4 style="text-align: left;">對立</h4>
            <h5 class="pb-[40px] text-[#8F12E1]">TAIRITSU</h5>
        </div>
    </div> 
</div>
<!-- 遊戲截圖 -->
<div class="w-full h-full relative">
    <h2>遊戲截圖</h2>
    <h3>SCREENSHOTS</h3>
    <div class="w-[70%] m-auto flex justify-between mb-[40px] overflow-hidden">

        <div v-for="(scr, index) in screenshots" :key="index" @click="scrIndex = index">
            <Screenshot :scrURL="scr.scrURL" class="screenshot left-[0] h-[90px] w-auto"/>
        </div>

    </div>
    <div class="w-[70%] m-auto relative ">
        <div v-for="(scr, index) in screenshots" :key="index">
            <transition>
                <Screenshot :scrURL="scr.scrURL" v-if="scrIndex === index" class="relative pb-[80px]"/>
            </transition>
        </div>
    </div>
</div>
<!-- 影片 -->
<div class="w-full relative overflow-hidden">
    <div class="w-full h-full absolute z-[-1] bg-[url(/img/bg/s5_bg.jpg)] bg-center bg-cover bg-no-repeat brightness-[0.25]"></div>
    <h2>官方影片</h2>
    <h3>VIDEO</h3>
    <div class="relative w-[70%] m-auto pb-[20px]">
        <iframe class="w-full aspect-[16/9]" src="https://www.youtube.com/embed/f7hssW8XEzE?si=jCmzu-L9wYH0AE48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="w-full flex justify-center pb-[40px]">
        <a href="#"><img src="/img/appStore.png"></a>
        <a href="#"><img src="/img/google-play.png"></a>
    </div>
</div>

</template>

<style scoped>
.logo{
    z-index: 2;
    transform: translate(-50%, -50%);
}
h2, h3, h4, h5, p{
   margin: 0;
   text-align: center;
}
h2{
    font-weight: 600;
    font-size: 36px;
    padding-top: 50px;
}
h3{
    font-weight: 300;
    padding-bottom: 60px;
}
.char-title{
    background-image: linear-gradient(45deg, #F95499, #8F12E1);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
}
.char{
    filter: drop-shadow(0 0 10px #000);
}
.screenshot{ 
    filter: brightness(0.5);
    transition-duration: 200ms;
    cursor: pointer;
}
.screenshot:hover{
    filter: brightness(1);
    transition-duration: 200ms;
}
.fadeIn{
    animation: fadeIn;
    animation-duration: 0.2s;
}
/* transition */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>