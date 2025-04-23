<template>
    
<!-- 漸變線 -->
<div class="relative w-full h-[3px] overflow-hidden">
    <div class="linear relative left-0 w-[300vw] h-[3px] z-[1]"></div>
</div>
<!-- footer -->
<div>
    <div class="pt-[40px] flex justify-center gap-[10px]">
        <p>聯繫我們</p>
        <p>服務條款</p>
        <p>二次創作管理條例</p>
        <p>直播準則</p>
    </div>
    <p class="gray text-center px-[20px] py-[10px]">
        本網站非Arcaea官方。本網站無商業使用，僅作為學習用途。
        所有圖片素材屬於其作者擁有。
    </p>
    <div class="w-full flex justify-center">
        <img src="/img/logo-dark-bg.svg">
    </div>
    <p class="gray text-center px-[20px] py-[10px]">沒有&copy;2024 lowiro</p>
</div>

</template>

<style scoped>
.linear{
    background-image: linear-gradient(to right, #810DCE 0%, #71118D 12%, #D40BE7 25%, #4812E1 32%, #5C0E59 46%, #B22E98 64%, #0D086D 76%, #D40BE7 100%);
    animation: fade;
    animation-duration: 32s;
    animation-iteration-count: infinite;
}  
.gray{
    color: var(--light-gray);
}
@keyframes fade {
    0%{
        left: 0;
    }
    40%{
        left: -200vw;
    }
    100%{
        left: 0;
    }
}
</style>