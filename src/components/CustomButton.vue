<template>
    <div>
        <button>{{buttonName}}</button>    
    </div>    
</template>


<script>
    export default {
        props:{
            buttonName:{
                type:String
            }
        }

    }
</script>
<style>
    button{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
    text-align: center;
    color: #bb0d38a8;
    }
</style>
