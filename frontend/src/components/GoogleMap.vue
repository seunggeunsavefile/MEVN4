<template>
<div>
	<div id = "map-canvas"/>
</div>
</template>
<!--
<script 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC77x_P0LVvPV02N_nWJGP0Ed5WW8gCy3M">
</script>-->
<script>
	export default {
		name: 'map-canvas',
        mounted(){
            this.initMap();
            this.setMarker(this.mapCenter,"ce"); 
        },
        methods: {
            initMap() {
                this.map = new google.maps.Map(document.getElementById("map-canvas"), { //getElementById로 map id 속성의 요소를 가져온다.
                    center: this.mapCenter, //center로 할 위도, 경도를 지정한다.
                    zoom: 12, //zoom size를 지정.
                    maxZoom: 20,
                    minZoom: 3,
                    streetViewControl: true,
                    mapTypeControl: true,
                    fuulscreenControl: true,
                    zoomControl: true,
                });
                this.$bus.$emit('sendCordinate', this.map.getCenter());    //처음 마운트될 때 구글맵 좌표를 전달
            },
            setMarker(Points, Label) {//지도에 마커를 찍는 함수.
                const markers = new google.maps.Marker({
                    position: Points,
                    map: this.map,
                    label: {
                    text: Label,
                    color: "#FFF",
                    },
                });
                this.map.addListener('center_changed', () => {
                    markers.setPosition(this.map.getCenter());
                });  
                this.map.addListener('dragend', () => {
                    this.$bus.$emit('sendCordinate',this.map.getCenter());
                });  
            },
        },
        data() {
            return {
                map: null,
                mapCenter: { lat: 35.105696, lng: 129.042857 },
            };
        },
    };
</script>

<style scoped>
	#map-canvas{
		width: 100%;
		height: 300px;
	}
</style>