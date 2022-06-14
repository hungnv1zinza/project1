<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <AppBreadcrumbs />
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader.vue';
import AppBreadcrumbs from '@/components/layouts/Breadcrumbs.vue';
import AppFooter from '@/components/layouts/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppBreadcrumbs,
    AppFooter
  },
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>

<style>

.container {
  padding: 24px;
}
</style>
