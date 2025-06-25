<script>
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
            currentPage:1,
            lastPage:null,
            type: null,
            selectedType:"all",
            technologies: null,
            selectedTechnologies: []
          }
        }
    }
</script>

<template>
  <!-- <h1 class="text-white text-center mb-4">Projects</h1> -->


  <div class="container mb-4 d-flex flex-row justify-content-start align-items-start px-5">

    
      

  </div>

  

</template>

<style lang="scss" scoped>
  select{
    background-color: #212529;
    &:hover{
      cursor: pointer;
      background-color: #424649;
    }
  }
</style>