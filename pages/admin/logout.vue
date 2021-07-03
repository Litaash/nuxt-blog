<template>
  <h1>Logout</h1>
</template>

<script>
export default {
  // render the contents of this component in the admin layout <Nuxt />
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>
