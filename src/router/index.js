import Vue from 'vue';
import Router from 'vue-router';
import FirstScreen from '@/components/FirstScreen';
import UserDetails from '@/components/UserDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstScreen',
      component: FirstScreen,
    },
    {
      path: '/:user',
      name: 'UserDetails',
      component: UserDetails,
    },
  ],
});
