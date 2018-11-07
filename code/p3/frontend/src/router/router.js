import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Users from '@/components/Users'
import List from '@/components/List'
import Counter from '@/components/Counter'


Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
});


// router.beforeEach((to, from, next) => {
//
//   let currentUser = firebase.auth().currentUser;
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//   if (requiresAuth && ! currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('hello');
//   else next()
//
// });

export default router
