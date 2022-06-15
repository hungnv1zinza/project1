<template>
  <div id="user-list">
    <v-toolbar
      flat
    >
      <v-toolbar-title>User management</v-toolbar-title>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <NuxtLink to="/user/add" >
        <v-btn
          color="primary"
          dark
          class="mb-2"
        >
          New User
        </v-btn>
      </NuxtLink>
    </v-toolbar>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      item-key="name"
      show-select
      class="elevation-1 mt-8 border"
    >
      <template v-slot:item.dob="{ item }">
        <span>{{ formatDateEN(item.dob) }}</span>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip
          :color="getColor(item.status)"
          dark
        >
          {{ item.status == 1 ? 'Active' : 'Inactive' }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="showAlertConfirm(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'UserPage',
  layout: 'default',
  data() {
    return {
      singleSelect: false,
      selected: [],
      dialogDelete: false,
      editedIndex: -1,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {text: 'Dob', value: 'dob', dataType: "Date"},
        {text: 'Status', value: 'status'},
        {text: 'Role', value: 'name'},
        {text: '', value: 'actions', sortable: false},
      ],
      desserts: [],
      defaultItem: {
        name: '',
        dob: '',
        status: 1,
        role: '',
      },
    }
  },
  async fetch() {
    this.desserts = await fetch(
      'http://project1.test/api/user', {
        method: "GET"
      }
    ).then(res => res.json())
  },
  methods: {
    showAlertConfirm(item){
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.deleteItemConfirm(item)
          this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      });
    },
    getColor (status) {
      if (status == 1) return 'green'
      else return 'red'
    },
    formatDateEN(date) {
      const options = {year: 'numeric', month: 'numeric', day: 'numeric'}
      return new Date(date).toLocaleDateString('en-GB', options)
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItemConfirm(item) {
      this.desserts.splice(this.desserts.indexOf(item), 1)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    handleAddBreadcrumbs() {
      this.$store.dispatch('addBreadcrumbs', [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'User',
          disabled: true,
          href: '#',
        },
      ])
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  mounted() {
    this.handleAddBreadcrumbs()
  },
}

</script>

<style scoped>
#user-list >>> thead {
  background-color: #F7FAFC;
}
</style>
