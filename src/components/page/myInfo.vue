<template>
  <div class="personalCenter">
    <el-container>
      <el-header>个人中心</el-header>
      <div class="info">
          <el-main>
          <span class="logout" @click="logout()">退出登录</span>
                  <div class="img">
                  <img src="../../../static/images/head.png"/>
                  </div>
                       <div class="block">
                         <p>注册昵称：{{username}}</p>
                         <p>注册邮箱：{{useremail}}</p>
                         <p>注册时间：{{userdate}}</p>
                       </div>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="float: left"><b>账号绑定</b></span>
              </div>
              <div v-for="o in 1" :key="o" class="text item">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column label="账号名" width="180">
                    <template slot-scope="scope">
                      <p>{{ scope.row.name1 }}</p>
                      <div slot="reference" class="name-wrapper"></div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                      >
                        编辑
                      </el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >
                        解绑
                      </el-button>
                    </template>
                  </el-table-column>
                  <el-table-column label="更多" align="center">
                    <el-row>
                      <el-button
                        type="info"
                        icon="el-icon-message"
                        circle
                      ></el-button>
                      <el-button
                        type="warning"
                        icon="el-icon-star-off"
                        circle
                      ></el-button>
                      <el-button
                        type="share"
                        icon="el-icon-share"
                        circle
                      ></el-button>
                    </el-row>
                  </el-table-column>
                </el-table>
              </div>
              <div v-for="o in 1" :key="o" class="text item">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column label="账号名" width="180">
                    <template slot-scope="scope">
                      <p>{{ scope.row.name2 }}</p>
                      <div slot="reference" class="name-wrapper"></div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                      >
                        编辑
                      </el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >
                        解绑
                      </el-button>
                    </template>
                  </el-table-column>
                  <el-table-column label="更多" align="center">
                    <el-row>
                      <el-button
                        type="info"
                        icon="el-icon-message"
                        circle
                      ></el-button>
                      <el-button
                        type="warning"
                        icon="el-icon-star-off"
                        circle
                      ></el-button>
                      <el-button
                        type="share"
                        icon="el-icon-share"
                        circle
                      ></el-button>
                    </el-row>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
            <el-card class="box-card">
              <div>
                <span style="float: left" shadow="hover"><b>个人说明</b></span>
                <br />
                <br />
                <span>螃蟹在剥我的壳</span>
                <el-divider></el-divider>
                <span>笔记本在写我</span>
                <el-divider></el-divider>
                <span>漫天的我落在枫叶的雪花上</span>
              </div>
            </el-card>
          </el-main>
         </div>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'PersonalCenter',
    data() {
      return {
        username:'',
        useremail:'',
        userdate:'',
        form:{
          email:sessionStorage.getItem("email")
        },
        circleUrl:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        sizeList: ['large'],
        tableData: [
          {
            date: '2016-05-03',
            name1: 'Wechat',
            name2: 'Github',
          },
        ],
      }
    },
   created() {
       var data = this.form
        this.$http.post(('http://106.14.69.50:8088/user/findUserByEmail'), data, {
        emulateJSON: true
      }).then(res => {

         if(res.body.code == 4202){
              this.$message({
                dangerouslyUseHTMLString: true,
                message: '你还没有登录，点击左上角进行登录'
              });
         }
         this.useremail = res.body.data[0].email
         this.username = res.body.data[0].username
         this.userdate = res.body.data[0].regist_date
      }, res => {
      });
       },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      logout(){
        if(sessionStorage.getItem("email") != null){
        this.$http.post('http://106.14.69.50:8088/user/logout').then(res => {
       });
         sessionStorage.removeItem("email");
         this.$message({
                showClose: true,
                message: '退出成功',
                type: 'success'
              });
          window.location.reload()
         }else{
             this.$message({
              dangerouslyUseHTMLString: true,
              message: '你还没有登录，点击左上角进行登录'
            });
         }
      },
    },
  }
</script>
<style scoped>
  .el-header {
    line-height: 60px;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    background-color: #b3c0d1;
  }
  .info {
    margin: auto;
    width: 90%;
  }
  .el-divider {
      background-color: #CC99CC;
  }
  .el-card {
    //background-color: #d3dce6;
  }
  .el-table, .el-table__expanded-cell {
    background-color: #d3dce6;
  }

.el-table th, .el-table tr {
    background-color: #d3dce6;
  }
  .el-aside {
    line-height: 44px;
    text-align: center;
    background-color: #d3dce6;
  }
  .el-main {
    line-height: 36px;
    text-align: center;
    background-color: #e9eef3;
  }

  .img {
    margin: 10px auto;
  }
  .block {
    margin: auto;
    font-family: 楷体;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }

  .logout {
    float: right;
  }
  .box-card {
    border-radius: 30px;
  }
</style>
