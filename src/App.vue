<template>
  <div>
     <app-header></app-header>
     <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import Header from './components/header.vue'
export default {
  components:{
    'addBlog': addBlog,
    showBlogs,
    listBlogs,
    'app-header':Header
  },
  data () {
    return {
     
    }
  },
  methods: {
    
  }
}
</script>

<style>
  body{
    margin: 0;
  }
</style>
