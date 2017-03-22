<template>
  <div>
    <!-- 头部 -->
    <!-- <v-header :seller="seller"></v-header> -->
    <!-- 导航 -->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header';
  const ERR_OK = 0;
  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        res = res.body;
        if (res.errno === ERR_OK) {
          this.seller = res.data;
        }
      });
    },
    components: {
      'v-header': Header
    }
  };
</script>

<style lang="scss" scoped>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .tab:after{
    display: block;
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    background: rgba(7, 17, 27, 0.1);
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 0 0;
  }
  .tab .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab .tab-item>a{
    display: block;
    font-size: 14px;
    color: rgba(77, 85, 93, 1.0);
  }
  .tab .tab-item>a.active{
    color: rgb(240, 20, 20);
  }
</style>
