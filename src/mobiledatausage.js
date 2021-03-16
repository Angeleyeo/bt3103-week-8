import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          
          labels:[],
          datasets: [
            {
              label: 'Mobile Data Usage-Singapore',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"orange",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=a807b7ab-6cad-4aa6-87d0-e283a7353a0f').then(response=>{
            //console.log(response.data)
        this.results=response.data.result.records
        
        //console.log(this.results)
        for(let key in this.results){
            if(key>41){
                
            this.chartdata.datasets[0].data.push(this.results[key]['volume_of_mobile_data'])
            this.chartdata.labels.push(this.results[key]['quarter']+'')
            //console.log(key+' '+ this.results[key]['quarter'])
            }
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
        //console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}