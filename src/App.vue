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

  <p v-for="progetto in this.projects.data">{{ progetto.titolo }}</p>

</template>

<style scoped></style>
