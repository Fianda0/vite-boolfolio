<script>
import axios from 'axios';

export default {
    name: 'SingolCard',
    data() {
        return {
            base_url: 'http://localhost:8000/',
            projects: ''
        }
    },
    mounted() {
        const url = `${this.base_url}/api/projects/${this.$route.params.id}`
        axios.get(url).then(response => {
            console.log(response.data);
            // this.projects = response.data.projects
            // console.log('progetti' + this.projects);

        })
    }
}
</script>

<template></template>

<style></style>
