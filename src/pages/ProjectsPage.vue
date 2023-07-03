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
                currentPage:1,
                lastPage:null,
                type: null,
                selectedType:"all"
            }
        },

        mounted(){
            this.getProjects(1);
            this.getTypes();
        },

        methods:{
          getProjects(projectApiPage){

            const params = {
              page: projectApiPage
            }

            if(this.selectedType !== 'all'){
              params.type_id = this.selectedType
            }

            axios.get(`${this.store.base_Url}/api/projects`,{params}).then(res => {
              //nell'array vuoto 'projects' devo inserire i dati provenienti dall'api
            //   console.log(res.data.projects)
              
              this.projects = res.data.projects.data
              this.currentPage=res.data.projects.current_page
              this.lastPage=res.data.projects.last_page

            })
          },
          getTypes(){
            axios.get(`${this.store.base_Url}/api/type`).then(res => {
              this.type = res.data.types
            })
          }
        }
    }
</script>

<template>
   <h1 class="text-white text-center mb-5">Projects</h1>
  <div class="container my-4 d-flex justify-content-start">
    <select @change="getProjects()" v-model="selectedType" class="form-select form-select-sm" name="" id="">
     <option value="all">-- All --</option>
     <option v-for="(elem, index) in type" :key="index" :value="elem.id" >{{ elem.name_type }}</option>
    </select>
  </div>

   <div class='container d-flex justify-content-center gap-5 align-items-start flex-wrap mb-3'>

        <ProjectCard 
          v-for="(el,index) in projects"
            :projectDetails="el"
            :projectIndex="index + 1"
        />

    </div>

    <nav aria-label="Page navigation">
      <ul class="pagination pagination-sm justify-content-center">
        <li class="page-item">
          <a class="page-link bg-dark border-0" @click.prevent="getProjects(currentPage - 1)" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li class="page-item" :class="(currentPage === elem)? 'active' : ''" aria-current="page" v-for="(elem,index) in lastPage" :key="index">
          <a class="page-link bg-dark border-0" @click.prevent="getProjects(elem)" href="#" aria-label="Previous">
            {{elem}}
          </a>
        </li>

        <li class="page-item">
          <a class="page-link bg-dark border-0" @click.prevent="getProjects(currentPage + 1)" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      
      </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>