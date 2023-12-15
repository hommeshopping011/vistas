<template>
  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <template>
          <ValidationObserver ref="form" v-slot="{ invalid }">
          <v-card class="mx-auto">
            <v-card-text>
              <p class="text-h4 text--primary">Nuevo Proveedor</p>
              <div>Datos generales</div>
                <div class="text--primary">
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="rfc"
                        rules="max:13|required|min:12|validateRFC"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Rfc *"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.rfc"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="razon social"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Razon social *"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.razonSocial"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="contacto"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Contacto *"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.contacto"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="estados"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-select
                          v-model="provider.estado"
                          :items="estados"
                          filled
                          outlined
                          label="Estado *"
                          dense
                          :error-messages="errors"
                        >
                        </v-select>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="telefono principal"
                        rules="required|onlyNumbers"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Tel principal *"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.telefono"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="telefono movil"
                        rules="onlyNumbers"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Tel. Movil"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.telmovil"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="correo"
                        rules="validateMail|required"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Email *"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.email"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div>Direccion</div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="codigo postal"
                        rules="required|validationCP|max:5|min:5"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Codigo Postal *"
                          placeholder="Codigo Postal"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.cp"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="numero interior"
                        rules="validateNumber"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Numero interior"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.nexterior"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider name="numero exterior" rules="validateNumber" v-slot="{ errors }">
                        <v-text-field
                        label="Numero exterior"
                        outlined
                        color="indigo"
                        clearable
                        dense
                        v-model="provider.ninterior"
                        :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="calle"
                        rules="validateCalle"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Calle"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.calle"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="colonia"
                        rules="validateCalle"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          label="Colonia"
                          outlined
                          color="indigo"
                          clearable
                          dense
                          v-model="provider.colonia"
                          :error-messages="errors"
                        ></v-text-field>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="entidad"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-select
                          v-model="provider.entidad"
                          :items="entidades"
                          filled
                          outlined
                          label="Entidad *"
                          dense
                          item-text="nombre"
                          item-value="nombre"
                          @input="buscarMunicipios"
                          :error-messages="errors"
                        ></v-select>
                      </ValidationProvider>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <ValidationProvider
                        name="municipio"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <v-select
                          v-model="provider.municipio"
                          :items="municipiosEntidad"
                          filled
                          outlined
                          label="Municipio *"
                          dense
                          :error-messages="errors"
                        ></v-select>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn class="deep-red accent-4" @click="saveProvider" :disabled="invalid">
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </ValidationObserver>
        </template>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4 text-h5 text-center">
                Detalle de Proveedor
              </div>
              <v-list-item-title class="text-h8 mb-1 text-center">
                Datos capturados
              </v-list-item-title>
              <v-list-item-avatar tile size="" color="transparent">
                <v-img src="@/assets/perfil.png" 
                  max-height="300"
                  max-width="154"></v-img>
              </v-list-item-avatar>
              <v-divider></v-divider>
                <v-list-item-subtitle>
                  Provedor: {{ provider.razonSocial }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Contacto: {{ provider.contacto }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Rfc: {{ provider.rfc }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Telefono: {{ provider.telefono }}
                </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="d-flex justify-content-center">
            <v-btn outlined rounded text> Guardar </v-btn>
          </v-card-actions>
        </v-card>
      </div>

    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from "axios";
import { required, max, min } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";

extend("max", {
  ...max,
  message: "El campo {_field_} tiene como maximo {length} caracteres",
});

extend("min", {
  ...min,
  message: "El campo {_field_} debe tener al menos {length} caracteres",
});
extend("required", {
  ...required,
  message: "El campo {_field_} es obligatorio",
});

extend("onlyNumbers", {
  validate: (value) => {
    const regex = /^\+?[0-9]+$/;
    return regex.test(value);
  },
  message: "numero na valido",
});

extend("validateMail", {
  validate: (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value);
  },
  message: "La direccion del correo no es valida",
});

extend("validateNumber", {
  validate: (value) => {
    const regex = /^[a-zA-Z0-9._%+-]+(?: [a-zA-Z0-9._%+-]+)*$/;
    return regex.test(value);
  },
  message: "numero de casa no valido",
});

extend("validationCP", {
  validate: (value) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  },
  message: "Se deben ingresar solo numeros",
});

extend("validateRFC", {
  validate: (value) => {
    const regex =
      /^[A-Z&Ñ]{3,4}(\d{2})(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])[A-Z\d]{2}[A\d]$/;
    return regex.test(value);
  },
  message: "El RFC no es valido",
});

extend("validateCalle", {
  validate: (value) => {
    const regex = /^[a-zA-Z0-9\s-.,'()/]+$/;
    return regex.test(value);
  },
  message: "La calle no es valida",
});

export default {
  name: "registrar",
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      items: [],
      estados: ["Activo", "Inactivo", "Baja"],
      entidades: [],
      municipios: [],
      entidad: {},
      municipiosPorEntidad: [],
      entidades: [],
      municipiosEntidad: null,

      provider: {
        rfc: null,
        razonSocial: null,
        contacto: null,
        estado: null,
        telefono: null,
        telmovil: null,
        email: null,
        cp: null,
        ninterior: null,
        nexterior: null,
        calle: null,
        colonia: null,
        entidad: null,
        municipio: null,
      },

    };
  },

  methods: {
    buscarMunicipios() {
      if (this.provider.entidad) {
        const entidadEncontrada = this.entidades.find(
          (entidad) => entidad.nombre === this.provider.entidad
        );
        if (entidadEncontrada) {
          this.municipiosEntidad = entidadEncontrada.municipios;
        } else {
          this.municipiosEntidad = null;
        }
      } else {
        this.municipiosEntidad = null;
      }
    },
    cargarEntidades() {
      axios
        .get("https://apitohommeshoppingapp.onrender.com/api/entidades")
        .then((response) => {
          this.entidades = response.data;

        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveProvider() {
      axios
        .post("https://apitohommeshoppingapp.onrender.com/api/providers", this.provider)
        .then((response) => {
          Swal.fire({
                        icon: "success",
                        title: "Proveedor registrado",
                        text: "se registro exitosamente el proveedor",
                    });
        })
        .catch((error) => {
          Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hubo parece que hubo un error",
                    });
        });
    },
  },
  created() {
    axios.get("https://apitohommeshoppingapp.onrender.com/api/providers").then((response) => {
      this.providers = response.data;
    });
    this.cargarEntidades();
  },
};
</script>

<style scoped>
.imgdata {
  .imgdata {
    max-width: 50%;
    max-height: 50%;
    border: solid 1px #ccc;
    object-fit: contain;
  }
}
</style>
