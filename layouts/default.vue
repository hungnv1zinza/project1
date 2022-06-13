<template>
  <v-app >
    <AppHeader/>
    <Nuxt/>
    <AppFooter/>
  </v-app>

</template>

<script>
import AppHeader from '@/components/layouts/AppHeader.vue';
import AppFooter from '@/components/layouts/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  }
}

</script>
