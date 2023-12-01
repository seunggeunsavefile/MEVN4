<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="bDrawer=!bDrawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Header입니다</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to="/login"><v-btn class="pink">로그인</v-btn></router-link>
        </v-app-bar>
        <v-navigation-drawer absolute temporary v-model="bDrawer">
            <v-toolbar flat height="100px">
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar>
                                <img src="http://randomuser.me/api/portraits/men/44.jpg">
                            </v-list-item-avatar>
                            <v-list-item-title class="title">관리자 페이지</v-list-item-title>
                            <v-list-item-subtitle></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list class="pt-3">
                <v-list-item v-for="item in items" :key="item.text" :href="item.to">
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer>
            <v-btn text value="서비스 안내">
                <v-icon>목원대학교 정보통신공학과</v-icon>
            </v-btn>
        </v-footer>
    </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {     
      return {
      bDrawer: false,
      items: [
        { text: '제어판', icon: 'mdi-star' , to:'/home'},
        { text: '안내판', icon: 'mdi-account-multiple', to:'/about' },
        { text: 'Starred', icon: 'mdi-star' },
      ],
      }
  },
  created(){
    this.$socket.emit('rint',{data:"First Request"});
  }
};
</script>
<style scoped>
    a {text-decoration:none; color:white;}
</style>
