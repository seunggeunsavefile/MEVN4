<template>
    <div id="live-view">
        <div class="id">{{deviceId}}</div>
        <div class="temperature">{{temperature}}℃</div>
        <div class="humidity">{{humidity}}%</div>
    </div>
</template>

<script>
    export default {
        name: 'live-view',
        data(){
            return{
                deviceId:1,
                temperature:2,
                humidity:50
            }
        },
        created(){      //컴포넌트가 생성될 때 이벤트버스의 이벤트를 처리
            this.$socket.on('live',(data)=>{
                this.deviceId = data.deviceId;
                this.temperature = data.temperature;
                this.humidity = data.humidity;
            })       
        },
    }
</script>

<style scoped>
	.id {
		text-align : center;
		font-size : 50pt;
		color : black;
	}
	.temperature{
		text-align : center;
		font-size : 50pt;
		font-weight : 100;
		color : black;
	}
	.humidity{
		text-align : center;
		font-size : 50pt;
		font-weight : 100;
		color : black;
	}
</style>