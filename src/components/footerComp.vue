<script>
    export default {
        name: 'footerComp'
    }
</script>

<template>
    <div id="footerContainer" class="p-1 position-fixed row justify-content-between align-items-center px-3">
        <span class="text-start col-4 d-none d-md-block">© Copyright 2021 - 2024. All Rights</span>
        <span class="text-end col-4">created by bezz</span>
        <a href="https://www.iubenda.com/privacy-policy/47722868" class="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
        <!-- <span class="text-end col-4 d-none d-md-block">P.IVA 09876567854</span> -->
    </div>
</template>

<style lang="scss" scoped>
    #footerContainer{
        z-index:99999;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #ecedee;
        span{
            color: black;
            font-family: 'Amatic SC', cursive;
            font-size: 1.3rem;
            font-weight: bold;
        }
    }
</style>