<script>
    export default {
        name: 'headerComp',
    }
</script>

<template>
    <nav class="navbar navbar-expand-md py-3 position-sticky">
        <div class="container-fluid">
            <router-link :to="{ name: 'home'}" class="navbar-brand">
                <div>
                    <h1 class="m-0">bezzbrain</h1>
                </div>
            </router-link>
            <button class="fs-5 bg-bezz navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <font-awesome-icon :icon="['fas', 'bars']" alt="Toggle navigation" class="bg-bezz text-black"/>
            </button>
            <!-- sidebar  -->
            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <button type="button" class="bg-bezz shadow-none ms-auto text-black" data-bs-dismiss="offcanvas" aria-label="Close">
                    <font-awesome-icon :icon="['fas', 'x']" alt="Toggle navigation" class="bg-bezz text-black"/>
                </button>
              </div>
              <!-- sidebar body  -->
              <div class="offcanvas-body d-flex flex-column ">
                <ul class="navbar-nav ms-md-auto gap-2 justify-content-center align-items-center flex-grow-1">
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'home'}" class="nav-link py-1"><span>home</span></router-link>
                  </li>
                  <!-- <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'projects'}" class="nav-link py-1"><span>works</span></router-link>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'about-me'}" class="nav-link py-1"><span>about</span></router-link>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'contacts'}" class="nav-link py-1"><span>contact</span></router-link>
                  </li> -->
                </ul>
                <div class="d-flex justify-content-between align-items-start mb-5 d-md-none">
                    <span class="text-start fs-6 col-4">© Copyright 2021 - 2024. All Rights</span>
                    <!-- <span class="text-end fs-6 col-4">P.IVA 09876567854</span> -->
                </div>
              </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @use '../style/main.scss' as *;
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

    nav{
        top: 0;
        
    }

    .navbar-toggler:focus{
        box-shadow: none;
    }

    .navbar-toggler{
        border: none;
    }

    .sidebar{
        background-color: #ecedee;
        // backdrop-filter: blur(10px);
    }

    font-awesome-icon{
        line-height: 100%;
    }

    .offcanvas.offcanvas-start{
        width: 100% !important;
    }

    span,h1{
        font-family: 'Amatic SC', cursive;
        font-size: 2rem;
        color: black;
        &:hover{
            font-weight: bold;
        }
    }

    button{
        color: black;
        border: none;
    }

    @media screen and (max-width: 570px) {
        span{
            font-size: 1.6rem;
        }
    }

    @media screen and (min-width: 571px) and (max-width: 767px) {
        span{
            font-size: 1.6rem;
        }
    }
</style>