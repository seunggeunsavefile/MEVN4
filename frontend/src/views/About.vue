<template>
  <div>
    <h1>노래 인기순위</h1>
    <ul v-if="songs.length > 0">
      <li v-for="song in songs" :key="song._id">
        <img :src="song.img" alt="Song Thumbnail" style="width: 50px; height: 50px;">
        <span>{{ song.rank }}</span>
        <span>{{ song.song }}</span>
        <span>{{ song.artist }}</span>
      </li>
    </ul>
    <p v-else>No songs found</p>
  </div>
</template>

<script>
import axios from 'axios'; // Axios 사용을 위해 import

export default {
  data() {
    return {
      songs: [] // 노래 목록을 담을 배열
    };
  },
  created() {
    // 노래 목록을 가져오는 함수 호출
    this.fetchSongs();
  },
  methods: {
    // 노래 목록을 가져오는 함수
    async fetchSongs() {
      try {
        // Axios를 사용하여 백엔드 API에서 노래 목록 데이터를 가져옴
        const response = await axios.get('/api/songs'); // 해당 엔드포인트에 GET 요청
        this.songs = response.data; // 받아온 데이터를 Vue의 songs에 할당
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
