<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SingleProjectPage',
        data(){
            return{
                store,
                project:null
            }
        },
        mounted(){
            console.log(this.$route);
            this.getSingleProject();
        },
        methods:{
            getSingleProject(){
                axios.get(`${this.store.base_Url}/api/projects/${this.$route.params.id}`).then((response)=>{
                    if(response.data.success){
                        this.project = response.data.project;
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
    <div class="text-white">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
    </div>
</template>

<style lang="scss" scoped>


</style>