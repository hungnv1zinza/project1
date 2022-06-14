<template>
  <v-breadcrumbs :items="breadcrumbs">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :disabled="item.disabled">
        <NuxtLink :to="item.href" :disabled="item.disabled">
          {{ item.text }}
        </NuxtLink>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>

export default {
  name: 'AppBreadcrumbs',
  data() {
    return {
      items: []
    }
  },
  computed: {
    breadcrumbs() {
      return this.$store.getters.getBreadcrumbs
    }
  }
}
</script>

<style scoped>
.v-breadcrumbs {
  padding: 10px 24px;
  background-color: #F1F1F1;
}
.nuxt-link-active {
  color: #BDBDBD;
}
</style>
