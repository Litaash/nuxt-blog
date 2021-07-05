const posts = [
  { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
  { title: 'Post 2', date: new Date(), views: 31, comments: [1, 2], _id: 'id2' },
  { title: 'Post 3', date: new Date(), views: 14, comments: [1, 2], _id: 'id3' }
]

export const actions = {
  // запрос  на вывод постов в админ панели
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts)
      }, 1000)
    })
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  },
  async remove({}, id) {

  },
  async update({}, {id, text}) {

  }
}
