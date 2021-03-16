import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends: Line,
    data: () => ({
        results:[],
        chartdata: {
          labels:[],
          datasets: [
            {
              label: 'Count of MRT Usage-Singapore',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"red",
              backgroundColor:'red',
              fill:false
            },
            {
                label: 'Count of LRT Usage-Singapore',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"orange",
                backgroundColor:'orange',
                fill:false
              },
              {
                label: 'Count of Bus Usage-Singapore',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"yellow",
                backgroundColor:'yellow',
                fill:false
              },
              {
                label: 'Count of Taxi Usage-Singapore',
                 data:[],
                //backgroundColor:['aqua','lightgreen','red','orange'],
                borderWidth:0.5,
                borderColor:"green",
                backgroundColor:'green',
                fill:false
              }
          ]
          
        },
        options: {
           
            scales:{
                yAxes:[{
                    ticks:{
                        min:0,
                    }

                }],
                xAxes: [ {
                    gridLines: {
                      display: false
                    },
                    ticks: {
                        min:0,
                    }
                  }]
            }
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
            //console.log(response.data)
        this.results=response.data.result.records
        
        //console.log(this.results)
        for(let key in this.results){
            if(key>41){

                if (this.results[key]['type_of_public_transport'] == "MRT") {
                  console.log(this.chartdata.datasets[0].data);
                    this.chartdata.datasets[0].data.push(this.results[key]['average_ridership'])
                    this.chartdata.labels.push(this.results[key]['year']+'')
                }
                else if (this.results[key]['type_of_public_transport'] == "LRT") {
                    this.chartdata.datasets[1].data.push(this.results[key]['average_ridership'])
                    this.chartdata.labels.push(this.results[key]['year']+'')
                }
                else if (this.results[key]['type_of_public_transport'] == "Bus") {
                    this.chartdata.datasets[2].data.push(this.results[key]['average_ridership'])
                    this.chartdata.labels.push(this.results[key]['year']+'')
                }
                else if (this.results[key]['type_of_public_transport'] == "Taxi") {
                    this.chartdata.datasets[3].data.push(this.results[key]['average_ridership'])
                    this.chartdata.labels.push(this.results[key]['year']+'')
                }
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