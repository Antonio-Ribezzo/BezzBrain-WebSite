<script>
    import { store } from '../store.js';

    export default {
        name: 'ProjectCard',
        props: ['projectDetails','projectIndex'],
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="card mb-5 bg-dark text-white">
        <img class="card-img-top" :src="store.base_Url + '/storage/' + projectDetails.cover_image " :alt="projectDetails.title">
        <div class="card-body">
            <h2 class="card-title text-center text-white">{{ projectDetails.title }}</h2>
            <h6 class="text-center text-capitalize">project: {{ projectIndex + 1 }}</h6>

            <div v-if="projectDetails.technologies" class="my-3 text-center">
                <span v-for="(el, index) in projectDetails.technologies" :key="index" class="badge rounded-pill text-bg-light mx-1">
                    {{ el.name }}
                </span>
            </div>

            <p class="card-text"><span class="text-decoration-underline">Description</span>: {{ projectDetails.description }}</p>

            <p v-if="projectDetails.type" class="card-text"><span class="text-decoration-underline">Type of project</span>: {{ projectDetails.type.name_type }}</p>

            <p class="card-text"><span class="text-decoration-underline">Buyer</span>: {{ projectDetails.buyer }}</p>

            <p class="card-text"><span class="text-decoration-underline">Date</span>: {{ projectDetails.project_date }}</p>
        </div>
        <router-link :to="{name: 'project', params:{ id: projectIndex} }" class="btn btn-success">GO</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        width: calc(95% / 2);
        height: 38rem;
            &:hover{
            scale: 105%;
            cursor: pointer;
            box-shadow: 0 4px 8px 0 rgba(228, 225, 225, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
            }
        img{
            width: 100%;
            height: 15rem;
        }
    }

</style>