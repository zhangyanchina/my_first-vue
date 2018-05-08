<template>
  <div class="login-container">
      <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '登陆界面开始'
    }
  }
}
</script>
<style>
h3 {
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  color: red;
}
</style>
