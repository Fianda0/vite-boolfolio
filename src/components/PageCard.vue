<script>
import axios from 'axios';
export default {
    data() {
        return {
            url: 'http://localhost:8000/',
            projects: ''
        }
    },

    mounted() {
        axios.get(this.url + 'api/projects').then(response => {
            console.log(response.data);
            this.projects = response.data.projects
            console.log('progetti' + this.projects);

        })
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-wrap">

                <div v-for="progetto in this.projects.data">

                    <div class="card" style="width: 18rem;">

                        <div class="card-body">
                            <p class="card-text">
                                {{ progetto.titolo }}
                            <div v-if="progetto.immagine.startsWith('http')">

                                <img :src="progetto.immagine" class="card-img-top" alt="">
                            </div>
                            <div v-else>

                                <img :src="url + 'storage/' + progetto.immagine" class="card-img-top" alt="">
                            </div>
                            </p>
                            <div>
                                <router-link :to="{ name: 'project', params: { id: progetto.id } }">read
                                    more</router-link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>
