<template>
    <LineChartGenerator
      id="my-chart-id"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</template>
<script>
import axios from 'axios'
import { Line as LineChartGenerator} from "vue-chartjs/legacy"
import { Chart as ChartJS,Title,Tooltip,Legend,LineElement,LinearScale,CategoryScale,PointElement } from 'chart.js'
const API_URL = 'http://localhost:8000/datas/'

ChartJS.register(  Title,
  Tooltip,Legend,LineElement,LinearScale,CategoryScale,PointElement)

export default {
	name: 'LineChart',
    components:{LineChartGenerator},
    props: {
        chartId: {
        type: String,
        default: 'line-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 400
        },
        height: {
        type: Number,
        default: 400
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Array,
        default: () => []
        }
    },
    data(){
       return {
            chartData: {
                labels: ["1","2","3","4","5","6","7"],
                datasets: [
                    {
                        label:'Data One',
                        backgroundColor: 'f87979',
                        data: []
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    created(){
        this.$bus.$on('deviceSelected',this.refleshData)
    },
    methods: {
      refleshData(data) {
        axios.get(API_URL+data.deviceId) //서버에 요청하기
        .then((response) => {            
            var data = response.data
            data.forEach((value,index)=>{
                this.chartData.datasets[0].data[index] = value['temperature']
                console.log(value['temperature'])
            });
        })
        .catch((err) => {
        alert('에러 발생: ' + err); //에러 발생
        });          
      }
  }
};
</script>