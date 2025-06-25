<script>
    export default {
        name: 'HomePage'
    }
</script>

<template>
  
  <div id="jumbo-container" class="d-flex flex-column justify-content-center align-items-center">
    <h1 class="mb-2 text-center fs-1">Under construction</h1>
    <a href="mailto:info.bezzbrain@gmail.com" title="mail" class="text-decoration-none text-black mb-5 text-center fs-1 onHover">info.bezzbrain@gmail.com</a>
    <img src="/img/logo-animation.webp" alt="logo-animated">
  </div>
  <!-- <div id="jumbotron" class="container d-flex flex-column justify-content-md-center mt-5 mb-5 text-black">
    <span id="textMyName" class="d-block mt-2 text-center fs-1">I'm Antonio</span>
    <span class="text-center fs-2">&</span>
    <h1 class="mb-5 text-center fs-1">this is my brain</h1>
    <div class="d-flex flex-column justify-content-center align-items-center text-center flex-md-row justify-content-md-between text-md-start mb-md-4 mt-5">
      <div class="d-flex flex-column mb-5">
        <h2 class="font-size-h2">Full Stack <br> Developer</h2>
        <div class="d-flex flex-column">
            <h3 class="font-size-h3">Here some of my latest <br> works and idea &#128161;  </h3>
        </div>
      </div>
      <div class="d-flex flex-column mb-5">
        <h2 class="font-size-h2">Creative & Technical <br> Web Developer</h2>
        <div class="d-flex flex-column">
          <h3 class="text-uppercase mb-0 font-size-h3">last update &star; <span>Feb/24</span></h3>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

  .onHover{
    &:hover{
      scale:105%;
    }
  }

  #jumbo-container{
    font-family: 'Amatic SC', cursive;
    height: 85vh;
    img{
      width: 200px;
      height: 200px;
    }
  }

  #jumbotron{
    font-family: 'Amatic SC', cursive;
  }

  

  @media screen and (max-width: 570px) {
    #jumbo-container{
      height: 80vh;
      img{
        width: 200px;
        height: 200px;
      }
    }
  }

  @media screen and (min-width: 571px) and (max-width: 767px) {
     #jumbo-container{
      height: 80vh;
      img{
        width: 300px;
        height: 300px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
     #jumbo-container{
      height: 80vh;
      img{
        width: 400px;
        height: 400px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
     #jumbo-container{
      height: 85vh;
      img{
        width: 500px;
        height: 500px;
      }
    }
  }
</style>