<template>
<div id=app>
    <h1>{{msg}}</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text" v-model.lazy="item.name" required/>
        <label>Item Category</label>
        <input type="text" v-model="item.category" required/>
        <button v-on:click.prevent="addItem">Add Item</button>
        
    </form>
  </div>

</template>

<script>
import database from '../firebase.js'
export default {
    data(){
    return{
           msg:"Add Item",
           item:{
               name:"",
               category:""

           }
        }
  },
  methods:{
      addItem:function(){
          database.collection('items').add(this.item)
          alert(this.item.name + " saved to database");
          this.item.name="";
          this.item.category="";
      }
  }

}
</script>

<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}
p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;
}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}
</style>
