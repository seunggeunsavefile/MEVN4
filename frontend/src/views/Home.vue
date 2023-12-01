<template>
  <div class="home">
    <v-container fluid>
        <v-row>
            <v-col>
                <p style="font-size:300%">플랫폼 별 게임 리스트 입니다</p>
            </v-col>
        </v-row>
        <v-row>
           
        </v-row>
        <v-row>
            <v-col>
                <data-table/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <data-chart2/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <calender2/>
            </v-col>
            <v-col>
                <date-picker v-on:newDate="dateUpdate"></date-picker>
            </v-col>
            <v-col>
                <live-view/>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>
<script>
import DeviceTable from '../components/DeviceTable';
import DataTable from '../components/DataTable';
import GoogleMap from '../components/GoogleMap';
import CurrentWeather from '../components/CurrentWeather';
import DataChart2 from '../components/DataChart2';
import Calender2 from '../components/Calender2';
import DatePicker from '../components/DatePicker';
import LiveView from '../components/LiveView';

export default {
  name: 'App',
  components: {
    DeviceTable,
    DataTable,
    CurrentWeather,
    GoogleMap,
    DataChart2,
    Calender2,
    DatePicker,
    LiveView
  },
  data: () => ({
    //
  }),
  methods:{
    dateUpdate(date){
        alert(date);
    }
  }
}
</script>
