<template>
  <div>Очищаем данные</div>
</template>

<script>
export default {
  // render the contents of this component in the admin layout <Nuxt />
  layout: 'admin',
  middleware: ['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>
