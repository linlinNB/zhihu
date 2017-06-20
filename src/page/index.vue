<template>
  <div class="index">

      <router-view></router-view>

    <div class="menu" :class="{on:menu_off}">
      <div class="user">
        <div class="tit">
        <animated-jello>
          <div class="pic-user">
            <img src="../assets/img/face.jpg" width="100%">
          </div>
          </animated-jello>
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
              <div class="list" @click="insideFun(),indexChangeTrue()">
              <i class="i-home"></i>
              <h2>首页</h2>
              <em class="i-h-r"></em>
            </div>
          </router-link>
          <router-link to="/inside" v-for="item in themeList" :key="item.id">
          <div class="list" @click="insideFun(item.id)">
            <span>{{item.name }}</span>
            <em class="i-r"></em>
          </div>
          </router-link>

        </div>
      </div>
      <div class="bot-menu" :class="{on:menu_off}">
        <div class="bot-btn"><p>完成</p></div>
        <div class="bot-btn"><p>夜间</p></div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import api from './../api/index'
import { mapState } from 'vuex';
export default {
  created:function(){

  },
  computed: mapState ([
    //计算属性
    // 映射 this.menu_off 为 store.state.menu_off
    'menu_off','newList'
  ]),
  name: 'index',
  components: {
    // contentList
  },
  data () {
    return {
      msg: '',
      themeList:[]
    }
  },
  // 钩子函数/页面加载完运行
  mounted:function(){
      // this.newfun();
      this.getThemeList()
  },
  //方法
  methods:{
      indexChangeTrue(){
        this.$store.dispatch('indexChangeTrue')
      },
      //把获取到的id传给insideFun
      insideFun(themId){
      this.$store.dispatch('insideFun',{themId:themId})

      // console.log(themId)
    },
    //获取日报列表
      getThemeList() {
      api.getTopics().then(res=>{
        this.themeList = res.data.others;
        // console.log(this.themeList)
      }).catch((error) => {
        console.log(error)
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import '../assets/css/style.css'*/
.index{overflow: hidden;}

.menu{width: 188px;background: #232a30;position: fixed;top: 0;z-index: 10;height: 100%;left: -188px;transition: all 0.5s}
.menu.on{left: 0;}
.menu .user{padding: 10px;box-sizing: border-box;width: 100%;position: absolute;left: 0;top: 0;}
.menu .tit{width: 100%;display: flex;justify-content: space-between;line-height: 35px;color: #94999d;font-size: 14px;margin-bottom: 10px;}
.menu .pic-user{width: 35px;height: 35px;border-radius: 50%;background: #fff;overflow: hidden;font-size: 0;margin-right: 10px;}
.menu .user-name{flex: auto;}
.menu .set{width: 100%;display: flex;justify-content: center;;}
.menu .set-i{flex: 1;}
.menu .set-i p{padding-top: 25px;text-align: center;font-size: 12px;color: #94999d;margin: 0 0 !important}
.menu .set-i:nth-of-type(1) p{background: url(../assets/img/i-coll.png) center top no-repeat;background-size: 25px;}
.menu .set-i:nth-of-type(2) p{background: url(../assets/img/i-msg.png) center top no-repeat;background-size: 25px;}
.menu .set-i:nth-of-type(3) p{background: url(../assets/img/i-set.png) center top no-repeat;background-size: 25px;}
.newList{width: 100%;position: relative;;top: 105px;}
.newList .list{padding: 15px;box-sizing: border-box;font-size: 14px;color: #94999d;display: flex;justify-content: space-between;position: relative;width: 100%;align-items: center;}
.newList .i-home{display: inline-block;background: url(../assets/img/i-home.png)center no-repeat;background-size: 100%;width: 24px;height: 24px;position: absolute;left: 15px;top: 50%;transform: translateY(-50%);}
.newList h2{font-size: 14px;padding-left: 45px;}
.newList .i-h-r{display: inline-block;width: 16px;height: 16px;background: url(../assets/img/i-r.png)center no-repeat;background-size: 15px;}
.newList .i-r{display: inline-block;width: 16px;height: 16px;background: url(../assets/img/i-add.png)center no-repeat;background-size: 15px;}
.newList .liwrap{width: 100%;height: 510px;overflow-x: hidden;z-index: 9;} 
 
.newList .liwrap::-webkit-scrollbar {/*隐藏滚轮*/display: none;}

.bot-menu{width: 188px;display: flex;justify-content: space-between;padding: 15px 0;position: fixed;left: 0;bottom: 0;align-items: center;z-index: 10;background: #232a30;box-shadow: -37px -39px 48px #232a30, 0 0 0 blue, 0 0 0 red, 0 0 0 yellow;left: -188px;transition: left .5s}
.bot-menu.on{left: 0;}
.bot-menu .bot-btn{flex: 1;text-align: center;color: #94999d}
.bot-menu .bot-btn p{font-size: 13px;padding-left: 32px;display: inline-block;}
.bot-menu .bot-btn:nth-of-type(1) p{background: url(../assets/img/i-downl.png) left center no-repeat;background-size: 20px;}
.bot-menu .bot-btn:nth-of-type(2) p{background: url(../assets/img/i-moon.png) left center no-repeat;background-size: 20px;}
</style>
