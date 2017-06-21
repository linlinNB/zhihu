<template>

  <div class="inside" :class="{on:menu_off}">
  <backScroll></backScroll>
    <!--     遮罩层 -->
    <div class="pop" v-if='homePop' @click="homePopFalse()"></div>
  	<div class="inhead bBor" id="inhead">
  		<div class="goback" @click="menu_fade(),homePopTrue()"></div>
  			<h2>{{this.tit}}</h2>
  		<div class="gor"></div>
  	</div>
    <mt-loadmore :top-method="loadTop"  ref="loadmore">
  	<div class="author bBor">
  		<span>主编</span>
  		<div class="content">
  			<img src="../assets/img/face-pbulic.png" width="100%">
  		</div>
  		<div class="goright">
  			
  		</div>
  	</div>
    
  	<contentList id='contentList'></contentList>
  </mt-loadmore>
  </div>
  
</template>

<script>
import { Loadmore } from 'mint-ui';
import { Indicator} from 'mint-ui';
import backScroll from '../components/backScroll'
import axios from 'axios'
import api from './../api/index'
import { mapState , mapActions} from 'vuex';
import contentList from '../components/contentList'


export default {

  data () {
    return {
      msg: '',
      titNum:0,
      tit:''
    }
  },
  mounted:function(){
    this.getThemeList()
    //loading
    Indicator.open({
      text: '加载中...',
      spinnerType: 'snake'
    })

    

  },
  components:{
    contentList,backScroll
  },
  computed: mapState ([
    //计算属性
    // 映射 this.menu_off 为 store.state.menu_off
    'menu_off','newListId','homePop'
  ]),
  watch: {
    // 如果 newListId 发生改变，这个函数就会运行
    newListId: function (){
      // alert(this.newListId)
      this.getThemeList()
      // console.log(this.newListId)
    }
  },
  methods:{
    //菜单点击false
    homePopFalse(){
      this.$store.commit('homePopFalse')
    },
    //菜单点击true
    homePopTrue(){
      this.$store.commit('homePopTrue')
      console.log(this.homePop)
    },
    //菜单动画
    menu_fade(){
    this.$store.commit('changeMenu')
    },
    //获取日报列表
    getThemeList() {
    api.getTopics().then(res=>{
      this.themeList = res.data.others;
      setTimeout(function(){Indicator.close();},1000);
      const _this = this;
      this.themeList.forEach(e=>{
        if( e.id==this.newListId.themId){
          this.tit = e.name
        }
      })
      //this.themeList
      // console.log(this.tit)
    }).catch((error) => {
      console.log(error)
    });
  },
  //下拉图片变大
  loadTop(id) {
    console.log(this.$refs)
    this.$refs.loadmore.onTopLoaded(id);
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pop{position: absolute;left: 0;top: 0;width: 100%;height: 100%;z-index: 10}
.inside{transition: all 0.5s;position: relative;left: 0;}
.inside.on{left: 188px;}
.content img{margin: 0;}
.content{margin: 0;}
.inhead{height: 45px;display: flex;justify-content: space-between;align-items: center;background: url(../assets/img/p1.jpg) center no-repeat;background-size: 100%;}
.inhead .goback{width: 45px;height: 45px;background: url(../assets/img/i-left.png) center no-repeat;background-size: 32px;}
.inhead h2{font-size: 20px;color: #fff;font-weight: normal;letter-spacing: 1px;}
.inhead .gor{width: 45px;height: 45px;background: url(../assets/img/i-gor.png) center no-repeat;background-size: 24px;}
.author{padding-left: 15px;height: 40px;display: flex;justify-content: space-between;align-items: center;position: relative;background: #fff;}
.author span{font-size: 12px;color: #7c7c7c;}
.author .content{flex: 1;padding: 0 10px;display: flex;overflow: hidden;}
.author .content img{font-size: 0;border-radius: 50%;overflow: hidden;width: 24px;height: 24px;margin-right: 10px;}
.author .goright{width: 45px;height: 45px;background: url(../assets/img/i-r.png)center no-repeat;background-size: 20px;}
</style>
