<template>

    <v-data-table
      :headers="headers"
      :items="visitas"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title> <i class="fas fa-eye"></i> Visitas </v-toolbar-title>
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
                Agendar visita
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
    <v-select
      v-if="clientes && clientes.length"
      v-model="idCliente"
      :items="clientes"
      item-text="nombre"
      item-value="_id"
      label="Cliente"
    ></v-select>
  </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.fecha"
                        label="Fecha"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.hora"
                        label="Hora"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.lugar"
                        label="Dirección"
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
              <v-card-title class="text-h5">Esta seguro de eliminar esta visita?</v-card-title>
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
          @click="getAllVisitas"
        >
          Cargar Visitas
        </v-btn>
      </template>
    </v-data-table>
  </template>
  
  
  <script>
  
  import axios from "axios";
  
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
                { text: "Cliente", value: "cliente.nombre" },
                { text: "Fecha", value: "fecha" },
                { text: "Hora", value: "hora" },
                { text: "Lugar", value: "lugar" },
                { text: 'Actions', value: 'actions', sortable: false }
              ],
      editedIndex: -1,
      editedItem: {
        id: null,
        fecha: '',
        hora: '',
        lugar: ''
      },
      defaultItem: {
        id: null,
        nombre: '',
        edad: '',
        direccion:'',
        telefono: ''
      },
      visitas: [],
      clientes: [],
      idCliente: ''
    }),
  
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Visita' : 'Editar Visita'
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
      this.getAllVisitas();
      this.getClientes();
    },
  
    methods: {
      getAllVisitas() {
          axios.get("https://apitohommeshoppingapp.onrender.com/api/visitas").then((response) => {
          this.visitas = response.data;
        });
      },
  
      getClientes() {
      axios.get("https://apitohommeshoppingapp.onrender.com/api/clientes").then((response) => {
        this.clientes = response.data;
      });
    },

    createVisita() {
      const { clienteId, fecha, hora, lugar } = this.editedItem;
      const id = this.idCliente;
      axios
        .post("https://apitohommeshoppingapp.onrender.com/api/visitas", {
          clienteId: id,
          fecha: fecha,
          hora: hora,
          lugar: lugar,
        })
        .then((response) => {
          alert("Visita registrada:", response.data);
          this.getAllVisitas();
          this.close();
        })
        .catch((error) => {
          alert("Error al registrar la visita:", error);
        });
    },
  
      deleteCliente(id) {
        axios.delete("https://apitohommeshoppingapp.onrender.com/api/visitas/" + id)
        .then((response) => {
          alert("Visita eliminado");
          this.getAllVisitas();
          this.close();
        })
        .catch((error) => {
          console.log(error);
        });
      },
  
      updateVisita() {
        const { id, fecha, hora, lugar } = this.editedItem;

      axios
        .put(`https://apitohommeshoppingapp.onrender.com/api/visitas/${id}`, {
          fecha,
          hora,
          lugar,
        })
        .then((response) => {
          alert("Visita actualizada");
          this.getAllVisitas();
          this.close();
        })
        .catch((error) => {
          console.log(error);
        });
      },
  
      editItem(item) {
        this.editedIndex = this.visitas.indexOf(item);
        this.editedItem = { ...item, id: item._id };  
        this.dialog = true;
      },
  
      deleteItem(item) {
        this.editedIndex = this.visitas.indexOf(item);
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
            this.createVisita();
          }
        } else {
          if (!this.isSupervisor) {
            this.updateVisita();
          }
        }
        this.getAllVisitas();
        this.close();
      },
    },
  }
  </script>