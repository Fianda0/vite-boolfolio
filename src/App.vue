<script>
import axios from 'axios';

export default {
  name: 'App',
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
      <div class="col">
        <div class="card">
          <div class="card-body">
          </div>
          <div v-for="progetto in this.projects.data">
            {{ progetto.titolo }}
            <br>
            <div v-if="progetto.immagine.startsWith('http')">

              <img :src="progetto.immagine" alt="">
            </div>
            <div v-else>

              <img :src="url + 'storage/' + progetto.immagine" alt="">
            </div>
            <br>

          </div>
        </div>

      </div>
    </div>
  </div>



</template>

<style scoped></style>
