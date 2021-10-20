<template>
	<div>
		<div class="login">
			<p class="tital">手机号归属地信息查询</p>
			<div class="inputInfo">
			<p>请输入手机号<el-input  v-model="form.number" clearable ></el-input></p>
			</div>
			<div class="buttonLink">
			<el-button type="primary" round  @click="select();">查询</el-button>
		  </div>
		</div>
		<div>
      <el-card class="el-card-m">
      <p>当前手机号： {{number}}</p>
      <p>手机号运营商： {{isp}}</p>
      <p>手机号所属省份： {{province}}</p>
      <p>手机号所属城市： {{city}}</p>
      <p>手机号所在区号： {{areaCode}}</p>
      <p>手机号所在邮政编码： {{zipCode}}</p>
      </el-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					number:''
				},
				areaCode:'',
				city:'',
				province:'',
				zipCode:'',
				isp:'',
				number:''
			}
			},
			methods: {
       select() {
       var data = this.form
            this.$http.post(('http://106.14.69.50:8088/phoneNumber/getPhoneNumber'), data, {
              emulateJSON: true
            }).then(res => {
             if (res.body.code == 4080) {
                this.$message({
                      showClose: true,
                      message: res.body.message,
                      type: 'success'
                    });
                this.areaCode = res.body.data.attribution.areaCode
                this.city = res.body.data.attribution.city
                this.province = res.body.data.attribution.province
                this.zipCode = res.body.data.attribution.zipCode
                this.isp = res.body.data.isp
                this.number = res.body.data.number
                }else {
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
    margin: 50px auto;
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

.el-button {
  width: 180px;
}
.buttonLink{
  width: 180px;
  margin: auto;
  text-align: center;
}

.el-card-m {
  width:40%;
  margin:auto;
  font-family: "微软雅黑"
}
</style>
