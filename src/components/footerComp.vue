<script>
    export default {
        name: 'footerComp'
    }
</script>

<template>
    <div id="footerContainer" class="p-1 position-fixed row justify-content-center align-items-center px-3">
        <span class="text-start col-4 d-none d-md-block">© Copyright 2021 - 2023. All Rights</span>
        <span class="text-center col-4">created by bezz</span>
        <span class="text-end col-4 d-none d-md-block">P.IVA 09876567854</span>
    </div>
</template>

<style lang="scss" scoped>
    #footerContainer{
        z-index:-1;
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