<template>
	<div>
		<div class="login">
		<div  class="logo">
		  <img src="../../../static/images/yefeng.png"/>
		</div>
			<p class="tital">Welcome to NightWind</p>
			<div class="inputInfo">
			<p><el-input placeholder="请输入邮箱" v-model="form.email" clearable ></el-input></p>
			<p><el-input placeholder="请输入密码" v-model="form.password" show-password ></el-input></p>
			</div>
			<div class="buttonLink">
			<el-button type="primary" round  @click="login();">登录</el-button>
			<router-link :to="{ path: '/Regist' }"><el-link :underline="false" >没有账号?立即注册</el-link></router-link>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					email:'',
					password:''
				}
			}
			},
			methods: {
				login:function(){
					var data = this.form
					this.$http.post(('http://106.14.69.50:8088/user/login'), data, {
					  emulateJSON: true
					}).then(res => {
						// console.log(this.form)
						// console.log(res)
						if(res.body.code == 4031){
             this.$message({
                    showClose: true,
                    message: res.body.message,
                    type: 'success'
                  });
              sessionStorage.setItem("email",this.form.email);
							this.$router.push({path:'/myInfo'})
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

.login{
	/* background-color: red; */
    margin: 10% auto;
}
.logo{
  width: 300px;
  margin: auto;
}
.logo img {
  width: 300px;
  border-radius:10%;
}
.tital{
  margin-top: 30px;
	font-size: 28px;
	font-family: 微软雅黑;
	font-weight: bold;
	color: #FFFFFF;
	text-align: center;
}
.inputInfo {
  width: 300px;
  margin: auto;
}
.code{

}
.sendCode{

}
.el-button {
  width: 180px;
}
.buttonLink{
  width: 180px;
  margin: auto;
  text-align: center;
}
.registlink{

}
.loemail{

}
.lopwd{

}
</style>
