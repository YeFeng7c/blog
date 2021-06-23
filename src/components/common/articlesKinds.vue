<template>
  <b-card border-variant="light" header="文章分类" align="left" class="main">
    <b-container fluid>
      <b-card-text>
        <router-link to="/" @click.native="kinds">全部文章</router-link>
        <b-badge variant="light" class="float-right">20篇</b-badge>
      </b-card-text>
      <b-card-text>
        <b-link>学习经验</b-link>
        <b-badge variant="light" class="float-right">20篇</b-badge>
      </b-card-text>
      <b-card-text>
        <b-link>Java应用</b-link>
        <b-badge variant="light" class="float-right">20篇</b-badge>
      </b-card-text>
      <b-card-text>
        <b-link>常用工具</b-link>
        <b-badge variant="light" class="float-right">20篇</b-badge>
      </b-card-text>
      <b-card-text>
        <b-link>数据结构</b-link>
        <b-badge variant="light" class="float-right">20篇</b-badge>
      </b-card-text>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: "articleKinds",
   data() {
          return {
            total:null,
            list:[],
            form:{
              pageNum:1,
              pageSize:4,
            },
          }
       },
    methods: {
      handleSizeChange:function(size){
        this.form.pageSize=size;

      },
      handleCurrentChange:function(current){
        this.form.pageNum=current;
        var data = this.form
        this.$http.post(('http://106.14.69.50:8088/articles/findAllArticles'), data, {
              emulateJSON: true
            }).then(res => {
                this.total = res.body.data.articlesPageInfo.total
                this.list = res.body.data.articlesPageInfo.list
                this.articlesKinds_name1 = res.body.data.articlesKinds[0].articlesKinds_name
                this.articlesKinds_name2 = res.body.data.articlesKinds[1].articlesKinds_name
                this.articlesKinds_name3 = res.body.data.articlesKinds[2].articlesKinds_name
                this.articlesKinds_name4 = res.body.data.articlesKinds[3].articlesKinds_name
            }, res => {
            });
      },
      kinds:function(){
      var data = this.form
        this.$http.post(('http://106.14.69.50:8088/articles/findAllArticles'), data, {
              emulateJSON: true
            }).then(res => {
                this.total = res.body.data.articlesPageInfo.total
                this.list = res.body.data.articlesPageInfo.list
                this.name1 = res.body.data.articlesKinds[0].articlesKinds_name
                this.name2 = res.body.data.articlesKinds[1].articlesKinds_name
                this.name3 = res.body.data.articlesKinds[2].articlesKinds_name
                this.name4 = res.body.data.articlesKinds[3].articlesKinds_name
            }, res => {
            });
      },
    }
};
</script>

<style scoped>
.main {
  margin-top: 10px;
}
.float-right {
  float: right;
}
</style>
