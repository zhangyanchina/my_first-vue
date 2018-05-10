<template>
<div class="user-container">
      <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
<el-card class="box-card" style="margin-top:20px">
    <!-- 搜索框部分 -->
    <el-row>
  <el-col :span="8">
          <div>
        <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
  </el-col>
  <el-col :span="4" style="margin-left:20px"><el-button type="primary">添加用户</el-button></el-col>
</el-row>

    <!-- 用户列表部分 -->
 <el-table :data="userList"
    border
    style="width: 100%;margin-top:20px" >
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="120">
    </el-table-column>
     <el-table-column
      prop="email"
      label="邮箱"
      width="220">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话"
      width="220">
    </el-table-column>
    <el-table-column
      prop="role_name"
      label="角色"
      width="220">
    </el-table-column>
     <el-table-column
      label="状态"
      width="60">
        <template slot-scope="scope">

            <el-switch v-model="scope.row.mg_state" @change="changeUserStatus(scope.row)">
            </el-switch>
        </template>
    </el-table-column>
    <el-table-column
      label="操作" width="190">
    <template slot-scope="scope">
        <el-button type="primary"  icon="el-icon-edit" size="mini"></el-button>
        <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>

        <el-tooltip class="item" effect="dark" content="分配角色" placement="top">
        <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
        </el-tooltip>

    </template>
    </el-table-column>
  </el-table>
</el-card>
</div>

</template>

<script>
import mix from './User-mixins'
export default {
  mixins: [mix]
}
</script>

<style>
.el-card {
  box-shadow: 0px 1px 1px 3px rgba(0, 0, 0, 0.15);
}
.user-container {
    min-width: 1024px;
}
</style>
