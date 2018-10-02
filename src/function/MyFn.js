//全局函数调用
import $ from "jquery"
import MyAjax from "./MyAjax.js"

export default {
	//文件服务器地址
	filePlace(){
		//return 'http://file.wuliujin.com/'
		return 'http://filetest.wuliujin.com/'
		// return 'http://192.168.0.53:7001/'
	},
	//获取图片服务器地址
	imagePlace(){
		//return 'http://image.wuliujin.com/image/'
		return 'http://imagetest.wuliujin.com/image/'
	},
	//上传图片服务器地址
	imageUpload(){
		//return 'http://image.wuliujin.com/upload'
		return 'http://imagetest.wuliujin.com/upload'
		
	},
	//elementui 日期组件和分页组件去边框
	removeBorder(){
		//日期组件边框
		$('.el-input__inner').css({
			'height': '34px',
			'border': '1px solid #9DC7E5'
		});
		$('.el-table .cell').css({
			'overflow': 'hidden',
			'white-space': 'nowrap',
			'text-overflow': 'ellipsis'
		})
		//分页组件去掉边框
		$('.el-pager').css({
			'border': '0',
			'margin-top': '3px'
		});
		$('.btn-prev').css({
			'border': "0",
			'margin-top': '3px'
		});
		$('.btn-next').css({
			'border': "0",
			'margin-top': '3px'
		});
		$('.number').css({
			'border': "0",
			'margin': '0 5px'
		});
	}
}