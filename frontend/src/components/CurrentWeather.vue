<template>
    <div id="current-weather">
        <div class="location">{{location}}</div>
        <div class="weather">{{weather}}</div>
        <div class="temperature">{{temperature}}℃</div>
    </div>
</template>

<script>
    export default {
        name: 'current-weather',
        data(){
            return{
                location:'',
                weather:'',
                temperature:0,
                lat:37.566535,
                lng:126.977969
            }
        },
        created(){
            //컴포넌트가 생성될 때 이벤트버스의 이벤트를 받을 수 있도록 준비
            this.$bus.$on('sendCordinate',this.setCordinate)
        },
        methods:{
            setCordinate(cordinate){
                this.lat = cordinate.lat()
                this.lng = cordinate.lng()
                this.axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=67c78818c6afe50f6425fa397c98a955`)
                .then((response)=>{
                    let data = response.data
                    this.location = data.name
                    this.weather = data.weather[0].main
                    this.temperature = (data.main.temp-273.15).toFixed(1)
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
	.location {
		text-align : center;
		font-size : 40pt;
		color : black;
	}
	.weather{
		text-align : center;
		font-size : 20pt;
		font-weight : 100;
		color : black;
	}
	.temperature{
		text-align : center;
		font-size : 50pt;
		font-weight : 100;
		color : black;
	}
    div{
    margin:10px 5px 0 5px;
  }
</style>