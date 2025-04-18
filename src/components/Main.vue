<script setup>

</script>

<template>
    <!-- 首頁 -->
    <div class="relative w-full h-screen overflow-hidden">
        <div class="bg h-[1024px] w-full m-auto absolute z-[-1]"></div>
        <img src="/img/char/tairitsu.webp" class="h-[1000px] top-[100px] -bottom-[20%]" style="left: calc(40vw - 400px);">
        <img src="/img/char/hikari.webp" class="h-[800px] top-[200px] -bottom-[10%] z-[-1]" style="right: calc(40vw - 400px);">
        <img src="/img/logo-tagline.svg" class="logo top-[70%] left-[50%]">
        <img src="/img/logo-homepage.png" class="logo h-[200px] top-[85%] left-[50%]">
        <a href="#"><img src="/img/google-play.png" class="link bottom-[40px] right-[8vw]"></a>
        <a href="#"><img src="/img/appStore.png" class="link absolute bottom-[90px] right-[8vw]"></a>
    </div>
    <!-- 遊戲曲目 -->
    <div class="w-full h-[600px]">
        <h2>遊戲曲目</h2>
        <h3>SONGS</h3>
        <P>遊戲中可能玩得到的部分精選曲目</P>
        <div class="songs w-[85%] pt-[36px] m-auto flex justify-between overflow-hidden">
            <div class="song-card">
                <div style="background-image: url(img/songs/blackswan.webp);"></div>
                <h4>Black Swan</h4>
                <h5>ぺのれり</h5>
            </div>
            <div class="song-card">
                <div style="background-image: url(img/songs/break!break!break!.jpg);"></div>
                <h4>Break! Break! Break!</h4>
                <h5>HiTECH NINJA vs Cranky</h5>
            </div>
            <div class="song-card">
                <div style="background-image: url(img/songs/Straight_into_the_lights.png);"></div>
                <h4>Straight Into The Lights</h4>
                <h5>Cosmograph</h5>
            </div>
            <div class="song-card">
                <div style="background-image: url(img/songs/Distorted_Fate.jpg);"></div>
                <h4>Distorted Fate</h4>
                <h5>Sakuzyo</h5>
            </div>
            <div class="song-card">
                <div style="background-image: url(img/songs/astralquant.jpg);"></div>
                <h4>Astral Quantization</h4>
                <h5>DJ Grimore</h5>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg{
    background-image: url(/img/bg/main_bg.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
img{
    position: absolute;
}
.logo{
    z-index: 2;
    transform: translate(-50%, -50%);
}
h2,h3,h4,h5,p{
   margin: 0;
   text-align: center;
   color: var(--white);
}
h2{
    font-weight: 600;
    font-size: 36px;
    padding-top: 50px;
}
h3{
    font-weight: 400;
    padding-bottom: 60px;
}
.song-card{
    height: 290px;
    width: 220px;
    position: relative;
}
.song-card div{
    width: 220px;
    height: 220px;
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.songs h4{
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
}
.songs h5{
    font-weight: 200;
}
</style>