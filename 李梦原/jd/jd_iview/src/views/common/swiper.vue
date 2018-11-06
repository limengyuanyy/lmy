<template>
<div class="banner_swiper">
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in data">
                <img :src="item.src" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
      data:{
          default:function () {
              return []
          }
      }
  },
  data() {
    return {
      value2: 0
    };
  },
  mounted(){
      if(this.data.length){
          this.init();
      }
  },
  updated() {
    this.init()
  },
  methods:{
      init(){
        let banner = new Swiper(".banner", {
            autoplay: {
                delay: 2000,
                disableOnInteraction:false
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets"
            }
        });
      }
  }
};
</script>
<style lang="less">
@r: 37.5rem;
.banner_swiper {
  .swiper-container,
  .banner {
    height: 183 / @r;
    background: #ccc;
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet {
      box-sizing: border-box;
      border-radius: 7px;
      height: 6px;
      width: 6px;
      border: 1px solid #fff;
      margin: 0 4px;
      display: inline-block;
      opacity: 1;
      background: transparent;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>

