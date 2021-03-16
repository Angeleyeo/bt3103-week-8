<template>
    <div id="main">
        <div id="chart">
            <bar-chart></bar-chart>
        </div>
        <div id="chart">
            <line-chart></line-chart>
        </div>
        <div id="chart">
            <doughnut-chart></doughnut-chart>
        </div>
    </div>
</template>

<script>
import barchart from '../barchart.js'
import linechart from '../linechart.js'
import doughnut from '../doughnut.js'

export default{
    components:{
        'bar-chart':barchart,
        'line-chart':linechart,
        'doughnut-chart':doughnut
    }
}
</script>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:240px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:left;
}
</style>