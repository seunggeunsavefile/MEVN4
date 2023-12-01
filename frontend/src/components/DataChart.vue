<script>
import axios from 'axios'
import { Line } from "vue-chartjs"

const API_URL = 'http://localhost:8000/datas/'

export default {
	name: 'line-chart',
    extends: Line,
    data(){
        return {
            linedata: {
                labels: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
                ],
                datasets: [
                    {
                        label: "Temperature",
                        data: [2, 10, 5, 9, 0, 6, 20],
                        backgroundColor: "transparent",
                        borderColor: "rgba(1, 116, 188, 0.50)",
                        pointBackgroundColor: "rgba(171, 71, 188, 1)"
                    }
                ]
            }
        }
    },
    mounted() {
        console.log(this.bardata)
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
                this.linedata.datasets[0].data[index] = value['temperature']
                console.log(value['temperature'])
            });
            this.renderChart(this.linedata, {
                responsive: true,maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "My Data"
                }
            });
        })
        .catch((err) => {
        alert('에러 발생: ' + err); //에러 발생
        });          
      }
  }
};
</script>