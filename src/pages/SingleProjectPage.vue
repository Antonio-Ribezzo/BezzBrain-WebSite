<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SingleProjectPage',
        data(){
            return{
                store,
                project:[]
            }
        },
        mounted(){
            console.log(this.$route);
            this.getSingleProject();
            // console.log(this.$project)
        },
        methods:{
            getSingleProject(){
                axios.get(`${this.store.base_Url}/api/projects/${this.$route.params.id}`).then((response)=>{
                    if(response.data.success===true){
                        this.project = response.data.project;
                        console.log(response.data.project)
                        console.log(this.project)
                    }else{
                        //redirect to 404 page
                        this.$router.push({name: 'not-found'})
                    }
                })
            }
        }
    }
</script>

<template>
    <div class='container d-flex flex-column align-items-center justify-content-center my-5 position-relative text-white'>   
        <div class="card p-3 mb-2">
            <img :src="store.base_Url + '/storage/' + project.cover_image " :alt="project.title" class="card-img-top">
        </div>
        <h2 class="mt-2 mb-0">{{project.title}}</h2>
        <!-- technologies -->
        <div v-if="project.technologies" class="my-2">
            <span v-for="(el,index) in project.technologies" :key="index" class="badge rounded-pill text-bg-light mx-1">{{el.name}}</span>        
        </div>
        <p>{{ project.description }}</p>
        <!-- type -->
        <p v-if="project.type">
            {{ project.type.name_type }}
        </p>
        <h6 class="card-subtitle mb-2"><span class="text-decoration-underline">Buyer</span>: {{ project.buyer }}</h6>
        <h6 class="card-subtitle my-2"><span class="text-decoration-underline">Link</span>:<a :href="project.link" target="_blank" class="ms-1 card-link">Click here!</a></h6>
        <!-- <a class="mt-2 btn btn-outline-light rounded-circle position-absolute" href="{{route('admin.project.index')}}" style="top:-4rem; left:10rem;">
            <i class="fa-solid fa-arrow-left"></i>
        </a> -->
    </div>
</template>

<style lang="scss" scoped>


</style>