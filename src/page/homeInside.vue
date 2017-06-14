<template>
  <div class="home-details">
  <div class="goback" @click="goBack"></div>
  	<div class="banner" v-if="data.image">
  		<div class="pic">
  		    <img :src="data.image" width="100%">
  		    
  		</div>
  		<h2>{{data.title}}</h2>
<!--   		<div class="imgFrom">图片:{{data.title}}</div> -->
  	</div>
<!--   	<div class="btit">职场怎么样的问题我说撒了离开速度都很实用你速度也完全拉起按时到几号到数据库时刻就爱上</div>
  	<div class="content">
  		<div class="contit">这是标题</div>
  		<div class="author">
  			<div class="authorImg">
  				<div class="auPic">
  					<img src="../assets/img/face.jpg" width="100%">
  				</div>
  				<span>HuaBingTao,</span>
  			</div>
  			<div class="interesting">前端老司机</div>
  		</div>
  		<div class="contxt">
  			致那些即将失去的阿红的灵魂萨都剌和萨拉的机会阿什利萨芬的喝酒诶侮辱妇女为偶然奶萨度日那是猥琐带你阿里看到你洒了可觉得io上单你萨法里家乐福实地平时对方哦史蒂夫看；十分平静哦等级分IE吗平时的风景
  		</div>
  	</div> -->
  	<div v-html="body" :style="{css}"></div>
  </div>
</template>

<script>
import axios from 'axios'
import api from './../api/index'
import { mapState } from 'vuex';
export default {
  data () {
    return {
      msg: '',
      body:[],
      css:[],
      data:""
    }
  },
  computed: mapState ([
    //计算属性
    'homeNewId'
  ]),
  watch:{},
  methods:{
  	//获取newsId后渲染列表
  	getNewsId(){
  		console.log(this.homeNewId)
  		api.getNewsById(this.homeNewId.newsId).then(rel=>{
  			this.data = rel.data
  			this.body = rel.data.body
  			this.css = rel.data.css
  			// console.log(this.body)
  		}).catch((error) => {
            console.log(error)
        });
  	},
  	  	goBack(){
  		history.back()
  	}
  },
  mounted:function(){
  	this.getNewsId()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/news_qa.auto.css';

.headline{display: none;}
.headline .img-place-holder{display: none;height: 0}
.home-details{background: #f6f6f6;}
.banner{position: relative;height: 220px;overflow: hidden;margin-bottom: 4px;}
.banner .pic{font-size: 0;width: 100%;position: relative;height: 100%;}
.banner .pic img{    filter: brightness(90%);position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);}
.banner h2{font-size: 20px;color: #fff;line-height: 24px;padding: 0 15px;width: 100%;height: 86px;box-sizing: border-box;position: absolute;bottom: 0;left: 0;font-weight: normal;}
.banner .imgFrom{font-size: 10px;color: #fff;position: absolute;right: 15px;bottom: 10px;}
.goback{width: 45px;height: 45px;background: url(../assets/img/i-left.png) center no-repeat;background-size: 32px;position: absolute;;left: 0;top: 0;z-index: 1}
/*.btit{padding: 15px;font-size: 18px;line-height: 26px;color: #616466;margin-bottom: 4px;background: #fff;}
.content{padding: 15px;background: #fff;}
.content .contit{font-size: 18px;line-height: 26px;color: #494b4d;margin-bottom: 15px;font-weight: normal;}
.content .author{width: 100%;display: flex;margin-bottom: 15px;justify-content: flex-start;}
.content .authorImg{}
.content .authorImg .auPic{width: 22px;height: 22px;margin-right: 10px;overflow: hidden;font-size: 0;display: inline-block;}
.content .authorImg span{font-size: 15px;color: #444444;margin-right: 10px;display: inline-block;position: relative;top: -5px;}
.content .interesting{font-size: 15px;color: #999999;}
.content .contxt{font-size: 18px;line-height: 26px;color: #616466;}*/

.question {
  overflow: hidden;
  padding: 0 20px!important;
}
.headline .img-place-holder{height: 0;display: none}
</style>
