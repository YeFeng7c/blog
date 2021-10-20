<template>
	<div>
		<div class="login">
			<p class="tital">汉字转拼音</p>
			<div class="inputInfo">
			<p>请输入汉字<el-input type="textarea" :rows="3"  v-model="form.text" clearable ></el-input></p>
			</div>
			<div class="buttonLink">
			<el-button type="primary" round  @click="select();">转换</el-button>
		  </div>
		</div>
		<div>
      <el-card class="el-card-m">
        <p>{{convertText}}</p>
      </el-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					text:''
				},
				convertText:''
			}
			},
			methods: {
       select() {
       var data = this.form
            this.$http.post(('http://106.14.69.50:8088/Convert/getConvert'), data, {
              emulateJSON: true
            }).then(res => {
             if (res.body.code == 5010) {
                this.$message({
                      showClose: true,
                      message: res.body.message,
                      type: 'success'
                    });
                    this.convertText = res.body.data
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
.desc {
  text-align: center;
  width:60%;
  margin: auto;
}
</style>
