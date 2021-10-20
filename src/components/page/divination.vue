<template>
	<div>
		<div class="login">
		<div class="desc">
		<p>《小六壬》共有六种格局，传说为三国诸葛孔明所创，为行军打仗是在上马前掐指算站。</p>
		<p>其算法：即月上起日，日上退一位起数，数即随机数，看其灵机一动，心血来潮时心中所想之数。</p>
		</div>
			<p class="tital">小六壬</p>
			<div class="inputInfo">
			<p>请输入阴历月份(当前月)<el-input  v-model="form.month" clearable ></el-input></p>
			<p>请输入阴历日期(当前日)<el-input  v-model="form.day" clearable ></el-input></p>
			<p>请输入随机数(1~6)<el-input  v-model="form.random" clearable ></el-input></p>
			</div>
			<div class="buttonLink">
			<el-button type="primary" round  @click="select();">起卦</el-button>
		  </div>
		</div>
		<div>
      <el-card class="el-card-m">
        <p>{{name}}</p>
        <p>{{description}}</p>
        <p>{{this.more}}</p>
      </el-card>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					month:'',
					day:'',
					random:'',
				},
				name: '',
				description: '',
				more:''
			}
			},
			methods: {
       select() {
       var data = this.form
            this.$http.post(('http://106.14.69.50:8088/Divination/getDivination'), data, {
              emulateJSON: true
            }).then(res => {
             if (res.body.code == 4090) {
                this.$message({
                      showClose: true,
                      message: res.body.message,
                      type: 'success'
                    });
                    this.name = "小六壬掌诀： " + res.body.data.name
                    this.description = res.body.data.description
                    this.more = res.body.data.more
                     let converter = new showdown.Converter({
                        // 使代码高亮显示
                        extensions: [showdownHighlight]
                      });
                      // markdown 转 html
                    this.more = converter.makeHtml(this.more);
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
