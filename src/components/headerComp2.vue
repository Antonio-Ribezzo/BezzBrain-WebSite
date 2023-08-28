<script>
    export default {
        name: 'headerComp2',
    }
</script>

<template>
    <nav class="navbar navbar-expand-md my-3 py-0">
        <div class="container-fluid">
            <router-link :to="{ name: 'home'}" class="navbar-brand">
                <div>
                    <h1 class="m-0">bezzbrain</h1>
                </div>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <font-awesome-icon :icon="['fas', 'bars']" alt="Toggle navigation" class=""/>
            </button>
            <!-- sidebar  -->
            <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <button type="button" class="btn-close shadow-none ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <!-- sidebar body  -->
              <div class="offcanvas-body d-flex flex-column">
                <ul class="navbar-nav ms-md-auto gap-2 justify-content-center align-items-center flex-grow-1">
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'home'}" class="nav-link py-1"><span>home</span></router-link>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'projects'}" class="nav-link py-1"><span>projects</span></router-link>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'about-me'}" class="nav-link py-1"><span>about me</span></router-link>
                  </li>
                  <li class="nav-item" data-bs-dismiss="offcanvas">
                    <router-link :to="{ name: 'contacts'}" class="nav-link py-1"><span>contacts</span></router-link>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

    .sidebar{
        background-color: rgba(255, 255, 255, 0.65);
        backdrop-filter: blur(10px);
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
            font-size: 1.2rem;
        }
    }

    @media screen and (min-width: 571px) and (max-width: 767px) {
        span{
            font-size: 1.3rem;
        }
    }
</style>