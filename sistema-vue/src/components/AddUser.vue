<template>
    <div class="d-flex align-center flex-column m-3">
        <v-card class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <v-card-item>
                <v-card-title>Registrar nuevo usuario</v-card-title>
                <v-card-subtitle>Crea un nuevo asesor de ventas o supervisor.</v-card-subtitle>
            </v-card-item>
            <v-sheet class="mx-auto p-5">
                <v-form ref="form">
                    <v-text-field v-model="user.userName" label="Nombre de usuario" :rules="nameRules"
                        autocomplete="off"></v-text-field>
                    <v-text-field v-model="user.password" label="Contraseña" autocomplete="off"
                        :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                        :rules="passwordRules"></v-text-field>
                    <v-text-field label="Repita la Contraseña" :type="showPassword ? 'text' : 'password'" autocomplete="off"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
                        :rules="confirmPasswordRules"></v-text-field>

                    <v-radio-group label="Seleccione el rol" row v-model="user.typeUser">
                        <v-radio label="Asesor de ventas" value="Asesor de ventas"></v-radio>
                        <v-radio label="Supervisor" value="Supervisor"></v-radio>
                    </v-radio-group>

                    <div class="d-flex flex-column">
                        <v-btn color="gray" class="mt-4" block @click="validate">
                            Guardar
                        </v-btn>
                    </div>
                </v-form>
            </v-sheet>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            user: {
            userName: null,
            password: null,
            typeUser: null,
            },
            showPassword: false,

        };
    },
    computed: {
        nameRules() {
            return [(v) => !!v || "Nombre de usuario es requerido"];
        },
        passwordRules() {
            return [
                (v) => !!v || "Contraseña es requerida",
                (v) => (v && v.length >= 8) || "Contraseña debe tener al menos 8 caracteres",
            ];
        },
        confirmPasswordRules() {
            return [
                (v) => !!v || "Repita la contraseña es requerida",
                (v) => v === this.user.password || "Las contraseñas no coinciden",
            ];
        },
    },
    methods: {
        validate() {
            axios
            .post("https://apitohommeshoppingapp.onrender.com/api/users", this.user)
            .then((response) =>{
                Swal.fire({
                    icon: "success",
                    title: "Guardado",
                    text: "se registro exitosamente el usuario",
                });
            }).catch((error) =>{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Hubo parece que hubo un error, intente nuevamente...",
                });
            });
        },
    },
};
</script>
  
<style scoped></style>