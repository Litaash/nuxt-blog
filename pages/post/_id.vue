<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back" />
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time" />
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view" />
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
          alt="post image"
        />
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci dolor velit placeat aperiam, totam provident laborum rerum modi, quo, ipsam maxime! Nostrum et asperiores maiores itaque rem ducimus dolorum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci dolor velit placeat aperiam, totam provident laborum rerum modi, quo, ipsam maxime! Nostrum et asperiores maiores itaque rem ducimus dolorum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit adipisci dolor velit placeat aperiam, totam provident laborum rerum modi, quo, ipsam maxime! Nostrum et asperiores maiores itaque rem ducimus dolorum?</p>
    </main>
    <footer>
      <!-- Form -->

      <div class="comments" v-if="false">
        <app-comment
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div v-else class="text-center">Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'

export default {
  validate({params}) {
    return Boolean(params.id)
  },
  components: {
    AppComment
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .post-image img {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }
</style>
