export default {
  data() {
    return {
      // 用户列表数据
      userList: [],
      keyword: '',
      nowPage: 1,
      pageSize: 2
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    //   获取用户列表
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: {
          query: this.keyword,
          pagenum: this.nowPage,
          pagesize: this.pageSize
        }
      })

      if (res.meta.status !== 200) return this.$message.error('获取用户列表失败')
      this.userList = res.data.users
    },
    async changeUserStatus(userInfo) {
      const { data: res } = await this.$http.put('users/' + userInfo.id + '/state/' + userInfo.mg_state + '')
      console.log(res)
      if (res.meta.status !== 200) return this.$message.error('修改失败')
      this.$message.success('修改状态成功')
    }
  }
}
