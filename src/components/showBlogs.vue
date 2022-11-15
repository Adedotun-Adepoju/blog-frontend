<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for="(blog, index) in filteredBlogs" :key="index" class="single-blog">
            <router-link v-bind:to="`/blog/${blog.id}`" >
                <h2>{{ blog.title.toUpperCase() }}</h2>
            </router-link>
            <article>{{ blog.content | snippet }}</article>
        </div>
    </div>
</template>

<script>
import { axios } from  '../helpers/axiosConfig';
export default {
  components:{

  },
  data () {
    return {
        blogs: [],
        search: ""
    }
  },
  methods: {
    
  },
  async created(){
      const response = await axios.get("http://127.0.0.1:3333/blog/")
      console.log("data",response.data);
      this.blogs = response.data;
  },
  computed:{
      filteredBlogs: function(){
          return this.blogs.filter((blog) =>{
              return blog.title.match(this.search)
          })
      }
  }
}
</script>

<style>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        margin: 20px 0;
        padding: 20px;
        box-sizing: border-box;
        background: #eee;
    }
</style>
