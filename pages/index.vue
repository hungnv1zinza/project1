<template>
  <Dashboard/>
</template>

<script>
export default {
  name: 'DashboardPage',
  methods: {
    handleAddBreadcrumbs() {
      this.$store.dispatch('addBreadcrumbs', [
        {
          text: 'Dashboard',
          disabled: true,
          href: '#',
        },
      ])
    },
  },
  mounted() {
    this.handleAddBreadcrumbs()
  }
}
</script>
