<template>
  <div id="app">
    <navBar></navBar>
 <div id="v-content" v-bind:style="{minHeight: Height+'px'}"> <router-view /></div>
    <footer class="foot">
      <p><a class="linkHref" href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2021004731号</a></p>
      <p>本站已经运行了：{{momk}}</p>

     <!-- <donate :number="number" :type="type" :wechatpayUrl="wechatpay" :alipayUrl="alipay" :colorDark="colorDark" :logoSrc="logoSrc" :bgSrc="bgSrc"></donate>
-->
    </footer>
 </div>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar";
import donate from "@/components/common/donate";
export default {
  name: "App",
  components: {
    navBar,
    donate
  },
  data() {
      return {
        momk:'',
        number: 3,
        type: "middle-around",
        wechatpay: "wxp://f2f0HzednLUZw5VTtEAadDk58_ch5vchrOy-",
        alipay: "HTTPS://QR.ALIPAY.COM/FKX09236UPGQ9V65UIQZCA",
        colorDark: "#f00",
        logoSrc: "https://secure.gravatar.com/avatar/25c31bb2d1632ef016c7af2f67491593?s=220&r=X&d=mm",
        bgSrc: "https://imgs.bwmelon.com/20190811205536.png"
      }
    },
  created() {
      //动态设置内容高度 让footer始终居底   header+footer的高度是100
          this.Height = document.documentElement.clientHeight - 100;
      　　//监听浏览器窗口变化　
          window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100},
          setInterval(()=>{
                    this.showDataTime();
                  },1000)
    },
  methods: {
      showDataTime(){
          let BirthDay = new Date("04/15/2021 11:11:11");
          let today = new Date();
          let timeOld = (today.getTime() - BirthDay.getTime());
          let sectimeold = timeOld /1000
          let msPerDay = 24 * 60 * 60 *1000
          let e_daysold = timeOld / msPerDay
          let daysold = Math.floor(e_daysold);
          let e_hrsold = (daysold - e_daysold) * -24
          let hrsold = Math.floor(e_hrsold);
          let e_minsold = (hrsold - e_hrsold) * -60
          let minsold = Math.floor((hrsold - e_hrsold) * -60)
          let seconds = Math.floor((minsold - e_minsold) * -60)
          let momk = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒"
          this.momk = momk
      }
  },
  beforeDestroy() {
      if(this.showDataTime()){
        clearInterval(this.showDataTime());
      }
    }
};
</script>

<style scoped>
  .foot {
	  text-align: center;
	  background-color: #F8F9FA;
	  margin-top: 10px;
	  padding-top: 10px;
		padding-bottom: 10px;
  }

	.linkHref {
	  text-decoration:none;
	  color:black;
	}

	.linkHref:hover {
  	text-decoration:none
	}

  .demo {
    margin: 10px auto;
	  padding-top: 10px;
		padding-bottom: 10px;
  }
</style>
