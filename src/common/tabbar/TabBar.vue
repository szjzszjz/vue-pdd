<template>
  <div class="bottom-bar">
    <div class="bar-item" @click="switchTo('/home')">
      <img :src="$route.path.includes('/home') ? this.images[0].select : this.images[0].normal" alt="">
      <span :class="{on: '/home' === $route.path}">首页</span>
    </div>
    <div class="bar-item" @click="switchTo('/recommend')">
      <img :src="$route.path.includes('/recommend') ? this.images[1].select : this.images[1].normal" alt="">
      <span :class="{on: '/recommend' === $route.path}">推荐</span>
    </div>
    <div class="bar-item" @click="switchTo('/search')">
      <img :src="$route.path.includes('/search') ? this.images[0].select : this.images[2].normal" alt="">
      <span :class="{on: '/search' === $route.path}">搜索</span>
    </div>
    <div class="bar-item" @click="switchTo('/chat')">
      <img :src="$route.path.includes('/chat') ? this.images[3].select : this.images[3].normal" alt="">
      <span :class="{on: '/chat' === $route.path}">聊天</span>
    </div>
    <div class="bar-item" @click="switchTo('/me')">
      <img :src="$route.path.includes('/me') ? this.images[4].select : this.images[4].normal" alt="">
      <span :class="{on: '/me' === $route.path}">我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data() {
      return {
        images: [
          {
            normal: require('./images/icon_home.png'),
            select: require('./images/icon_home_selected.png')
          },
          {
            normal: require('./images/icon_intro.png'),
            select: require('./images/icon_intro_selected.png')
          },
          {
            normal: require('./images/icon_search.png'),
            select: require('./images/icon_search_selected.png')
          },
          {
            normal: require('./images/icon_chat.png'),
            select: require('./images/icon_chat_selected.png')
          },
          {
            normal: require('./images/icon_mine.png'),
            select: require('./images/icon_mine_selected.png')
          }
        ]

      }
    },
    methods: {
      switchTo(path) {
        console.log(this.$route.path, '--->', path)
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .bottom-bar {
    background-color: #eeeeee;
    width: 100%
    height: 50px
    position: fixed
    left: 0px
    bottom: 0px
    display: flex
    z-index 999
  }

  .bar-item {
    flex 1
    justify-content center
    flex-direction column
    align-items: center
    display: flex
    color: #686868
    font-size 12px
  }

  .bar-item img {
    margin-bottom 5px
    width 25px
  }

  .on {
    color: red
  }

</style>
