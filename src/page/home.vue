<template>
    <div class="index-wrap" :class="{on:menu_off}">
      <div class="header">
          <h1>今日热闻</h1>
      <span class="menu-i" @click="menu_fade()">
      </span>
      </div>
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.image" width="100%"> 
          <h2>{{item.title}}</h2>     
        </mt-swipe-item>
      </mt-swipe>
      <contentList></contentList>
    </div>
</template>

<script>
import axios from 'axios'
import api from './../api/index'
import contentList from '../components/contentList'
import { mapState } from 'vuex';
export default {
  created:function(){
    // alert(1)

  },
  computed: mapState ([
    //计算属性
    // 映射 this.menu_off 为 store.state.menu_off
    'menu_off'
  ]),
  name: 'index',
  components: {
    contentList
  },
  data () {
    return {
      msg: '',
      imgList:[],//首页轮播图片
      timeList:[],
    }
  },
  // 页面加载完运行
  mounted:function(){
    this.fetchData()
  },
  methods:{
      //菜单动画
      menu_fade(){
      this.$store.commit('changeMenu')
    },
    //调用首页最新消息
    fetchData() {
      api.getNews().then(res=>{
        this.imgList = res.data.top_stories;
        this.timeList.push(res.data)
        // console.log(this.newTitle)
      }).catch((error) => {
        console.log(error)
      });

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index h1{color: #fff;font-size: 1.2rem;}
.mint-swipe{height: 200px;position: relative;}
.mint-swipe img{width: 100%;position: relative;top: 50%;transform: translateY(-50%);}
.menu-i{width: 30px;height: 30px;display: inline-block;background: url(../assets/img/menu.png) center no-repeat ;position: absolute;;left: 10px;top: 10px;z-index: 1;background-size: 30px;}
.header{height: 50px;width: 100%;position: fixed;left: 0;top: 0;line-height: 50px;z-index: 1;text-align: center;}
.index-wrap.on{transform: translateX(188px);}
.index-wrap{transform: translateX(0);transition: all 0.5s}
.mint-swipe h2{color: #fff;font-size: 16px;position: absolute;padding: 0 15px;left: 0;bottom: 15px;height: 38px;box-sizing: border-box;}
</style>
