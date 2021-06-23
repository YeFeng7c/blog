<template>
  <b-card border-variant="light" header="全部标签" align="left" class="main">
    <b-link class="link-icon">
      <i class="icon iconfont icon-icon-tag"></i>Java
    </b-link>
    <b-link class="link-icon">
      <i class="icon iconfont icon-icon-tag"></i>Spring
    </b-link>
    <b-link class="link-icon">
      <i class="icon iconfont icon-icon-tag"></i>Linux
    </b-link>
    <b-link class="link-icon">
      <i class="icon iconfont icon-icon-tag"></i>Vue
    </b-link>
    <b-link class="link-icon">
      <i class="icon iconfont icon-icon-tag"></i>Nginx
    </b-link>
    <b-link class="link-icon">
      <i class="icon iconfont icon-icon-tag"></i>AWS
    </b-link>
  </b-card>
</template>

<script>
export default {
  name: "tags"
};
</script>
<style scoped>
.main {
  margin-top: 10px;
}

.link-icon {
  text-decoration: none;
  display: inline-block;
  margin: 4px 10px;
}
</style>
