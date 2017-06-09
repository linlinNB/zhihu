<template>
  <div class="contentList">
  	<div class="list bBor" v-for="item in NewList">
  		<div class="txt">
  			{{item.title}}
  		</div>
  		<div class="pic" v-if="item.images">
  			<img :src="item.images">
  		</div>

  	</div>

  </div>
</template>

<script>
import axios from 'axios'
import api from './../api/index'
import { mapState } from 'vuex';
export default {
  name: 'contentList',
  data () {
    return {
      msg: '',
      NewList:[],//首页今日新闻和内页的新闻列表
      newID:{}
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
      }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentList{padding: 0 15px;box-sizing: border-box;background: #fff}
.list{padding: 15px 0;box-sizing: border-box;height: 88px;display: flex;justify-content: space-between;position: relative;}
.list .txt{font-size: 14px;color: #000;line-height: 18px;flex: 3}
.list .pic{margin-left: 25px;flex: 1px;font-size: 0;overflow: hidden;}
.pic img{position: relative;top: 50%;left: 50%;transform: translate(-50%,-50%);}
</style>
