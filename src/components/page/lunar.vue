<template>
	<div>
		<div class="login">
			<p class="tital">测运势,测凶吉</p>
			<div class="inputInfo">
			<p>请输入阴历年份<el-input  v-model="form.lunarYear" clearable ></el-input></p>
			<p>请输入阴历月份<el-input  v-model="form.lunarMonth" clearable ></el-input></p>
			<p>请输入阴历出生日<el-input  v-model="form.lunarDay" clearable ></el-input></p>
			</div>
			<div class="buttonLink">
			<el-button type="primary" round  @click="select();">开始</el-button>
		  </div>
		</div>
		<div>
      <el-card class="el-card-m">
        <p>{{list}}</p>
        <p>{{list1}}</p>
      </el-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					lunarYear:'',
					lunarMonth:'',
					lunarDay:'',
				},
				list: '',
				list1: ''
			}
			},
			methods: {
       select() {
       var data = this.form
            this.$http.post(('http://106.14.69.50:8088/Lunar/getLunar'), data, {
              emulateJSON: true
            }).then(res => {
             if (res.body.code == 4070) {
                this.$message({
                      showClose: true,
                      message: res.body.message,
                      type: 'success'
                    });
                    this.list = res.body.data[0]
                    this.list1 = res.body.data[1]
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
  width:80%;
  margin:auto;
}
</style>
