<template>
  <div>
    <ul>
        <li v-for="item in itemsList" v-bind:key="item.name" v-on:click="item.show = !item.show">
            <h2>{{item.name}}</h2>
            <h3 v-show="item.show">{{item.category}}</h3>
            <button  v-show="item.show" v-on:click="deleteItem(item)">Delete</button>
        </li>
    </ul>

  </div>
</template>


<script>
import database from '../firebase.js'
export default {
  
  data(){
    return{
        itemsList: []
        }
  },
  methods:{
    fetchItems:function(){
      database.collection('items').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.show=false
            item.id=doc.id
            this.itemsList.push(item) 
            })      })    
        },
      deleteItem:function(del_item){
       database.collection('items')
       .doc(del_item.id).delete().then(()=>{
         var filteredItemList =this.itemsList.filter((itemf)=>itemf.id!==del_item.id);
         this.itemsList=filteredItemList
       });
      }   
        },
  created(){
      this.fetchItems()    
      }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#itemsList{
    width: 100%;
    max-width: 1000px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 8px;
}

</style>