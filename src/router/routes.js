import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue'
import ChatPage from '../pages/ChatPage.vue'
export default [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'login' },
      },
    { 
      path: '/login', 
      name: 'login',
      component: LoginPage, 
      meta: {
        auth: false,
      }
    }, 
    { 
        path: '/register', 
        name: 'register',
        component: RegisterPage, 
       
      }, 
      { 
        path: '/t', 
        name: 'chat',
        component: ChatPage, 
        meta: {
            auth: true
        }
      }, 
  ];