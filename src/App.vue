<template>
  <div>
    <v-header :seller="seller"></v-header>
    <ul class="tab border-1px">
      <li class="tab_item">
        <router-link to="/Goods">商品</router-link>
      </li>
      <li class="tab_item">
        <router-link to="/Ratings">评论</router-link>
      </li>
      <li class="tab_item">
        <router-link to="/Seller">商家</router-link>
      </li>
      <keep-alive>
        <router-view :seller="seller"></router-view>
      </keep-alive>
    </ul>
  </div>
</template>

<script>


</script>

<style lang="stylus" rel="stylesheet/stylus"  type="type/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    border-1px(rgba(7,17,27,0.1))
    .tab_item
      flex:1
      text-align:center
      & > a
        display:block
        font-size:14px
        color:rgb(77,85,93)
        &.active
          color:rgb(240,20,20)
</style>
