<template>
    <v-app id="app">
      <v-main>
        <v-container
          style="position: relative; top: 20%; margin-left: 20%"
          class="text-xs-center"
        >
          <v-layout row wrap class="text-xs-center">
            <v-flex>
              <v-card flat class="mx-auto" max-width="800">
                <v-row style="margin-top: 60px">
                  <v-col>
                    <v-form style="width: 400px; height: 300px">
                      <div class="mx-3">
                        <v-icon color="black" size="30px">person</v-icon>
                        userId
                        <div class="mx-1">
                          <v-text-field
                            placeholder="userId"
                            v-model="userId"
                            required
                          ></v-text-field>
                        </div>
                      </div>
                      <div class="mx-3">
                        <v-icon color="black" size="30px">lock</v-icon>
                        userPassword
                        <div class="mx-1">
                          <v-text-field
                            placeholder="userPassword"
                            type="password"
                            v-model="userPassword"
                            required
                          ></v-text-field>
                        </div>
                      </div>
  
                      <v-card-actions>
                        <v-btn
                          color="#2c4f91"
                          dark
                          large
                          block
                          @click="loginSubmit"
                          >Login</v-btn
                        >
                      </v-card-actions>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    data() {
      return {
        urlinfo:'http://localhost:8000/login',
        userId: null,
        userPassword: null,
      };
    },
    methods: {
      loginSubmit() {
        let saveData = {};
        saveData.username = this.userId;
        saveData.password = this.userPassword;
  
        try {
            axios.post(this.urlinfo, qs.stringify(saveData), {
                headers: {
                    "Content-Type": `application/x-www-form-urlencoded`,
                },
                withCredentials:true
            },)
            .then((res) => {
              if (res.status === 200) {
                // 로그인 성공시 처리해줘야할 부분
              }
            });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>