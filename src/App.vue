<script>
  import axios from 'axios';
  import headerComp from './components/headerComp.vue';
  import ProjectCard from './components/ProjectCard.vue';

  import { store } from './store.js';


  export default{
    name: 'App',
    components:{
      headerComp,
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
          console.log(res.data.projects)
          this.projects = res.data.projects
        })
      }
    }
  }

</script>

<template>
  <headerComp/>

  <router-view></router-view>

  <!-- <div class='container d-flex justify-content-between align-items-start flex-wrap'>

    <ProjectCard 
      v-for="(el,index) in projects"
        :projectDetails="el"
        :projectIndex="index"
    /> -->

  <!-- <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th scope="col">n°</th>
        <th scope="col">Project Name</th>
        <th scope="col">Type of Project</th>
        <th scope="col">Project Link</th>
        <th scope="col">Technologies</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(el,index) in projects" :key="index">
            <th scope="row" class="align-middle">{{index + 1}}</th>
            <td class="align-middle">{{ el.title }}</td>
            <td class="align-middle">{{ el.type.name_type }}</td>
            <td class="align-middle">
                <a :href="el.link" target="_blank"> 
                    Click here!
                </a>
            </td>
            <td class="align-middle">
              <div v-if="el.technologies" class="my-3">
                <span v-for="(el,index) in el.technologies" :key="index" class="badge rounded-pill text-bg-light mx-1">{{ el.name }}</span>        
              </div>
            </td>
        </tr>
    </tbody>
  </table> -->

<!-- </div> -->
  
</template>

<style lang="scss">
  // importo il foglio di stile principale
  @use './style/main.scss' as *;

</style>
