<template>
   <div>
        <SharedAppHeader />
        <UserList />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/layouts/AppHeader.vue'
import AppFooter from '~/components/layouts/AppFooter.vue'

export default {
  name: 'UserPage',
  layout: 'default'
}
</script>
