<template>
  <div id="user-list">
    <v-toolbar
      flat
    >
      <v-toolbar-title>Create user</v-toolbar-title>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <NuxtLink to="/user">
        <v-btn
          color="primary"
          dark
          class="mb-2"
        >
          Back
        </v-btn>
      </NuxtLink>
    </v-toolbar>
    <v-form v-model="valid">
      <v-row class="w-full">
        <v-col
          cols="12"
          md="3"
        >
          <label>Name</label>
          <v-text-field
            v-model="firstname"
            outlined
            placeholder="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <label>Email</label>
          <v-text-field
            v-model="firstname"
            outlined
            placeholder="Email"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="w-full">
        <v-col
          cols="12"
          md="3"
        >
          <label>Role</label>
          <v-select
            :items="[{id: 1, name: 'Admin'}, {id: 2, name: 'Company account'}, {id: 3, name: 'Member'}]"
            item-text="name"
            item-value="id"
            placeholder="Role"
            outlined
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <label>Company</label>
          <v-select
            :items="companies"
            item-text="name"
            item-value="id"
            placeholder="Company"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="w-full">
        <v-col
          cols="12"
          md="3"
        >
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <label>Dob</label>
              <v-text-field
                v-model="date"
                placeholder="Dob"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <label>Status</label>
          <v-select
            :items="[{id: 1, name: 'Active'}, {id: 2, name: 'Inactive'}]"
            item-text="name"
            item-value="id"
            placeholder="Status"
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="w-full text-center">
        <v-col
          cols="12"
          md="3"
        >
          <v-btn
            class="w-full"
            color="primary"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>

export default {
  name: 'UserPage',
  layout: 'default',
  data() {
    return {
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      valid: false,
      firstname: '',
      lastname: '',
      companies: [],
    }
  },
  async fetch() {
    this.companies = await fetch(
      'http://project1.test/api/company', {
        method: "GET"
      }
    ).then(res => res.json())
  },
  methods: {

    handleAddBreadcrumbs() {
      this.$store.dispatch('addBreadcrumbs', [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'User',
          disabled: false,
          href: '/user',
        },
        {
          text: 'Create User',
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

.row[data-v-2544db56] {
  height: 110px;
}
</style>
