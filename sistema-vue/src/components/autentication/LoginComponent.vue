<template>
  <div
    class="container container align-items-center justify-content-center w-100"
  >
    <div class="row w-100">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 w-100">
        <v-card elevation="4" width="500" class="mx-auto justify-md-center">
          <v-toolbar class="bg-secondary">
            <v-toolbar-title class="title-nav bar-text">
              <i class="fas fa-user-lock"></i> &nbsp; ¡Bienvenido!
            </v-toolbar-title>
          </v-toolbar>
          <form @submit.prevent="handleForm">
            <v-card-text>
              <v-text-field
                label="Nombre del usuario"
                v-model="user.userName"
                color="indigo"
                class="input-group--focused"
              ></v-text-field>
              <div class="text--primary">
                <v-text-field
                  v-model="user.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Contraseña"
                  hint="8 caracteres como mínimo"
                  value="wqfasds"
                  class="input-group--focused"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </div>
            
            </v-card-text>
            <p v-if="error === true" class="w-auto text-center error ml-5 mr-5">
              {{ message }}
            </p>
            <v-card-actions
              class="container d-flex align-items-center justify-content-center"
            >
              <v-btn
                outlined
                class="ma-1 pa-4 center bg-secondary"
                color="white"
                @click="validateUser"
              >
                Login
              </v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        userName: "",
        password: "",
      },
      token: "",
      show1: false,
      message: "",
      error: false,
      userType: null
    };
  },
  methods: {
    validateUser() {
    axios
      .post("https://apitohommeshoppingapp.onrender.com/api/login", this.user)
      .then((response) => {
        this.token = response.data.token;
        this.userType = response.data.typeUser;

        
        this.$router.push("/about");
        this.$store.commit("setLoggedIn", true);
        this.$store.dispatch("setToken", this.token);
        this.$store.dispatch("setUserType", this.userType);
        this.$store.dispatch("setUser", this.user.userName);
      })
      .catch((error) => {
        this.message = "Credenciales inválidas";
        this.error = true;
        Swal.fire({
                        icon: "error",
                        title: "Error al iniciar Sesión",
                        text: "Hubo parece que hubo un error, intente nuevamente...",
                    });
      });
  },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push("/about");
    }
  },
};
</script>

<style>
.title-nav {
  color: #fff !important;
  font-family: "Roboto", "San-serif";
  font-weight: 400;
}
.title-nav-bar-text {
  font-family: "Roboto", "San-serif";
  font-weight: 300;
}


/*

<template>
  <v-container class="px-0 row" fluid>
    <v-radio-group v-model="radioGroup" class="row">
      <v-radio
        v-for="n in roles"
        :key="n"
        :label="`${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>
*/
</style>
