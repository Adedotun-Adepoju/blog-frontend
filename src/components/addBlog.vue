<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label>Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Players</label>
            <input type="checkbox" value="players" v-model="blog.categories">
            <label>Clubs</label>
            <input type="checkbox" value="clubs" v-model="blog.categories">
            <label>Coaches</label>
            <input type="checkbox" value="coaches" v-model="blog.categories">
            <label>Countries</label>
            <input type="checkbox" value="countries" v-model="blog.categories">
        </div>
        <label for="author">Author</label>
        <select v-model="blog.author">
            <option v-for="(author, index) in authors" :key="index" :value="author">{{ author }}</option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories</p>
        <ul>
            <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
        </ul>
        <p>Blog Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import { axios } from  '../helpers/axiosConfig';
export default {
  data () {
    return {
       blog: {
           title:"",
           content:"",
           categories: [],
           author: ""
       },
       authors: ["Dotun", "Goke"],
       submitted:false
    }
  },
  methods: {
      async post(){
          await axios.post("http://127.0.0.1:3333/blog",{
              title: this.blog.title,
              content: this.blog.content,
              author: this.blog.author
          })
          this.submitted = true;
        }
    }
}
</script>

<style>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
    }
</style>
