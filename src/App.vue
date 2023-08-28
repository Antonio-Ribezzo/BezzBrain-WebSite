<script>
  import headerComp from './components/headerComp.vue';
  import headerComp2 from './components/headerComp2.vue';

  import footerComp from './components/footerComp.vue';


  export default{
    name: 'App',
    components:{
      headerComp,
      headerComp2,
      footerComp
    }
  }

</script>

<template>

  <!-- <headerComp/> -->
  <headerComp2/>


  <router-view></router-view>

  <footerComp/>

</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;

</style>
