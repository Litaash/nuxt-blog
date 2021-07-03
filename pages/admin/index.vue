<template>
  <h1>Welcome to admin page</h1>
</template>

<script>
export default {
  // render the contents of this component in the admin layout <Nuxt />
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>

<style lang="scss" scoped>

</style>
