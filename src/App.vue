<script>
  import headerComp from './components/headerComp.vue';
  import footerComp from './components/footerComp.vue';
  import cookieBanner from './components/cookieBanner.vue';


  export default{
    name: 'App',
    data: function() {
      return {
        showBannerCookies: !(this.$posthog.has_opted_out_capturing()||this.$posthog.has_opted_in_capturing())
      }
    },
    components:{
      headerComp,
      footerComp,
      cookieBanner
    }
  }

</script>

<template>

  <headerComp/>


  <router-view></router-view>

  <footerComp/>

  <cookieBanner 
    v-if="showBannerCookies"
    @hideBanner="showBannerCookies = false"
  />
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;

</style>
