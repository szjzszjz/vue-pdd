<template>
  <div class="hot">
    <hot-swiper/>
  </div>
</template>

<script>

  // import 'swiper/dist/css/swiper.css'
  // import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HotSwiper from './HotSwiper'
  export default {
    name: 'Hot',
    components: {
      HotSwiper
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .hot {
    width: 100%
    height:800px
    /*display flex*/
    /*justify-content center*/
    /*align-items center*/
    /*background-color: rosybrown;*/
    margin-top 50px
  }

</style>
