<template>
  <div>
    <!-- banner -->
    <div class="message-banner">
      </div>
      <!-- 弹幕列表 -->
      <div class="barrage-container">
        <vue-baberrage :barrageList="list">
          <template v-slot:default="slotProps">
            <span class="barrage-items">
              <img
                  :src="slotProps.item.avatar"
                  width="30"
                  height="30"
                  style="border-radius:50%"
              />
              <span class="ml-2">{{ slotProps.item.message_name }} :</span>
              <span class="ml-2">{{ slotProps.item.message_info }}</span>
            </span>
          </template>
        </vue-baberrage>
      </div>
    </div>
  </div>
</template>

<script>


export default {


  data() {
    return {
      list:[],
      avatar: '',
    }
  },
    created() {
         this.$http.post('http://106.14.69.50:8088/message/findAllMessage').then(res => {
                 console.log(res.body.data)
                this.list = res.body.data
              });
    },
  methods: {

  },
}
</script>

<style scoped>
.message-banner {
  position: absolute;

  left: 0;
  right: 0;
  height: 100vh;
  background-image: url("");

  animation: header-effect 1s;
}
.message-title {
  color: #eee;
  animation: title-scale 1s;
}
.message-container {
  position: absolute;
  width: 360px;
  top: 35%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 5;
  margin: 0 auto;
  color: #fff;
}
.message-input-wrapper {
  display: flex;
  justify-content: center;
  height: 2.5rem;
  margin-top: 2rem;
}
.message-input-wrapper input {
  outline: none;
  width: 70%;
  border-radius: 20px;
  height: 100%;
  padding: 0 1.25rem;
  color: #eee;
  border: #fff 1px solid;
}
.message-input-wrapper input::-webkit-input-placeholder {
  color: #eeee;
}
.message-input-wrapper button {
  outline: none;
  border-radius: 20px;
  height: 100%;
  padding: 0 1.25rem;
  border: #fff 1px solid;
}
.barrage-container {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100% -50px);
  width: 100%;
}
.barrage-items {
  background: rgb(0, 0, 0, 0.7);
  border-radius: 100px;
  color: #fff;
  padding: 5px 10px 5px 5px;
  align-items: center;
  display: flex;
}
.ml-3{
  margin-left: 12px!important;
}

.ml-2{
  margin-left: 8px!important;
}
</style>
