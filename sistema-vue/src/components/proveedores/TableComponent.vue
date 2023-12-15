<template>
  <v-data-table
    :headers="headers"
    :items="providers"
    sort-by="contacto"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          <i class="fas fa-user-tie"></i>
          Proveedores
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical> </v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      formTitle: "Agregar Proveedor",
      providers: [],
      headers: [  
        {
          text: "Contacto", 
          value: "contacto" 
        },
        {
          text: "Razon Social",
          value: "razonSocial"
        },
        {
          text: "RFC",
          value: "rfc"
        },
        {
          text: "Telefono",
          value: "telefono"
        },
        {
          text: "Correo",
          value: "email"
        },
        {
          text: "Direccion",
          value: "direccion"
        },
        {
          text: "Estado",
          value: "estado"
        }
        // Agrega más columnas aquí según tus necesidades
      ]
    };
  },
  methods: {
    fetchProviders() {
      axios.get("https://apitohommeshoppingapp.onrender.com/api/providers").then((response) => {
        this.providers = response.data;
      });
    },
  },
  created() {
    this.fetchProviders();
  },
};
</script>
