<template>
  <b-card border-variant="light" header="我的博文" align="left">
    <b-container fluid>
      <b-row >
        <b-col cols="12" sm="12" md="12" lg="12" xl="12" >
          <b-card class="card" v-for="(item,index) in list"  :key="index" >
            <router-link :to="{path: 'articlesInfo', query: {id: item.articles_id }}">
              <b-card-title>{{item.articles_title}}</b-card-title>
            </router-link>
            <b-card-text class="small text-muted">
              <b-badge variant="info">原创</b-badge>&nbsp;&nbsp;作者：{{item.articles_author}}&nbsp;&nbsp;分类：<router-link :to="{path: '/mainPage', query: {id: item.articles_classification }}" @click.native="kinds">{{item.articles_classification == 1 ? name1:item.articles_classification == 2 ? name2:item.articles_classification == 3 ? name3:item.articles_classification == 4 ? name4:"未分类"}} </router-link>
            </b-card-text>
            <b-card-text class="text">{{item.articles_content}}</b-card-text>
            <b-card-text class="small text-muted">
              <i class="icon iconfont icon-riqi"></i>{{item.articles_date}}
              <i class="icon iconfont icon-yuedu"></i>{{item.articles_read}}
              <i class="icon iconfont icon-pinglun"></i>{{item.articles_like}}
              <div class="tag-box">
                <b-link class="tag" variant="info">
                  <i class="icon iconfont icon-tag"></i>服务器
                  <i class="icon iconfont icon-tag"></i>Java
                </b-link>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="12" xl="12">
          <!-- 分页 -->
          <div class="overflow-auto pagination">
           <el-pagination
             background
             @size-change="handleSizeChange"
             @current-change="handleCurrentChange"
             :current-page="form.pageNum"
             :page-size="form.pageSize"
             layout="prev, pager, next"
             :total= "total">
           </el-pagination>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: "articles",
   data() {
        return {
          total:null,
          list:[],
          name1:'',
          name2:'',
          name3:'',
          name4:'',
          form:{
            pageNum:1,
            pageSize:4,
          },
        }
     },
    created() {
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

            this.id = this.$route.query.id
            var that = this
            var data = this.form
            this.$http.post(('http://106.14.69.50:8088/articles/findArticlesByKinds?articles_classification=' + this.id), data, {
                  emulateJSON: true
                }).then(res => {
                    this.total = res.body.data.total
                    this.list = res.body.data.list
                }, res => {
                });
      },
      kinds:function(){
        this.id = this.$route.query.id
        var that = this
        var data = this.form
        this.$http.post(('http://106.14.69.50:8088/articles/findArticlesByKinds?articles_classification=' + this.id), data, {
              emulateJSON: true
            }).then(res => {
                this.total = res.body.data.total
                this.list = res.body.data.list
            }, res => {
            });
      },
    }
};
</script>

<style scoped>
.card {
  margin-top: 10px;
}

.tag-box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: right;
}
.tag {
  text-decoration: none;
  margin-right: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon {
  margin: 0 4px 0 8px;
}
.pagination {
  margin-top: 12px;
  float: right;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
