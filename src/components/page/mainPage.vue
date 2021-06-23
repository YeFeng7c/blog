<template>
  <!-- 网格系统 -->
  <b-container class="main-container">
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="8" xl="8" class="left-container">
        <!-- 轮播图 -->
        <carousel class="carousel"></carousel>
        <!-- 全部博文 -->
        <articles></articles>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="4" xl="4" class="right-container">
        <!-- 利用media组件展示个人信息模块 -->
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="pad0">
          <user-info></user-info>
          <music-play></music-play>
        </b-col>
        <!-- 文章分类 -->
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="pad0">
          <article-kinds></article-kinds>
        </b-col>
        <!-- 全部标签 -->
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="pad0">
          <tags></tags>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import carousel from "@/components/common/carousel";
import articles from "@/components/common/articles";
import userInfo from "@/components/common/userInfo";
import tags from "@/components/common/tags";
import articleKinds from "@/components/common/articlesKinds";
import musicPlay from "@/components/common/musicPlay";

export default {
  name: "mainPage",
  components: {
    carousel,
    articles,
    userInfo,
    tags,
    articleKinds,
    musicPlay
  }
};
</script>

<style scoped>
.carousel {
  margin-bottom: 10px;
}
.main-container {
  border-radius: 10px;
}
.left-container,
.right-container {
  padding-top: 10px;
}
.pad0 {
  padding: 0;
}
</style>
