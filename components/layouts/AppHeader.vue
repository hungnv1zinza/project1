<template>
  <v-app-bar
    absolute
    scroll-target="#scrolling-techniques-6"
    app
  >
    <div class="flex justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-x-8 grid-flow-col auto-cols-max text-white font-medium">
        <NuxtLink to="/">Dashboard</NuxtLink>
        <NuxtLink to="/">User</NuxtLink>
        <NuxtLink to="/">Company</NuxtLink>
        <NuxtLink to="/">Topic</NuxtLink>
        <NuxtLink to="/">Tag</NuxtLink>
        <NuxtLink to="/">Post</NuxtLink>
      </div>
      <div class="d-flex items-center test">
        <!--        <v-text-field hide-details
        placeholder="Search..." class="w-15 border-0 rounded"></v-text-field>-->
        <v-text-field
          hide-details
          label="Search"
          solo
          class="border-none my-4 mr-8 "
        ></v-text-field>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-on="on" v-bind="attrs">
              <v-img max-height="40" max-width="40" src="/images/logo.png"/>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in [{title: 'Setting'}, {title: 'Log Out'}]"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.v-sheet {
  background: linear-gradient(90deg, #D51E36 0%, rgba(39, 52, 148, 0.98) 100%);
}

.v-list {
  background: white;
  width: 200px;
  padding: 0px;
}

.test >>> .v-input__control {
  min-height: 40px !important;
}

.test >>> .v-input__slot {
  min-height: 40px !important;
}

.v-list .v-list-item {
  min-height: 0px !important;
}

.v-list .v-list-item:hover {
  background: #e2e8f0;
}

.v-input__control {
  min-height: 40px !important;
}

.v-input__slot {
  min-height: 40px !important;
}

.nuxt-link-active {
  color: white;
}

.nuxt-link-active:hover {
  color: #1976d2;
}
</style>


