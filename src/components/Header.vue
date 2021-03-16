<template>
   <div>
    <header>
        <h1>{{ msg }}</h1>
        <router-link to="/" exact>Home </router-link>
        <router-link to="/list" exact>List </router-link>
        <router-link to="/add" exact>Add Item</router-link>
        <router-link to="/axios" exact>Axios</router-link>
    </header>
    </div>
  
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'Online Bakery'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    border-style: solid;
    border-color:black;
    border-width: 2px;
    height: 95px;
    text-align: top;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
h1{
    color:ivory
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>