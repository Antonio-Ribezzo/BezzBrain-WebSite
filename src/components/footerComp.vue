<script>
    export default {
        name: 'footerComp'
    }
</script>

<template>
    <div id="footerContainer" class="p-1 position-fixed">
        <span class="text-center d-block">created by bezz</span>
    </div>
    
</template>

<style lang="scss" scoped>
    #footerContainer{
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