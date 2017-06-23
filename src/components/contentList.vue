<template>

  <div class="contentList" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <router-link to="/homeInside" v-for="item in NewList" :key="item.id" >
  	<div class="list bBor" @click="goNewdetails(item.id)">
  		<div class="txt">
  			{{item.title}}
  		</div>
  		<div class="pic" v-if="item.images">
  			<img :src="item.images">
  		</div>

  	</div>
  </router-link>
  </div>

</template>

<script>
import { Loadmore } from 'mint-ui';
import AnimatedVue from 'animated-vue'
import axios from 'axios'
import api from './../api/index'
import { mapState } from 'vuex';
export default {
  components:{
    
  },
  name: 'contentList',
  data () {
    return {
      msg: '',
      NewList:[],//首页今日新闻和内页的新闻列表
      newID:{},
      count:1,
      beforeList:[],
              speed:0.5,
        show:false
    }
  },
  computed: mapState ([
    //计算属性
    // 映射 this.menu_off 为 store.state.menu_off
    'newList','newListId'
  ]),
  created:function(){
    // this.indexOrInside()

  },
    // 页面加载完运行
  mounted:function(){
    this.indexOrInside()

  },
  watch: {
    // 如果 newListId 发生改变，这个函数就会运行
    newListId: function (){
      // alert(this.newListId)
      this.indexOrInside()
    }
  },
  methods:{

    //获取下拉往日消息
    getBeforeNews(){
      api.getNewsByDate(this.GetDate(this.count)).then(rel=>{
        rel.data.stories.forEach(e=>{
          this.NewList.push(e) 
        })
        // this.NewList.push() 
        // console.log(this.NewList)
      });
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.count--;
        this.getBeforeNews()
        this.loading = false;
      }, 2500);
    },
      indexOrInside() {
        // console.log(this.newListId)
        // console.log(this.newList)
        if(this.newList){
          //调用首页的新闻
            api.getNews().then(res=>{
              this.NewList = res.data.stories;
              // console.log(this.indexNewList)
            }).catch((error) => {
              console.log(error)
            });
        }else{
          //获取主体日报数据
          api.getTopicsById(this.newListId.themId).then(res=>{
            this.NewList = res.data.stories;
            // console.log(this.NewList)
          }).catch((error) => {
            console.log(error)
          });
        }
      },
    //主题日报列表点击跳转详情页
    goNewdetails(newsId){
      this.$store.dispatch('goNewdetails',{newsId:newsId})
    },
    //计算时间
    GetDate(Count) {
      var dd = new Date();
      dd.setDate(dd.getDate() + Count); //获取AddDayCount天后的日期
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1; //获取当前月份的日期
      m = m > 10 ? m : "0" + m
      var d = dd.getDate();
      d = d >= 10 ? d : "0" + d;
      return y + "" + m + "" + d;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gotop{position: fixed;right: 10px;bottom: 30px;color: #000;}
.contentList{padding: 0 15px;box-sizing: border-box;background: #fff}
.list{padding: 15px 0;box-sizing: border-box;height: 88px;display: flex;justify-content: space-between;position: relative;}
.list .txt{font-size: 14px;color: #000;line-height: 18px;flex: 3}
.list .pic{margin-left: 25px;flex: 1px;font-size: 0;overflow: hidden;}
.pic img{position: relative;top: 50%;left: 50%;transform: translate(-50%,-50%);}
</style>
