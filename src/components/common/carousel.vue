<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- caption属性可以设置标题， text属性可以设置文字 -->
      <b-carousel-slide img-src="./static/images/carousel/first.png" caption="Welcome" text="天真无邪"></b-carousel-slide>
      <b-carousel-slide img-src="./static/images/carousel/second.png"></b-carousel-slide>
      <b-carousel-slide img-src="./static/images/carousel/third.png"></b-carousel-slide>
      <b-carousel-slide img-src="./static/images/carousel/fourth.png"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style scoped>
</style>
