<script setup>

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

</script>

<template>
    <!-- 首頁 -->
    <div class="relative w-full h-screen overflow-hidden">
        <div class="h-[1024px] w-full m-auto absolute z-[-1] bg-[url(/img/bg/main_bg.jpg)] bg-center bg-cover bg-no-repeat"></div>
        <img src="/img/char/tairitsu.webp" class="absolute h-[1000px] top-[100px] -bottom-[20%]" style="left: calc(40vw - 400px);">
        <img src="/img/char/hikari.webp" class="absolute h-[800px] top-[200px] -bottom-[10%] z-[-1]" style="right: calc(40vw - 400px);">
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
        <div class="s3bg w-full h-full absolute z-[-1] bg-[url(/img/bg/s3_bg_dark.jpg)] bg-center bg-cover bg-no-repeat"></div>
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
</style>