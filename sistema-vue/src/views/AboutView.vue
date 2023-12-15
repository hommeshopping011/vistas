<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    style="height: 100vh; margin: 0vh -100vh;"
  >
    <v-row
      align="center"
      justify="center"
      style="margin: 0;"
    >
      <v-col
        class="text-center"
        cols="12"
        style="margin: 0;"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          ¡Bienvenido de nuevo!
        </h1>
        <h4 class="subheading">
          {{ this.$store.state.user }}
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import RegisterComponent from "../components/AddUser.vue";

export default {
  name: "AboutView",
  components: {
    RegisterComponent,
  },
  computed: {
    userName() {
      return this.$store.state.user;
    },
    token() {
      return this.$store.state.token;
    },
  },
};
</script>
