<template>
  <div class="page-wrapp">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      @submit.native.prevent="onSubmit"
      :model="controls"
      :rules="rules" ref="form"
    >
      <!-- <h2>Войти в панель администратора</h2> -->

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input
          type="textarea"
          v-model.trim="controls.text"
          resize="none"
          :rows="10"
        />
      </el-form-item>

      <div class="mb">
        <small>
          <i class="el-icon-time" />
          <span>
            {{ new Date(post.date).toLocaleString() }}
          </span>
        </small>

        <small style="margin-left: 30px">
          <i class="el-icon-view" />
          <span>{{ post.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост | ${this.post.title}`
    }
  },
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },
  // Валидируем параметр id, если он есть то все ок,
  // если его нет то показываем ошибку 404 а не ошибку дебаггера
  validate({params}) {
    return Boolean(params.id)
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            test: this.controls.text,
            id: this.post._id
          }
          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Пост обновлен')
            this.loading = false
          } catch(e) {
            this.loading = false
          }

        }
      })
    }
  }
}
</script>

<style scoped>
  .page-wrapp {
    width: 600px;
  }
</style>
