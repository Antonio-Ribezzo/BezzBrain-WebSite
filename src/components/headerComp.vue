<script>
    export default {
        name: 'headerComp'
    }
</script>

<template>
    <nav class="navbar navbar-expand-md">
            <div class="container">

                <a class="navbar-brand" href="#">
                    <div>
                        <img src="img/sfondo-trasparente-bezz.png" alt="logo-navbar" class="img-fluid" style="height:150px">
                    </div>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>



                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                    
                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav">
                        
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style lang="scss" scoped>

</style>