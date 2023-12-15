<template>

    <v-data-table
      :headers="headers"
      :items="ventas"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title> <i class="fas fa-user-tie"></i> Ventas </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                :disabled="isSupervisor"
              >
                Nuevo Cliente
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.edad"
                        label="Edad"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.direccion"
                        label="Direccion"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.telefono"
                        label="Teléfono"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Esta seguro de eliminar este cliente?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }"  v-if="!isSupervisor">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="getAllVentas"
        >
          Cargar Clientes
        </v-btn>
      </template>
    </v-data-table>
  </template>
  
  
  <script>
  
  import axios from "axios";

  /**
   * 
   * {
    "clienteId": "657a72fd6b46183619856f15",
    "presupuestoId": "657b2b9ea51aaf2ddd08be5a",
    "nombreComprador": "Nombre del comprador",
    "telefonoComprador": "1234567890",
    "correoComprador": "correo@example.com",
    "direccionNuevaCasa": "Nueva dirección de la casa vendida"
}

   */
  
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
                { text: "nombreComprador", value: "nombreComprador" },
                { text: "direccionNuevaCasa", value: "direccionNuevaCasa" },
                { text: "telefonoComprador", value: "telefonoComprador" },
                { text: "correoComprador", value: "correoComprador" },
                { text: 'Actions', value: 'actions', sortable: false }
              ],
      editedIndex: -1,
      editedItem: {
        id: null,
        nombreComprador: '',
        direccionNuevaCasa: '',
        correoComprador: '',
        telefono: ''
      },
      defaultItem: {
        id: null,
        nombre: '',
        edad: '',
        direccion:'',
        telefono: ''
      },
      ventas: []
    }),
  
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva venta' : 'Editar Venta'
      },
      isSupervisor() {
        return this.$store.state.role === 'Supervisor';
      }
    },
  
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
  
    created () {
      this.getAllVentas();
    },
  
    methods: {
      getAllVentas() {
          axios.get("https://apitohommeshoppingapp.onrender.com/api/ventas").then((response) => {
          this.ventas = response.data;
        });
      },
  
      createCliente() {
        axios
          .post("https://apitohommeshoppingapp.onrender.com/api/clientes", this.editedItem)
          .then((response) => {
            alert("Cliente registrado:", response.data);
            this.getAllVentas();
            this.close();
          })
          .catch((error) => {
            alert("Error al registrar el cliente:", error);
          });
      },
  
      deleteCliente(id) {
        axios.delete("https://apitohommeshoppingapp.onrender.com/api/clientes/" + id)
        .then((response) => {
          alert("Cliente eliminado");
          this.getAllVentas();
          this.close();
        })
        .catch((error) => {
          console.log(error);
        });
      },
  
      updateCliente() {
        const { id, nombre, edad, direccion, telefono } = this.editedItem;
  
        axios
          .put(`https://apitohommeshoppingapp.onrender.com/api/clientes/${id}`, {
            nombre,
            edad,
            direccion,
            telefono,
          })
          .then((response) => {
            alert("Cliente actualizado");
            this.getAllVentas();
            this.close();
          })
          .catch((error) => {
            console.log(error);
          });
      },
  
      editItem(item) {
        this.editedIndex = this.ventas.indexOf(item);
        this.editedItem = { ...item, id: item._id };  
        this.dialog = true;
      },
  
      deleteItem(item) {
        this.editedIndex = this.ventas.indexOf(item);
        this.editedItem = { ...item, id: item._id }; 
        this.dialogDelete = true;
      },
  
      deleteItemConfirm() {
        this.deleteCliente(this.editedItem.id);
        this.closeDelete();
      },
  
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
  
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
  
      save() {
        if (this.editedIndex === -1) {
          if (!this.isSupervisor) {
            this.createCliente();
          }
        } else {
          if (!this.isSupervisor) {
            this.updateCliente();
          }
        }
        this.getAllVentas();
        this.close();
      },
    },
  }
  </script>