<template>
    <div>
      <div class="card m-4 col-8 shadow mb-5 bg-body rounded">
        <div class="card-header"><h2>Nuevo Proveedor</h2></div>
        <div class="card-body">
          <div class="m-2">
            <h6>Datos generales</h6>
  
            <div class="row mb-2">
              <div class="col-md-3">
                <v-text-field label="RFC *" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Razon social *" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Contacto *" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-autocomplete
                  label="Estado"
                  :items="[
                    'Hidalgo',
                    'Estado de Mexico',
                    'Veracruz',
                    'Sonora',
                    'Monterrey',
                    'Campeche',
                  ]"
                  outlined
                ></v-autocomplete>
              </div>
            </div>
  
            <div class="row mb-2">
              <div class="col-md-3">
                <v-text-field label="Tel. Principal *" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Tel movil" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Email" outlined></v-text-field>
              </div>
            </div>
          </div>
  
          <div class="m-2">
            <h6>Datos personales</h6>
  
            <div class="row mb-3">
              <div class="col-md-3">
                <v-text-field label="Codigo postal *" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Numero interior" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Numero exterior" outlined></v-text-field>
              </div>
            </div>
  
            <div class="row mb-3">
              <div class="col-md-3">
                <v-text-field label="Calle" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-text-field label="Colonia" outlined></v-text-field>
              </div>
              <div class="col-md-3">
                <v-autocomplete
                  label="Entidad"
                  :items="[
                    'Hidalgo',
                    'Estado de Mexico',
                    'Veracruz',
                    'Sonora',
                    'Monterrey',
                    'Campeche',
                  ]"
                  outlined
                ></v-autocomplete>
              </div>
              <div class="col-md-3">
                <v-autocomplete
                  label="Municipio"
                  :items="[
                    'Tula de Allende',
                    'Tetepango',
                    'Tepeji del Rio',
                    'Mineral del Monte',
                    'Ajacuba',
                    'Atitalaquia',
                  ]"
                  outlined
                ></v-autocomplete>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RegistrarProveedores",
  };
  </script>
  