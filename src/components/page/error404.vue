<template>
  <b-container class="main">
    <b-img fluid src="./static/images/error/404.png"></b-img>
    <h3>你所访问的页面不存在！</h3>
    <h5>资源不存在或者没有访问权限，点击<b-link to="/">这里</b-link>返回首页</h5>
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
