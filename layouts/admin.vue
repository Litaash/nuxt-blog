<template>
  <div class="admin-layout">
    <el-container :style="{height: '100%'}">
      <el-aside width="250px">
        <app-aside />
      </el-aside>
      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/components/admin/Aside'

export default {
  components: {
    AppAside
  }
}
</script>

<style lang="scss" scoped>
  .admin-layout {
    widows: 100%;
    height: 100vh;
  }
</style>
