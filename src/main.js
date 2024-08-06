// main.js는 vue 애플리케이션의 시작점
import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 파일의 router를 사용하겠다 선언
import router from '@/router/index.js'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios';


// createApp(App).mount('#app')
const app = createApp(App);

// axios 요청 인터셉처를 설정하여 모든 요청에 액세스 토큰을 포함
axios.interceptors.request.use(
    config =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error =>{
        // 에러가 발생하면 해당 인터셉터가 무시되고, 사용자의 본래 요청인 화면으로 라우팅
        return Promise.reject(error);
    }
)
// 401응답을 받을 경우에 interceptor를 통해 전역적으로 rt를 통한 at 재발급
// 만약 rt도 401 응답을 받을 경우에 token 제거 후 login화면으로 리다이렉트

app.use(router);
app.use(vuetify);
app.mount('#app');

