<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <v-btn
                outlined
                color="indigo"
                class="pa-1 ml-auto ma-1 d-flex align-end flex-column text-color"
                @click="navigateRegister">
                <v-icon dark class="iconnew">
                    mdi-plus
                </v-icon>
                Agregar Nuevo
                </v-btn>
                <v-card
                class="mx-auto"
                >
                    <v-card-text>
                        <div class="letter">Administración de Proveedores</div>
                        <p>Filtro de búsqueda</p>
                    </v-card-text>
                    <table-component></table-component>
                </v-card>
            </div>
        </div>
    </div>

</template>

<script>
import TableComponent from './TableComponent.vue';

export default {
    name: 'ManagerComponent',
    components: {
        TableComponent
    },
    methods: {
        navigateRegister() {
            this.$router.push('/registrar');
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gabarito:wght@500&display=swap');

* {
    font-family: 'Gabarito', sans-serif;
}

.letter {
    font-size: 22px;
}

</style>