<template>
    <div class="index-wrap" :class="{on:menu_off}">
  <!--     backTop -->
    <div class="glyphicon glyphicon-triangle-top" href="javascript:;" id="hoTop"></div>
    <!--     遮罩层 -->
    <div class="pop" v-if='homePop' @click="homePopFalse()"></div> 
      <div class="header" :class="{on:menu_off}" id='homeTitle'>
          <h1>今日热闻</h1>
      <span class="menu-i" @click="menu_fade(),homePopTrue()" >
      </span>
      </div>
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="item in imgList" :key="item.id">
        <router-link to="/homeInside">
          <img :src="item.image" width="100%" @click="goNewdetails(item.id)"> 
          <h2>{{item.title}}</h2> 
         </router-link> 
        </mt-swipe-item>
      </mt-swipe>
      <contentList></contentList>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import axios from 'axios'
import api from './../api/index'
import contentList from '../components/contentList'
import { mapState } from 'vuex';
export default {
  created:function(){
  },
  computed: mapState ([
    //计算属性
    // 映射 this.menu_off 为 store.state.menu_off
    'menu_off','homePop'
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
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    }),
    this.changeTitleColor()
  },
  methods:{
    //菜单点击false
    homePopFalse(){
      this.$store.commit('homePopFalse')
    },
    //菜单点击true
    homePopTrue(){
      this.$store.commit('homePopTrue')
      // console.log("点击menu了")

    },
    //菜单动画
    menu_fade(){
      this.$store.commit('changeMenu')
    },
    //调用首页最新消息
    fetchData() {

      api.getNews().then(res=>{
        this.imgList = res.data.top_stories;
        this.timeList.push(res.data)

        setTimeout(function(){Indicator.close();},1000);
        // console.log(this.newTitle)
      }).catch((error) => {
        console.log(error)
      });
    },
    //首页点击跳转详情页
    goNewdetails(newsId){
      this.$store.dispatch('goNewdetails',{newsId:newsId})
      // console.log(newsId)
    },
    //标题颜色下拉变色
    changeTitleColor(){
        var hoTop = document.getElementById('hoTop');
        var homeTitle = document.getElementById('homeTitle');
        var height = document.documentElement.clientHeight;//获取可视区域高度
        var timer = null;
        window.onscroll = function(){ 
          var a = true;
          var osTop = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的位置，返回数值,,谷歌支持后面的
          if (osTop>=height){ 
            hoTop.style.display="block";
          }else{ 
            hoTop.style.display="none";
          }
          if (!a){ 
            clearInterval(timer);
          }

          if(osTop>=200){
           homeTitle.style.background = '#0588e9';
          }else{
           homeTitle.style.background = 'none';
          }
        }
        hoTop.onclick = function(){ 
        //设置定时器
        timer = setInterval(function(){ 
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条的位置，返回数值,,谷歌支持后面的
        var speed = Math.floor(-osTop /6);

        document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
        
          if(osTop ==0){ 
            clearInterval(timer);
          }
        },30)//动画，定时器 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pop{position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: 10}
.index h1{color: #fff;font-size: 1.2rem;z-index: 2;margin: 0 auto;}
.mint-swipe{height: 200px;position: relative;}
.mint-swipe img{width: 100%;position: relative;top: 50%;transform: translateY(-50%);z-index: 0;filter: brightness(80%);}
.menu-i{width: 30px;height: 30px;display: inline-block;background: url(../assets/img/menu.png) center no-repeat ;position: absolute;;left: 10px;top: 10px;z-index: 1;background-size: 30px;}
.header{height: 50px;width: 100%;position: fixed;left: 0;top: 0;line-height: 50px;z-index: 1;text-align: center;}
.index-wrap.on{position: relative;left: 188px;}
.index-wrap{left: 0;transition: left 0.5s;position: relative;}
.header.on{position: absolute;left: 0;top: 0}
.mint-swipe h2{color: #fff;font-size: 16px;position: absolute;padding: 0 15px;left: 0;bottom: 15px;height: 38px;box-sizing: border-box;z-index: 2}
/*.pop{width: 100%;height: 100%;position: absolute;left: 0;top: 0;background: rgba(0,0,0,.3);z-index: 1}*/
#hoTop{width: 50px;height: 50px;position: fixed;bottom: 30px; display: none;color: red;right: 15px;z-index: 1;background: #000;background: url(../assets/img/scrollTop.png) center no-repeat;background-size: 100%;}
</style>

