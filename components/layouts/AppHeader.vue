<template>
  <v-app-bar
    absolute
    scroll-target="#scrolling-techniques-6"
  >
    <div class="flex justify-between items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-x-8 grid-flow-col auto-cols-max text-white font-medium">
        <div>Dashboard</div>
        <div>User</div>
        <div>Company</div>
        <div>Topic</div>
        <div>Tag</div>
        <div>Post</div>
      </div>
      <div class="d-flex items-center">
        <v-text-field hide-details placeholder="Search..." class="w-15 border-0 rounded"></v-text-field>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-on="on" v-bind="attrs" >
              <v-img max-height="40" max-width="40" src="/images/logo.png"/>
            </v-avatar>
          </template>
          <v-list >
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
.v-list .v-list-item {
  min-height: 40px;
}
.v-list .v-list-item:hover {
  background: #e2e8f0;
}
</style>


