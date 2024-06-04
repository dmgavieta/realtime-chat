import { createApp } from 'vue'
import './style.css' 
import router from './router'
import App from './App.vue' 
import { initializeApp } from "firebase/app"; 
 
const firebaseConfig = {
  apiKey: "AIzaSyBfPUouEWQFd0XXF_6ol0iLR_NCyuFm0QA",
  authDomain: "realtime-chat-proj.firebaseapp.com",
  projectId: "realtime-chat-proj",
  storageBucket: "realtime-chat-proj.appspot.com",
  messagingSenderId: "1047707809283",
  appId: "1:1047707809283:web:c9e47f0cf10b2aba7fc036"
};

initializeApp(firebaseConfig); 

createApp(App).use(router).mount('#app')
