<template>
  <div>
    <div class="container">
      <div class="left">
        <div class="item home" id="home">
          <b-navbar-brand to="/login" class="yefeng">夜の風</b-navbar-brand>
        </div>
      </div>
      <div class="right">
        <div class="item" :style="{ backgroundImage: `url(${img})` }">
          <a href="/#/mainPage">博客</a>
        </div>
        <div class="item" :style="{ backgroundImage: `url(${img})` }">
          <a href="/#/" >首页</a>
        </div>
        <div class="item" :style="{ backgroundImage: `url(${img})` }">
          <a href="http://www.yefeng.link/sg/sg.html"  target="_blank">来算一卦</a>
        </div>
        <div class="item" :style="{ backgroundImage: `url(${img})` }">
          <a href="/#/myInfo">成为会员</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      img: require("../../../static/images/cloud.png"),
    };
  },
  created() {},
  methods: {

  },
};
</script>
<style scoped lang="less">

.container {
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #333;
  font-size: 1.18rem;
  position: relative;
  z-index: 999;
  box-sizing: border-box;
  .weather {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .item:hover {
    color: #7c96b1;
  }
  .left {
    width: 100%;
    font-size: 0.2rem;
    font-weight: bold;
    .home {
      i {
        font-size: 2.4rem;
        color: #74c0ef;
      }
    }
    .item {
      cursor: pointer;
      a {
        font-size: 1.6rem;
        color: #CC99CC;
        text-decoration: none;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    color: #fff;
    div {
      cursor: pointer;
    }
    .item {
      cursor: pointer;
      background-size: 100% 100%;
      width: 8rem;
      a {
        color: #747879;
        text-decoration: none;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .login {
    height: 30px;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    cursor: pointer;
    i {
      font-size: 0.3rem;
      color: #74c0ef;
    }
  }
  .un-login {
    i {
      font-size: 0.3rem;
      color: #757575;
    }
  }
}
/deep/.el-dropdown-menu__item {
  a {
    color: #606266;
  }
}
@media screen and (max-width: 900px) {
  .container {
    height: 5rem;
    margin-left: -0.5rem;
    .left {
        width: 0%;
      font-size: 0.22rem;
      .item {
        font-size: 0.6rem;
        margin-top: 0.1rem;
      a {
        font-size: 1.1rem;
        color: #CC99CC;
        text-decoration: none;
      }
      }
      .home {
        i {
          font-size: 1.8rem;
        }
      }
    }
    .right {
      font-size: 0.6rem;
      flex-wrap: wrap;

      .item {
        margin-top: 0.6rem;
        width: 4rem;
        height: 3.4rem;
        line-height: 3.4rem;
      }
    }
    .login {
      margin-right: 0.2rem;
      margin-top: 0.2rem;
      position: relative;
      top: 0;
      right: 0;
      height: auto;
    }
  }
}
</style>
