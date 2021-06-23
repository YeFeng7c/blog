<template>
  <b-container class="main">
    <!-- 文章标题 -->
    <h2  class="title">这是文章的标题</h2>
    <!-- 文章描述 -->
    <h6 class="description"></h6>
    <!-- 文章内容 -->
    <div v-html="content"></div>
    <!-- 标签 -->
    <div class="tag-box"></div>
   </b-container>
</template>
<script>

export default {
  name: "articleDetails",
  data() {
    return {
      content: null
    };
  },
  methods: {

  },
  created() {
    let converter = new showdown.Converter();
    let text = "- 列表 \n - 列表 ";
    this.content = converter.makeHtml(text);
  }
};
</script>
<style scoped>
</style>
