<template>
  <div class="info">
    <b-card>
     <b-container fluid>
     <div class="headerInfo">
      <b-card-title>{{this.title}}</b-card-title>
        <b-card-text>
          <b-badge variant="info">原创</b-badge>&nbsp;&nbsp;&nbsp;<i class="icon iconfont icon-riqi"></i>&nbsp;{{this.date}}&nbsp;&nbsp;&nbsp;作者：{{this.author}}&nbsp;&nbsp;&nbsp;分类：<router-link to>{{this.classification}} </router-link>
        </b-card-text>
     </div>
        <hr/>
        <div class="content">
          <b-card-text class="text">{{this.content}}</b-card-text>
        </div>
     </b-container>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "articlesInfo",
   data() {
        return {
          id:'',
          title:'',
          author:'',
          content:'',
          classification:'',
          date:'',
          tag:'',
        }
     },
    created() {
        this.id = this.$route.query.id
        var that = this
        this.$http.post('http://106.14.69.50:8088/articles/findArticlesById?articles_id=' + that.id).then(res => {
          this.title = res.body.data[0].articles_title
          this.content = res.body.data[0].articles_content
          this.author = res.body.data[0].articles_author
          this.classification = res.body.data[0].articles_classification
          this.date = res.body.data[0].articles_date
          this.tag = res.body.data[0].articles_tag
              let converter = new showdown.Converter({
                // 使代码高亮显示
                extensions: [showdownHighlight]
              });
              // markdown 转 html
              this.content = converter.makeHtml(this.content);


        });
        },
    methods: {

    }
};
</script>

<style scoped>
.info {
  width: 80%;
  margin: auto;
}
.headerInfo {
  text-align: center;
  margin-top: 20px;
}
.text {
    white-space: pre-wrap;
}
</style>
