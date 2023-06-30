<script>
    import axios from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';

    import { store } from '../store';


    export default {
        name: 'ProjectsPage',
        components:{
            ProjectCard
        },
        data(){
            return{
                store,
                projects: [],
            }
        },

        mounted(){
            this.getProjects();
        },

        methods:{
          getProjects(){
            axios.get(`${this.store.base_Url}/api/projects`).then(res => {
              //nell'array vuoto 'projects' devo inserire i dati provenienti dall'api
            //   console.log(res.data.projects)
              this.projects = res.data.projects
            })
          }
        }
    }
</script>

<template>
   <h1 class="text-white text-center mb-5">Projects</h1>

   <div class='container d-flex justify-content-between align-items-start flex-wrap'>

        <ProjectCard 
          v-for="(el,index) in projects"
            :projectDetails="el"
            :projectIndex="index"
        />

    </div>
</template>

<style lang="scss" scoped>

</style>