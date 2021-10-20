<template>
  <div>
    <vue-baberrage
      :isShow="barrageIsShow"
      :barrageList="barrageList"
      :maxWordCount="maxWordCount"
      :throttleGap="throttleGap"
      :loop="barrageLoop"
      :boxHeight="boxHeight"
      :extraWidth="extraWidth"
      :messageHeight="messageHeight"
    >
    </vue-baberrage>
  </div>

</template>
<script>
import Vue from "vue";
  import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage';
  Vue.use(vueBaberrage);
  export default {

    data() {
      return {
        msg: '~',
        barrageIsShow: true,
        messageHeight: 35,
        boxHeight: 200,
        extraWidth:100  ,
        barrageLoop: true,
        maxWordCount: 10,
        throttleGap: 5000,
        barrageList: []
      };
    },
    created() {

    },
    mounted() {
      this.addToList();
    },
    methods: {
      addToList() {
         this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
                  //console.log(res.body.data)
                 let list = res.body.data
                    list.forEach((v) => {
                           this.barrageList.push({
                             id: v.id,
                             avatar: v.avatar,
                             msg: v.message_name + "：" + v.message_info,
                             time: Math.random() * 9 + 15,
                             type: MESSAGE_TYPE.NORMAL,
                             barrageStyle: "yellow"
                           });
                         });
             });
      }
    }
  };
</script>
<style scoped lang="less">


  @media screen and (max-width: 900px) {

    .barrages-drop {
      /deep/ .baberrage-lane{
        /deep/ .blue .normal{
          border-radius: 100px;
          background: #CC99CC;
          color: #fff;
        }
        /deep/ .green .normal{
          border-radius: 100px;
          background: #75ffcd;
          color: #fff;
        }
        /deep/ .red .normal{
          border-radius: 100px;
          background: #e68fba;
          color: #fff;
        }
        /deep/ .yellow .normal{
          border-radius: 100px;
          background: #dfc795;
          color: #fff;
        }
        .baberrage-stage {
          position: absolute;
          width: 100%;
          height: 212px;
          overflow: hidden;
          top: 0;
          margin-top: 130px;
        }
      }
    }

  }
</style>
