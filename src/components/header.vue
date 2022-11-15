<template>
    <nav class="nav-bar">
        <ul class="nav-elements">
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a New Blog</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
       
    }
  }
}
</script>

<style scoped>
    nav{
        background: #444;
        padding: 14px 0px;
        margin-bottom: 40px;
    }
    ul{
        text-align: center;
        margin: 0;
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }
    .router-link-active{
        background: #eee;
        color: #444 ;
    }
</style>
