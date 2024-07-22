<script>
import axios from 'axios';

export default {
    name: 'SingolCard',
    data() {
        return {
            base_url: 'http://localhost:8000/',
            project: ''
        }
    },
    mounted() {
        const url = `${this.base_url}api/projects/${this.$route.params.id}`
        axios.get(url).then(response => {
            console.log(response.data);
            this.project = response.data.project
        })
    }
}
</script>

<template>
    <div v-if="project">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1>{{ project.titolo }}</h1>
                </div>
                <div class="col-8">
                    <div v-if="project.immagine.startsWith('http')">
                        <img :src="project.immagine" class="card-img-top" alt="">
                    </div>
                    <div v-else>

                        <img :src="url + 'storage/' + project.immagine" class="card-img-top" alt="">
                    </div>
                </div>
                <div class="col-8">
                    <p>Descrizione: {{ project.descrizione }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
