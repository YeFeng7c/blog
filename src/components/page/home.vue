<template>
  <div class="home">
    <div id="he-plugin-simple"></div>

    <div class="home-container">
      <div class="content">
        <!-- 功能标签 -->
        <div class="card">
          <div
            class="card-tool"
            v-for="(bgf, index) in devBackgroundFamily"
            :key="index"
            :style="bgf"
          >
            <a :href="devText[index].path">
              <div>{{ devText[index].text }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <remote-js src="https://widget.heweather.net/simple/static/js/he-simple-common.js?v=1.1"></remote-js>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },
      props: {
        src: { type: String, required: true }
      }
    }
  },
  data() {
    return {
      inputText: "",
      devBackgroundFamily: [
        "background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
        "background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
        "background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);",
        "background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);",
        "background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
        "background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);",
        "background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);",
        "background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);",
        "background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);",
        "background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);",
        "background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);",
        "background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);",
        "background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);",
        "background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);",
        "background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);",
        "background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);",
        "background-image: linear-gradient(to top, #cc99cc 0%, #ace0f9 100%);",
        "background-image: linear-gradient(to top, #cc99cc 0%, #CC99CC 100%);",
      ],
      devText: [
        { path: "/#/doglickingDiary", text: "舔狗日记" },
        { path: "/weather.html", text: "天气信息" },
        { path: "/#/message", text: "留言板" },
        { path: "/#/luckyPage", text: "抽奖" },
        { path: "/#/mainPage", text: "博客" },
        { path: "/#/about", text: "关于" },
        { path: "/ds/yefeng.html", text: "打赏" },
        { path: "/sg/sg.html", text: "来算一卦" },
        { path: "/#/lunar", text: "测运势,测凶吉" },
        { path: "/#/phoneNumber", text: "手机号码信息查询" },
        { path: "/#/divination", text: "小六壬" },
        { path: "/#/convert", text: "汉字转拼音" },
        { path: "/lol_fonts-master/index.html", text: "英雄联盟人物图标" },
        { path: "/#/EveryDayText", text: "每日一文" },
        { path: "/#/wallpaper", text: "必应壁纸" },
        { path: "/#/adarkroom", text: "小黑屋" },
        { path: "/#/Wyy", text: "网易云音乐API" },
        { path: "/#/QRcodeCreate", text: "二维码生成" },
        { path: "/#/ImageToTxt", text: "图片文字提取" }

      ]
    };
  },
  beforeCreate() {},
  created() {

    this.devBackgroundFamily.sort(function() {
      return Math.random() - 0.5;
    });
    // this.loading.close();
    this.inputAnimation();
  },
  methods: {

    //模拟鼠标光标动画
    inputAnimation() {
      const _this = this;
      setInterval(function() {
        const inputText = "|";
        if (_this.inputText == inputText) {
          _this.inputText = "";
        } else {
          _this.inputText += inputText;
        }
      }, 800);
    }
  }
};
</script>

<style scoped lang="less">
.home-container {
  margin: 0.4rem auto 0;
  text-align: center;
  color: #7c96b1;
  display: flex;
  .content {
    width: 100%;
    a:hover {
      text-decoration:none
    }
    .card {
      border:none;
      margin: 5.4rem auto 0;
      width: 66%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background-color: #E9EAED;
      .card-tool {
        width: 15%;
        height: 8rem;
        line-height: 8rem;
        border-radius: 2rem;
        margin: 1.5rem 1.5rem;
        font-size: 1.21rem;
        cursor: pointer;
        text-align: center;
        a {
          color: #fff;
        }
      }
      .card-tool:hover {
        border: 0.1rem solid #fff;
        box-sizing: border-box;
        line-height: 8rem;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .home{
  height: 90%;
}
  /deep/#he-plugin-simple {
    display: none;
  }
  .home-container {
    margin-top: 0.2rem;
    height: 88%;
    .content {
      .slogan {
        display: none;
      }
      .card {
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 0;
        overflow-y: scroll;
        .card-tool {
          width: 32%;
          margin: 1vh 1rem;
          height: auto;
          line-height: 9.5vh;
          font-size: 0.8rem;
          border-radius: 1rem;
        }
        .card-tool:hover {
          border: 0.1rem solid #fff;
          box-sizing: border-box;
          line-height: 9.5vh;
        }
      }
    }
  }
}
</style>
