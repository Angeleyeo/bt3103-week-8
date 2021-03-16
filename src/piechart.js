import {Pie} from 'vue-chartjs'
export default{
    extends: Pie,
    data: () => ({
        chartdata: {
            labels: ['MRT', 'LRT', 'Bus', 'Taxi'],
            datasets: [
                {
                    label: 'Average Ridership',
                    data:[100, 200, 300, 400],
                    backgroundColor:['aqua','lightgreen','red','orange'],
                    borderWidth:0.5,
                    borderColor:"#000",
                    fill:false
                }
            ]
        },
        options: {

            layout:{
                padding:{
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 10
                }
          
            }
            
        }
    }),

    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}