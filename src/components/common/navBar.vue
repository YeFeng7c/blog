<template>
  <!-- variant属性用于调节导航栏的颜色 -->
  <b-navbar toggleable="lg" type="light" variant="light" :sticky="true" fixed="top">
    <b-navbar-brand to="/login" class="yefeng">夜の風</b-navbar-brand>
    <!-- 该组件的target属性和下方标签的id对应，表示页面缩小之后要折叠的内容 -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- 搜索框 -->
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="请输入关键词"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
      </b-nav-form>
      <!-- 导航栏右侧内容 -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">首页</b-nav-item>
        <b-nav-item to="/luckyPage">抽奖</b-nav-item>
        <b-nav-item to="/about">关于</b-nav-item>
        <b-nav-item to="/message">留言</b-nav-item>
        <b-nav-item href="/ds/yefeng.html">打赏</b-nav-item>
        <b-nav-item href="/sg/sg.html">算卦</b-nav-item>
        <b-nav-item to="/myInfo">成为会员</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navBar"
};
</script>

<style scoped>
.yefeng {
  text-color: #000000;
  font-weight: bold;
}

.head-img {
  width: 25px;
  height: 25px;
}

a {
  text-decoration:none;
  color: #7C7C7D;
}

a:hover {
  text-decoration:none
}
</style>
