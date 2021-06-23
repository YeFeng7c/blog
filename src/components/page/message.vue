<template>
<div>
		 <p class="text">有什么话想说的就留个言吧</p>
		 <div class="inputMessage">
      <el-input placeholder="请输入名字" v-model="form.message_name" clearable>
      </el-input><br/><br/>
      <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="form.message_info" class="el-input-info">
      </el-input><br/><br/>
      <el-button type="primary" @click="submit();">留言</el-button>
	   </div>

      <div class="messageInfo">
            <el-card class="el-card-d" shadow="always">
             <div class="infinite-list-wrapper" style="overflow:auto;">
                <el-timeline
                  infinite-scroll-disabled="disabled">
                  <el-timeline-item v-for="(item,index) in list"  :key="index" :timestamp='item.message_time' placement="top">
                    <el-card class="el-card-m" style="height:120px">
                      <span class="name">{{item.message_name}}：</span>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.message_info}}</p>
                    </el-card>
                    <button class="reply" @click="dialog(item.id,item.message_name)">回复</button>
                       <div v-for="(replyItem,index) in replyList" :key="index">
                                  <div v-if="replyItem.message_id == item.id" >
                                   <el-timeline-item  :timestamp='replyItem.reply_date' placement="top" style="margin-top:30px">
                                       <el-card class="el-card-m" style="height:120px; margin-top:20px">
                                          <span class="name">{{replyItem.reply_name}}&nbsp;回复给：{{item.message_name}}</span>
                                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{replyItem.reply_info}}</p>
                                        </el-card>
                                       <button class="reply" @click="dialog(replyItem.id,replyItem.reply_name)">回复</button>
                                         </el-timeline-item>
                                  </div>
                                  </div>
                  </el-timeline-item>
              </el-timeline>
              </div>
            </el-card>
      </div>
          <el-dialog title="留言回复" :visible.sync="dialogFormVisible">
                    <el-form :model="reply_form">
                      <el-form-item label="回复给">
                        <span>{{name}}</span>
                      </el-form-item>
                      <el-form-item label="输入名字">
                        <el-input type="textarea" :rows="1" v-model="reply_form.reply_name" auto-complete="off"></el-input><br/>
                      </el-form-item>
                     <el-form-item label="输入内容">
                        <el-input type="textarea" :rows="3" v-model="reply_form.reply_info" auto-complete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="reply()">确 定</el-button>
                    </div>
                  </el-dialog>
</div>
</template>

<script >
  export default {
    data() {
      return {
        id: '',
        name: '',
        dialogFormVisible: false,
        formLabelWidth: '80px',
        list: [],
        replyList: [],
        form: {
          message_name: '',
          message_info: '',
        },
        reply_form: {
          message_id: '',
          reply_name: '',
          reply_info: '',
        },
      };
    },
    methods: {
      submit: function() {
        var data = this.form
        this.$http.post(('http://106.14.69.50:8088/message/info'), data, {
          emulateJSON: true
        }).then(res => {
          // console.log(res.body);
          if (res.body.code == 4000) {
            this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'success'
                });
              //window.location.reload()
              this.Refresh()
              this.form.message_name = ""
              this.form.message_info = ""
          } else {
             this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'warning'
                });
          }

        }, res => {
          // console.log(res);
        });
      },
      dialog(id,name){
        this.dialogFormVisible = true;
        this.id = id
        this.name = name
        this.reply_form.message_id = id
      },
      Refresh:function(){
        // fetch方式实现跨域
              this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
                 //console.log(res.body.data)
                this.list = res.body.data
              });
               var data = this.reply_form.message_id
                this.$http.post(('http://106.14.69.50:8088/replyMessage/findReplayMessage'), data, {
                emulateJSON: true
              }).then(res => {
               // console.log(res.body);
                this.replyList = res.body.data
              }, res => {
              });
      },
      reply:function(){
       var data = this.reply_form
          this.$http.post(('http://106.14.69.50:8088/replyMessage/insertReplyMessage'), data, {
          emulateJSON: true
        }).then(res => {
         // console.log(res.body);
           if (res.body.code == 4102) {
            this.$message({
                  showClose: true,
                  message: res.body.message,
                  type: 'success'
                });
                //window.location.reload()
                this.Refresh()
              this.dialogFormVisible = false
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
    },
    created() {
      // fetch方式实现跨域
      this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
         //console.log(res.body.data)
        this.list = res.body.data
      });
       var data = this.reply_form.message_id
        this.$http.post(('http://106.14.69.50:8088/replyMessage/findReplayMessage'), data, {
        emulateJSON: true
      }).then(res => {
       // console.log(res.body);
        this.replyList = res.body.data
      }, res => {

      });
    },
  }
</script>

<style scoped>

	.text {
	  margin-top: 20px;
		font-size: 22px;
		font-weight: bold;
    text-align: center;
	}

  .reply {
    width: 60px;
    height: 30px;
    color: wheat;
    border: none;
    background-color: orange;
    float: right;
  }

  .inputMessage {
    width: 60%;
    margin: 0 auto;
 }

  .messageInfo {
    width: 90%;
    margin: 20px auto;
  }

  .name{
    font-weight: bold;
  }
</style>
