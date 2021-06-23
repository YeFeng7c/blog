<template>
  <div>
    <b-card>
      <b-media>
        <b-img src="./static/images/head.png" slot="aside" width="64" height="64" alt="placeholder"></b-img>
        <h5 align="left">YeFeng</h5>
        <p align="left">相命于爱者，无忧亦无怖。</p>
      </b-media>
      <hr />
      <b-container class="text-center">
        <b-row>
          <b-col>
            原创
            <br />20
          </b-col>
          <b-col>
            标签
            <br />20
          </b-col>
          <b-col>
            评论
            <br />20
          </b-col>
          <b-col>
            浏览
            <br />20
          </b-col>
        </b-row>
      </b-container>
      <hr />
      <!-- 分割线下面是几个链接，分别连接到github、码云、QQ和微信 -->
      <div class="link-icon-box">
        <b-link
          v-b-popover.hover.top="'GitHub'"
          href="#"
          target="_blank"
          class="icon iconfont icon-github link-icon"
        ></b-link>
        <b-link
          v-b-popover.hover.top="'码云'"
          href="#"
          target="_blank"
          class="icon iconfont icon-gitee-fill-round link-icon"
        ></b-link>
        <b-link v-b-popover.hover.top="'QQ'" id="add-my-qq" class="icon iconfont icon-QQ link-icon"></b-link>
        <b-popover target="add-my-qq" title="扫一扫，加我QQ" triggers="focus" placement="bottom">
         <b-img width="150" thumbnail rounded src="/static/images/findme/add_my_qq.jpg"></b-img>
        </b-popover>
        <b-link
          id="add-my-wechat"
          v-b-popover.hover.top="'微信'"
          class="icon iconfont icon-WeChat link-icon"
        ></b-link>
        <b-popover target="add-my-wechat" title="扫一扫，加我微信" triggers="focus" placement="bottom">
         <b-img width="150" thumbnail rounded src="/static/images/findme/add_my_wechat.jpg"></b-img>
        </b-popover>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "userInfo"
};
</script>

<style scoped>
.text-center{
  text-align: center;
}
.link-icon {
  /*消除下划线*/
  text-decoration: none;
}
.link-icon-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
