<template>
	<div>
		<div class="a-login">
      <div  class="logo">
        <img src="../../../static/images/yefeng.png"/>
      </div>
			<p class="a-tital">Welcome to NightWind</p>
			<div class="inputInfo">
      <p><el-input placeholder="请输入姓名" v-model="form.username"></el-input></p>
			<p><el-input placeholder="请输入邮箱" v-model="form.email" clearable ></el-input></p>
			<p>
				<el-input placeholder="请输入验证码" v-model="form.code" clearable class="a-code"></el-input>
				<el-button type="info" class="a-sendCode" @click="sendCode();">
          <div v-show="show">发送验证码</div>
          <div v-show="!show">{{count}} s</div>
				</el-button>
			</p>
			<p><el-input placeholder="请输入密码" v-model="form.password" show-password class="a-password"></el-input></p>
			</div>
		  <div class="buttonLink">
			<el-button type="primary" round class="a-regist" @click="regist();">注册</el-button>
      <router-link :to="{ path: '/Login' }"><el-link :underline="false" class="registlink">已有账号?立即登录</el-link></router-link>
      </div>
      <p class="smallTip">*因涉及到用户隐私问题，所以暂时用QQ邮箱进行注册</p>
		</div>
	</div>
</template>

<script scoped>
	export default {
		data() {
			return {
			   show: true,
         count: '',
         timer: null,
				item:{
					email:'',
				},
				form:{
					username:'',
					email:'',
					code:'',
					password:''
				}
			}
		},
		methods: {
			sendCode:function(){
				var data = this.form
				this.$http.post(('http://106.14.69.50:8088/user/sendEmail'), data, {
				  emulateJSON: true
				}).then(res => {
					if(res.body.code == 4206){
						  this.$message({
                showClose: true,
                message: res.body.message,
                type: 'success'
              });
              	  const TIME_COUNT = 60;
                       if (!this.timer) {
                         this.count = TIME_COUNT;
                         this.show = false;
                         this.timer = setInterval(() => {
                         if (this.count > 0 && this.count <= TIME_COUNT) {
                           this.count--;
                          } else {
                           this.show = true;
                           clearInterval(this.timer);
                           this.timer = null;
                          }
                         }, 1000)
                        }
					}else{
             this.$message({
              showClose: true,
              message: res.body.message,
              type: 'warning'
            });
					}
				}, res => {
				});
			},
			regist:function(){
				var data = this.form
				this.$http.post(('http://106.14.69.50:8088/user/regist'), data, {
				  emulateJSON: true
				}).then(res => {
					if(res.body.code == 4204){
						  this.$message({
                showClose: true,
                message: res.body.message,
                type: 'success'
              });
              this.$router.push({path:'/login'})
					}else{
             this.$message({
              showClose: true,
              message: res.body.message,
              type: 'warning'
            });
					}
				}, res => {

				});
			}
		}
	}
</script>

<style scoped>
.logo{
  width: 300px;
  margin: auto;
}
.logo img {
  width: 300px;
  border-radius:10%;
}
.a-tital{
  margin-top: 30px;
	font-size: 28px;
	font-family: 微软雅黑;
	font-weight: bold;
	color: #FFFFFF;
	text-align: center;
}
.a-login{
	/* background-color: red; */
    margin: 50px auto;
}
.inputInfo {
  width: 300px;
  margin: auto;
}
.a-code{
	/* position: fixed; */
	/* display: inline; */
	width: 190px;
}
.a-sendCode{
	width: 102px;
}
.a-regist {
  width: 180px;
}
.buttonLink{
  width: 180px;
  margin: 20px auto;
  text-align: center;
}
.smallTip{
  margin-top: 20px;
  text-align: center;
}
.registlink{

}
</style>
