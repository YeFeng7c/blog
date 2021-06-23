<template>
  <div class="main">
      <b-card>
    <aplayer :showlrc="true" autoplay :music="{
          title: '晚安',
          artist: '麻园诗人',
          src: '../../../static/music/麻园诗人 - 晚安.mp3',
          pic: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=351482873,1764000591&fm=179&app=42&f=JPEG?w=150&h=150&s=29417A6EDFED977C0C59BC020100E081',
          lrc: '[00:00.00] 暂时没有上传歌词',
    }" :list="musicList">
   </aplayer>
       </b-card>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  name: '',
  components: {
          Aplayer
      },

  data () {
    return {
    musicList: [{
                title: '泸沽湖',
                artist:'麻园诗人',
                src: "../../../static/music/麻园诗人 - 泸沽湖.mp3",
                pic: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=351482873,1764000591&fm=179&app=42&f=JPEG?w=150&h=150&s=29417A6EDFED977C0C59BC020100E081',
                lrc: '[00:00.00] 暂时没有上传歌词',
              },
              {
                title: '晚安',
                artist: '麻园诗人',
                src: "../../../static/music/麻园诗人 - 晚安.mp3",
                pic: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=351482873,1764000591&fm=179&app=42&f=JPEG?w=150&h=150&s=29417A6EDFED977C0C59BC020100E081',
                lrc: '[00:00.00] 暂时没有上传歌词',
              },
            ]
    }
  },
  created(){

  },
  methods: {

  }
}
</script>

<style scoped>
.main {
  margin-top: 10px;
}
</style>
