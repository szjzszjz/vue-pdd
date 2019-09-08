<template>
  <div class="home">
    <ly-tab
      v-model='selectedId'
      :items="items"
      :options="options"
      @change="handleChange"
      class="tab"
    />
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        selectedId: 0,
        urls: [
          '/home/hot',
          '/home/dress',
          '/home/box',
          '/home/mbaby',
          '/home/general',
          '/home/food',
          '/home/shirt',
          '/home/man',
          '/home/ele'
        ],
        items: [
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {
          activeColor: '#E12A1F'
        }
      }
    },
    methods: {
      handleChange(item, index) {
        console.log(item, index)
        this.$router.replace(this.urls[index])
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .home {
    /*background-color: #eeeeee;*/
  }
  .tab{
    position: fixed
    left:0
    top:0
  }
</style>
