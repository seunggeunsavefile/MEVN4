<template>
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      @click:date="Click"
      :allowed-dates="allowedDates"
      class="mt-4"
      min="2016-06-15"
      max="2018-03-20"
    ></v-date-picker>
    <p>
        Month:{{date}}
        Year:{{date}}
    </p>
  </v-row>

</template>
<script>
  export default {
    data: () => ({
      date: '2018-03-02',
    }),

    methods: {
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      Click(date){
        this.$emit('newDate',date)
      }
    },
  }
</script>