<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
    </div>
</template>

<script>
import { axios } from '../helpers/axiosConfig'
export default {
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    async created(){
        const response = await axios.get(`http://127.0.0.1:3333/blog/${this.id}`)
        console.log(response.data)
        this.blog = response.data;
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>