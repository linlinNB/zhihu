<template>
    <div class="index-wrap" :class="{on:menu_off}">
      <div class="header">
          <h1>今日热闻</h1>
      <span class="menu-i" @click="menu_fade()">
      </span>
      </div>
       <mt-swipe :auto="000">
        <mt-swipe-item v-for="top in tops" >
          <img :src="top.image">      
        </mt-swipe-item>
      </mt-swipe>
      <contentList></contentList>
    </div>
</template>

<script>
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
      // menu_off:false
      // loading: false,
      // list: [],
      tops: []
    }
  },
  // 钩子函数/页面加载完运行
  mounted:function(){
      // this.newfun();
      this.getList(1)
      // this.showList()
  },
  methods:{
      menu_fade(){
      // this.menu_off = !this.menu_off
      // this.$store.state.menu_off = !this.$store.state.menu_off
      // console.log(this.menu_off)
      // console.log(this.$store)
      // alert(!this.$store.state.menu_off)
      this.$store.commit('changeMenu')
    },
    getList(type) {
      var vue = this;
      if (type) {
        api.getNews().then(function(data) {
          vue.tops = data.data.top_stories;
          vue.list.push(data.data);
          vue.loading = false;

        });
      } else {
        api.getNewsByDate(vue.GetDate(vue.count)).then(function(data) {
          vue.list.push(data.data);
          vue.loading = false;

        });
      }
    },
   // showList(){
   //    this.$ajax.get("news/latest").then((response) => {
   //      // success
   //      this.tops = response.data.top_stories;
   //    }, (error) => {
   //      // error
   //      console.log(error)
   //    });
   // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index h1{color: #fff;font-size: 1.2rem;}
.mint-swipe{height: 200px;position: relative;}
.menu-i{width: 30px;height: 30px;display: inline-block;background: url(../assets/img/menu.png) center no-repeat ;position: absolute;;left: 10px;top: 10px;z-index: 1;background-size: 30px;}
.header{height: 50px;width: 100%;position: fixed;left: 0;top: 0;line-height: 50px;z-index: 1;text-align: center;}
.index-wrap.on{transform: translateX(188px);}
.index-wrap{transform: translateX(0);transition: all 0.5s}
</style>
