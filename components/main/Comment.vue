<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <span>
        <i class="el-icon-time" />
        {{ new Date().toLocaleString() }}
      </span>
    </div>
    <div class="comment-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae incidunt dolorum eius, molestiae animi odit hic quam aliquam non quibusdam rem distinctio voluptas eligendi iste. Magnam, dolor ea? Eaque, nisi!
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  .comment-text {
    white-space: pre-line;
  }
</style>
