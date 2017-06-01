<template>
  <div class="index">
    <router-view></router-view>

    <div class="menu" :class="{on:menu_off}">
      <div class="user">
        <div class="tit">
          <div class="pic-user">
            <img src="../assets/img/face.jpg" width="100%">
          </div>
          <div class="user-name">亲爱的不二</div>
        </div>
        <div class="set">
          <div class="set-i"><p>收藏</p></div>
          <div class="set-i"><p>消息</p></div>
          <div class="set-i"><p>设置</p></div>
        </div>
      </div>
      <div class="newList">
        <div class="liwrap">
          <router-link to="/" >
              <div class="list" @click="menu_fade()">
              <i class="i-home"></i>
              <h2>首页</h2>
              <em class="i-h-r"></em>
            </div>
          </router-link>
          <router-link to="/inside" >
          <div class="list" @click="menu_fade()">
            <span>日常心理学</span>
            <em class="i-r"></em>
          </div>
          </router-link>
          <div class="list">
            <span>用户推荐日报</span>
            <em class="i-r"></em>
          </div><div class="list">
            <span>电影日报</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>不许无聊</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>设计日报</span>
            <em class="i-r"></em>
          </div><div class="list">
            <span>大公司日报</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>财经日报</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>互联网安全</span>
            <em class="i-r"></em>
          </div><div class="list">
            <span>开始游戏</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>音乐日报</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>动漫日报</span>
            <em class="i-r"></em>
          </div>
          <div class="list">
            <span>体育日报</span>
            <em class="i-r"></em>
          </div>
        </div>
      </div>
      <div class="bot-menu">
        <div class="bot-btn"><p>完成</p></div>
        <div class="bot-btn"><p>夜间</p></div>
      </div>
    </div>
  </div>

</template>

<script>
// import contentList from '../components/contentList'
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
    // contentList
  },
  data () {
    return {
      msg: '',
      // menu_off:false
    }
  },
  // 钩子函数/页面加载完运行
  mounted:function(){
      // this.newfun();

  },
  //方法
  methods:{
      menu_fade(){
      // this.menu_off = !this.menu_off
      // this.$store.state.menu_off = !this.$store.state.menu_off
      // console.log(this.menu_off)
      // console.log(this.$store)
      // alert(!this.$store.state.menu_off)
      this.$store.commit('changeMenu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import '../assets/css/style.css'*/
.index{overflow: hidden;}

.menu{width: 188px;background: #232a30;position: fixed;top: 0;z-index: 10;height: 100%;transform: translateX(-188px);transition: all 0.5s}
.menu.on{transform: translateX(0);}
.menu .user{padding: 10px;box-sizing: border-box;width: 100%;position: absolute;left: 0;top: 0;}
.menu .tit{width: 100%;display: flex;justify-content: space-between;line-height: 35px;color: #94999d;font-size: 14px;margin-bottom: 10px;}
.menu .pic-user{width: 35px;height: 35px;border-radius: 50%;background: #fff;overflow: hidden;font-size: 0;margin-right: 10px;}
.menu .user-name{flex: auto;}
.menu .set{width: 100%;display: flex;justify-content: center;;}
.menu .set-i{flex: 1;}
.menu .set-i p{padding-top: 25px;text-align: center;font-size: 12px;color: #94999d;}
.menu .set-i:nth-of-type(1) p{background: url(../assets/img/i-coll.png) center top no-repeat;background-size: 25px;}
.menu .set-i:nth-of-type(2) p{background: url(../assets/img/i-msg.png) center top no-repeat;background-size: 25px;}
.menu .set-i:nth-of-type(3) p{background: url(../assets/img/i-set.png) center top no-repeat;background-size: 25px;}
.newList{width: 100%;position: relative;;top: 99px;}
.newList .list{padding: 15px;box-sizing: border-box;font-size: 14px;color: #94999d;display: flex;justify-content: space-between;position: relative;width: 100%;align-items: center;}
.newList .i-home{display: inline-block;background: url(../assets/img/i-home.png)center no-repeat;background-size: 100%;width: 24px;height: 24px;position: absolute;left: 15px;top: 50%;transform: translateY(-50%);}
.newList h2{font-size: 14px;padding-left: 45px;}
.newList .i-h-r{display: inline-block;width: 16px;height: 16px;background: url(../assets/img/i-r.png)center no-repeat;background-size: 15px;}
.newList .i-r{display: inline-block;width: 16px;height: 16px;background: url(../assets/img/i-add.png)center no-repeat;background-size: 15px;}
.newList .liwrap{width: 100%;height: 510px;overflow-x: hidden;z-index: 9} 
 
.newList .liwrap::-webkit-scrollbar {/*隐藏滚轮*/display: none;}

.bot-menu{width: 188px;display: flex;justify-content: space-between;padding: 15px 0;position: fixed;left: 0;bottom: 0;align-items: center;z-index: 10;background: #232a30;box-shadow: -37px -39px 48px #232a30, 0 0 0 blue, 0 0 0 red, 0 0 0 yellow;}
.bot-menu .bot-btn{flex: 1;text-align: center;color: #94999d}
.bot-menu .bot-btn p{font-size: 13px;padding-left: 32px;display: inline-block;}
.bot-menu .bot-btn:nth-of-type(1) p{background: url(../assets/img/i-downl.png) left center no-repeat;background-size: 20px;}
.bot-menu .bot-btn:nth-of-type(2) p{background: url(../assets/img/i-moon.png) left center no-repeat;background-size: 20px;}
</style>
