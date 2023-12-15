<template>
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid h-auto">
            <a class="navbar-brand title-app" href="#">
                <b class="bi bi-cart4 logo-color text-color" id="logo-compras">HomeShopping | {{ userName }} ({{ typeUser
                }})</b>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link title-app text-color items-li">
                            <icon-component icon-name="fas fa-home"></icon-component>
                            Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/clientes" class="nav-link title-app text-color items-li">
                            <icon-component icon-name="fas fa-user-tie"></icon-component>
                            Clientes
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/visitas" class="nav-link title-app text-color items-li">
                            <icon-component icon-name="fas fa-newspaper"></icon-component>
                            Visitas
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/presupuestos" class="nav-link title-app text-color items-li">
                            <icon-component icon-name="fas fa-money-check-alt"></icon-component>
                            Presupuesto
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/ventas" class="nav-link title-app text-color items-li">
                            <icon-component icon-name="fas fa-tag"></icon-component>
                            Ventas
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <v-dialog v-model="dialog" persistent>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn plain class="nav-link title-app text-color item-btn" v-bind="attrs" v-on="on">
                                    <icon-component icon-name="fas fa-sign-out-alt"></icon-component>
                                    Cerrar sesión
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="text-h5 text-center">
                                    ¿Cerrar sesión?
                                </v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="gray darken-1" text @click="dialog = false">
                                        Cancelar
                                    </v-btn>
                                    <v-btn color="red darken-1" text @click="logout">
                                        Aceptar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
import RegistrarProveedorComponent from '../proveedores/ResgistrarProveedoresComponent.vue'
import IconComponent from '../iconc/IconComponent.vue'

export default {
    name: "NavComponent",
    components: {
        RegistrarProveedorComponent,
        IconComponent
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        logout() {
            this.dialog = false;

            this.$store.dispatch('logout');
            this.$router.push('/');
        },
    },
    computed: {
        userName() {
            return this.$store.state.user;
        },
        token() {
            return this.$store.state.token;
        },
        typeUser() {
            return this.$store.state.role;
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@500&display=swap');

* {
    font-family: 'Gabarito', sans-serif;
}

.text-color {
    color: #FFF;
    font-weight: 200;
}

.boton {
    background-color: #3c3c3c;
    border: solid 1px #3c3c3c;
    color: #FFF;
}

.boton:hover {
    background-color: #3c3c3c9a;
    border: solid 1px #3c3c3c9a;
}

.items-li {
    display: flex;
    gap: 5px;
}

.item-btn {
    color: #FFF !important;
}

.items-li:hover,
.item-btn:hover {
    transition: .3s all ease-in-out;
    color: rgb(171, 171, 171);
    background-color: transparent;
}
</style>