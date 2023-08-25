<script>
    export default {
        name: 'headerComp'
    }
</script>

<template>
    <nav class="navbar navbar-expand-md my-3 py-0">
            <div class="container-fluid">

                <router-link :to="{ name: 'home'}" class="navbar-brand">
                    <div>
                        <span class="m-0">bezzbrain</span>
                    </div>
                </router-link>

                <!-- humburger -->
                <button class="navbar-toggler border-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <font-awesome-icon :icon="['fas', 'bars']" alt="Toggle navigation" class=""/>
                </button>



                <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav ms-auto gap-2">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home'}" class="nav-link px-1 py-1"><span>home</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects'}" class="nav-link px-1 py-1"><span>projects</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about-me'}" class="nav-link px-1 py-1"><span>about me</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contacts'}" class="nav-link px-1 py-1"><span>contacts</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
    span{
        font-family: 'Amatic SC', cursive;
        font-size: 2rem;
        // font-weight: bold;
        color: black;
        &:hover{
            font-weight: bold;
        }
    }

    button{
        color: black;
        border: none;
    }
</style>