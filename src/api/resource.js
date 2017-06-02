import {
	API_ROOT
} from './config.js'
var apiZhihu = {
	startimage: 'start-image/1080*1776',//启动界面图像获取
	news: 'news/latest',//最新消息
	newsbyid: 'news/',//消息内容获取与离线下载
	newsbydate: 'news/before/',//过往消息
	newsinfo: 'story-extra',//新闻额外信息
	topics: 'themes',//主题日报列表查看
	topicbyid: 'theme/',//主题日报内容查看
	sections: 'sections',//栏目总览
	sectionbyid: 'section',//栏目具体消息查看
}
export const NewsResource = API_ROOT.concat( apiZhihu.news )
export const NewsIdResource = API_ROOT.concat( apiZhihu.newsbyid )
export const NewsDateResource = API_ROOT.concat( apiZhihu.newsbydate )
export const NewsInfoResource = API_ROOT.concat( apiZhihu.newsinfo )
export const TopicsResource = API_ROOT.concat( apiZhihu.topics )
export const TopicsIdResource = API_ROOT.concat( apiZhihu.topicbyid )
export const SectionsResource = API_ROOT.concat( apiZhihu.sections )
export const SectionIdResource = API_ROOT.concat( apiZhihu.sectionbyid )
