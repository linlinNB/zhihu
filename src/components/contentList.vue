<template>
  <div class="contentList">
  	<div class="list bBor">
  		<div class="txt">
  			台湾同性婚姻合法，一场押在年轻人身上的政治豪赌
  		</div>
  		<div class="pic">
  			<img src="../assets/img/image1.jpg" width="100%">
  		</div>
  	</div>
   	<div class="list bBor">
  		<div class="txt">
  			茶叶圈的常见谣言，我们给你总结出来了
  		</div>
  		<div class="pic">
  			<img src="../assets/img/image2.jpg" width="100%">
  		</div>
  	</div>
   	<div class="list bBor">
  		<div class="txt">
  			大误 · 精灵之战
  		</div>
  		<div class="pic">
  			<img src="../assets/img/image3.jpg" width="100%">
  		</div>
  	</div>
   	<div class="list bBor">
  		<div class="txt">
  			广告 · 天猫理想生活专栏：哪些爱好太烧钱？
  		</div>
  		<div class="pic">
  			<img src="../assets/img/image4.jpg" width="100%">
  		</div>
  	</div>
   	<div class="list bBor">
  		<div class="txt">
  			他对你敷衍，也许是在「攻击」你
  		</div>
  		<div class="pic">
  			<img src="../assets/img/image5.jpg" width="100%">
  		</div>
  	</div>
   	<div class="list bBor">
  		<div class="txt">
  			VR 热潮过去，我觉得没那么酷炫的 HoloLens 更有前途
  		</div>
  		<div class="pic">
  			<img src="../assets/img/image6.jpg" width="100%">
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'contentList',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentList{padding: 0 15px;box-sizing: border-box;background: #fff}
.list{padding: 15px 0;box-sizing: border-box;height: 88px;display: flex;justify-content: space-between;position: relative;}
.list .txt{font-size: 14px;color: #000;line-height: 18px;flex: 3}
.list .pic{margin-left: 25px;flex: 1px;font-size: 0;overflow: hidden;}
</style>
