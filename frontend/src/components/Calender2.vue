<template>
  <v-app>
    <div
      class="ma-4"
      style="height: 50%"
    >
      <v-calendar
        :events="events"
        now="2022-11-22"
      ></v-calendar>
    </div>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data: () => {
    return {
      events: [
        {
          name: 'Event 1',
          start: '2022-11-01',
          timed: false,
        },
        {
          name: 'Event 2',
          start: '2022-11-05',
          end: '2022-04-07',
        },
        {
          name: 'Event 3',
          start: '2022-11-09T08:00:00',
          end: '2022-11-09T10:00:00',
          timed: true,
        },
      ],
    };
  },
};
</script>