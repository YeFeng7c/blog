<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="content">
      <div class="condition">
        <div class="select">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.dogText_type"
              :label="item.dogText_type_name"
              :value="item.dogText_type"
            ></el-option>
          </el-select>
        </div>
        <div class="search" @click="search" id="start">
          <el-button type="success">开舔</el-button>
        </div>
      </div>
      <div class="text">
        <div class="audio" ref="audioDiv">
          <audio id="ttsAudio">
            <source :src="musicUrl" type="audio/mp3" />
          </audio>
        </div>
        <div class="readDogText">
          <i
            v-if="!readLoading"
            @click="readDogText"
            id="readDogText"
            class="icon iconfont icon-004laba-2 link-icon"
            >&nbsp;&nbsp;&nbsp;&nbsp;</i
          >
          <i
            v-if="readLoading"
            @click="noReadDogText"
            id="noReadDogText"
            class="icon iconfont icon-laba link-icon"
          >&nbsp;&nbsp;&nbsp;&nbsp;</i>
        </div>

        <div class="copy" @click="copy" id="copy">
          <i class="icon iconfont icon-fuzhi link-icon"></i>
        </div>
        <div class="text-content">{{ text }}</div>
      </div>
    </div>
    <!-- <div class="advertisement">
      <Adsense
        data-ad-client="ca-pub-8697460075278474"
        ins-style="display:inline-block;width:300px;height:250px"
        data-ad-slot="6734414294"
      >
      </Adsense>
    </div> -->
    <!-- <div class="advertisement advertisement2">
      <Adsense
        data-ad-client="ca-pub-8697460075278474"
        ins-style="display:inline-block;width:300px;height:250px"
        data-ad-slot="6844249022"
      >
      </Adsense>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "ColorTransfer",
  data() {
    return {
      title: "舔狗日记",
      date: new Date(),
      text: "",
      readLoading: false,
      musicUrl: "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&&text=",
      options: [],
      value: "",
    };
  },
  created() {
    this.getTypeList();
  },
  mounted() {},
  methods: {
    //获取类型列表
    getTypeList() {
      this.$http.post("http://106.14.69.50:8088/dogText/findDogTextType").then((res) => {
        this.options = res.body.data;
        this.value = res.body.data[0].dogText_type;
      });
    },
    search() {
      //关闭读一读
      this.noReadDogText();
      this.$http
        .post("http://106.14.69.50:8088/dogText/findDogTextByRandom?dogText_type=" + this.value )
        .then((res) => {
            const date =
              this.date.getFullYear() +
              "年" +
              (this.date.getMonth() + 1) +
              "月" +
              this.date.getDate() +
              "日";
            this.text = date + " " + res.body.data.dogText_info;

        });
    },
    copy() {
      this.$copyText(this.text).then(() => {
        this.$message({
          message: "复制成功",
          type: "success",
        });
      });
    },
    //读一读
    readDogText() {
      if (this.text) {
        this.readLoading = true;
        let url =
          "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&&text=" +
          this.text;
        let audioDiv = this.$refs.audioDiv;
        let ttsAudio = document.getElementById("ttsAudio");
        audioDiv.removeChild(ttsAudio);
        const audio = `<audio id="ttsAudio">
              <source src="${url}" type="audio/mp3">
              </audio>`;
        audioDiv.innerHTML = audio;
        ttsAudio = document.getElementById("ttsAudio");
        ttsAudio.play();
        //添加监听
        ttsAudio.addEventListener(
          "ended",
          () => {
            this.readLoading = false;
          },
          false
        );
      }
    },
    //不读了
    noReadDogText() {
      let ttsAudio = document.getElementById("ttsAudio");
      ttsAudio.pause();
      this.readLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .title {
    font-size: 1.8rem;
    text-align: center;
    color: #7c96b1;
    margin-top: 20px;
  }
  .sub-tilte {
    font-size: 0.3rem;
    text-align: center;
    color: #7c96b1;
  }
  .advertisement {
    position: absolute;
    top: 60%;
    left: 4%;
  }
  .advertisement2 {
    left: unset;
    right: 4%;
  }
  .content {
    margin: 50px auto 0;
    width: 40%;
    .condition {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      justify-content: space-between;
      line-height: 0;
    }
    .text {
      background: #fff;

      margin: 5% auto;
      padding: 11% 5% 5% 5%;
      font-size: 1.10rem;
      color: #616161;
      position: relative;
      .text-content {
        text-indent: 2em;
        text-align: left;
      }
      .copy,
      .readDogText {
        position: absolute;
        z-index: 999;
        top: 0.1rem;
        right: 0.24rem;
        cursor: pointer;
        color: rgb(32, 162, 221);
        i {
          font-size: 1.25rem;
        }
      }
      .readDogText {
        right: 0.84rem;
        z-index: 997;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .container {
    position: relative;
    width: 100%;
    min-height: 100%;
    height: unset;
    text-align: center;
    background-image: linear-gradient(
      to top,
      #f3e7e9 0%,
      #e3eeff 99%,
      #e3eeff 100%
    );
    padding-bottom: 1%;
    box-sizing: border-box;
    .advertisement {
      position: unset;
      top: 60%;
      text-align: center;
    }
    .qrcode {
      position: absolute;
      right: 0;
      bottom: 5%;
      font-size: 0.125rem;
      left: 0;
      margin: 0 auto;
      text-align: center;
      img {
        margin-top: 0.2rem;
        width: 30%;
      }
    }
    .content {
      margin: 13% auto;
      width: 90%;
    }

  }
}
</style>
