<template>
  <!--  <show-fade>-->
  <div
    class="alert-view"
    :style="style"
    v-show="visible"
    @mouseenter="clearTimer"
    @mouseleave="createTimer"
  >
    <span><img :src="this.imageUrl" class="image" alt=""/></span>
    <div class="text">{{ message }}</div>
  </div>
  <!--  </show-fade>-->
</template>

<script>
  export default {
    name: 'AlertView',
    props: {
      message: {
        type: String,
        require: true
      },
      type: {
        type: String,
        default: 'info'
      },
      time: {
        type: Number,
        default: 2000
      }
    },
    data() {
      return {
        visible: true,
        fontSize: 16,
        images: {
          info: require('./images/info.png'),
          error: require('./images/error.png'),
          success: require('./images/success.png'),
          warning: require('./images/warning.png')
        },
        types: {
          info: {
            background: 'rgb(201,207,215)',
            border: '1px rgb(208, 220, 244) solid',
            color: 'rgb(92,94,98)',
            width: (this.message.length * 16) + 10 + 40 + 'px'
          },
          success: {
            background: 'rgba(240, 249, 235, 1)',
            border: '1px rgb(222, 247, 207) solid',
            color: 'rgb(103, 194, 58)',
            width: (this.message.length * 16) + 10 + 40 + 'px'
          },
          warning: {
            background: 'rgba(254, 240, 240, 1)',
            border: '1px rgb(242, 220, 220) solid',
            color: 'rgb(230, 162, 60)',
            width: (this.message.length * 16) + 10 + 40 + 'px'
          },
          error: {
            background: 'rgba(254, 240, 240, 1)',
            border: '1px #f9dbdb solid',
            color: 'rgb(245, 108, 108)',
            // 'font-size': this.fontSize + 'px',
            width: (this.message.length * 16) + 10 + 40 + 'px'
          }
        }
      }
    },

    computed: {
      style() {
        console.log('length:', this.message.length, '  width:', this.message.length * this.fontSize, '  type:', this.type)
        console.log(this.types[this.type].width)
        return this.types[this.type]
      },
      imageUrl() {
        return this.images[this.type]
      }
    },
    methods: {
      clearTimer() {
        window.clearTimeout(this.timerID)
      },
      createTimer() {
        this.timerID = setTimeout(() => {
          this.visible = false
        }, this.time)
      },
      // 动画完成之后执行此方法
      afterLeave(el) {
        // console.log('afterLeave')
        this.$emit('closed')
      },
      beforeLeave(el) {
        this.barHeight = this.$el.offsetHeight
      }
    },
    // 页面渲染完成之后加载计时器
    mounted() {
      this.createTimer()
    },
    // 离开组件的时候销毁定时器
    beforeDestroy() {
      window.clearTimeout(this.timerID)
    }
  }
</script>

<style lang="stylus" scoped>
  .alert-view {
    display: flex
    justify-content center
    text-align: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    height: 40px;
    border-radius: 6px;
    transition: all 0.3s;
  }

  .text {
    height: 40px;
    line-height: 40px
    padding 0px 10px 0px 0px
    /*background-color: red;*/
    font-size 16px
  }

  .image {
    /*background-color: green;*/
    padding: 10px
    width: 20px;
    height: 20px;
  }
</style>
