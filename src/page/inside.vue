<template>
  <div class="inside">
  	<div class="inhead bBor">
  		<div class="goback"></div>
  			<h2>日常心理学</h2>
  		<div class="gor"></div>
  	</div>
  	<div class="author bBor">
  		<span>主编</span>
  		<div class="content">
  			<img src="../assets/img/face-pbulic.png" width="100%">
  		</div>
  		<div class="goright">
  			
  		</div>
  	</div>
  	<contentList></contentList>
  </div>
</template>

<script>
import contentList from '../components/contentList'
export default {
  name: 'inside',
  data () {
    return {
      msg: ''
    }
  },
  components:{contentList}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inside{ }
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
