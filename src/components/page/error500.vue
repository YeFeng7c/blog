<template>
  <b-container class="main">
    <b-img fluid src="/static/images/error/500.png"></b-img>
    <h3>服务器冒烟了！</h3>
    <h5>你所访问的功能尚在维护或者服务器出现未知错误，点击<b-link to="/">这里</b-link>返回首页</h5>
  </b-container>
</template>
<script>
export default {
  name: "error404"
};
</script>
<style scoped>
.main {
  text-align: center;
  margin-top: 10px;
  padding: 0 20%;
  background-color: #fff;
  border-radius: 5px;
  min-height: 100%;
}
</style>
