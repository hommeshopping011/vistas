<template>
  <v-app>

    <nav-component  v-if="!$route.meta.hideNav"/>

    <v-main class="container items-center align-center">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import NavComponent from './components/navegacion/NavComponent.vue';

export default {
  name: 'App',
  components: {
    NavComponent
  },

  data: () => ({
    //
  }),
};
</script>
