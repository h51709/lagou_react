var express = require("express");
var bodyParser = require("body-parser"); 
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://10.7.187.105:27017/owner").then(function(db){
	console.log("链接成功！")
});

var User = require("./module/user");
var app = express();

app.use(bodyParser.json());	

app.use(bodyParser.urlencoded({		
	extended : true		
}));


var list_module = [
				{
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3760240,
	                "positionName": "销售运营管理岗",
	                "city": "北京",
	                "createTime": "今天 10:59",
	                "salary": "13k-15k",
	                "companyId": 65100,
	                "companyLogo": "image1/M00/34/EC/CgYXBlWaH46AETsNAAAGp-dsUFQ322.png",
	                "companyName": "北京新中新",
	                "companyFullName": "北京新中新华捷系统集成有限公司"
	            },
	            {
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3765293,
	                "positionName": "Android开发工程师",
	                "city": "上海",
	                "createTime": "今天 10:58",
	                "salary": "10k-15k",
	                "companyId": 24995,
	                "companyLogo": "image1/M00/00/33/CgYXBlTUXI-AC08_AACIkHlny3Y866.jpg",
	                "companyName": "泛微",
	                "companyFullName": "上海泛微网络科技股份有限公司"
	            },
	            {
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3765276,
	                "positionName": "运维工程师",
	                "city": "北京",
	                "createTime": "今天 10:58",
	                "salary": "11k-15k",
	                "companyId": 6692,
	                "companyLogo": "i/image/M00/60/BB/Cgp3O1f6CDyAE8_OAAB8NF5CFa4180.png",
	                "companyName": "海云数据",
	                "companyFullName": "天津大海云科技有限公司"
	            },
	            {
	                "logger": {
	                    "traceCapable": true,
	                    "name": "com.lagou.entity.mobile.MobilePosition"
	                },
	                "positionId": 3765291,
	                "positionName": "大数据开发工程师",
	                "city": "北京",
	                "createTime": "今天 10:58",
	                "salary": "15k-20k",
	                "companyId": 6692,
	                "companyLogo": "i/image/M00/60/BB/Cgp3O1f6CDyAE8_OAAB8NF5CFa4180.png",
	                "companyName": "海云数据",
	                "companyFullName": "天津大海云科技有限公司"
	            },
	            {
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879687,
					"positionName":"天猫店长",
					"city":"北京",
					"createTime":"今天 09:17",
					"salary":"10k-20k",
					"companyId":130264,
					"companyLogo":"i/image2/M00/06/8F/CgotOVnKGwCAXe2BAAA0Riy2ksc489.png",
					"companyName":"352空气净化器",
					"companyFullName":"北京三五二环保科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3871150,
					"positionName":"ios开发",
					"city":"淮安",
					"createTime":"今天 09:16",
					"salary":"6k-10k",
					"companyId":292400,
					"companyLogo":"i/image2/M00/24/92/CgoB5lobdhiAVO1CAABv1qyddRo933.jpg",
					"companyName":"同城享购",
					"companyFullName":"江苏思跑特网络科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3871176,
					"positionName":"java开发",
					"city":"淮安",
					"createTime":"今天 09:16",
					"salary":"6k-8k",
					"companyId":292400,
					"companyLogo":"i/image2/M00/24/92/CgoB5lobdhiAVO1CAABv1qyddRo933.jpg",
					"companyName":"同城享购",
					"companyFullName":"江苏思跑特网络科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3872822,
					"positionName":"服装批版师",
					"city":"深圳",
					"createTime":"今天 09:16",
					"salary":"6k-12k",
					"companyId":83442,
					"companyLogo":"image1/M00/39/46/Cgo8PFWoh2iAGKIRAABFPNzWG-E518.PNG?cc=0.7104756835712367",
					"companyName":"TOUCH",
					"companyFullName":"如斯（深圳）服饰有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879218,
					"positionName":"硬件工程师",
					"city":"上海",
					"createTime":"今天 09:16",
					"salary":"15k-20k",
					"companyId":246971,
					"companyLogo":"i/image/M00/5D/F9/CgpFT1mTsSSAZhQzAABYVY9PuMc449.png",
					"companyName":"Vechain",
					"companyFullName":"上海唯链信息科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879114,
					"positionName":"旅游顾问",
					"city":"郑州",
					"createTime":"今天 09:15",
					"salary":"3K-6K",
					"companyId":293338,
					"companyLogo":"i/image2/M00/25/92/CgotOVodGLeAX_gbAABYLYS90ww988.jpg",
					"companyName":"诚友假期",
					"companyFullName":"平遥诚友旅行社有限公司郑州分公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3879452,
					"positionName":"旅游计调",
					"city":"郑州",
					"createTime":"今天 09:15",
					"salary":"3k-5k",
					"companyId":293338,
					"companyLogo":"i/image2/M00/25/92/CgotOVodGLeAX_gbAABYLYS90ww988.jpg",
					"companyName":"诚友假期",
					"companyFullName":"平遥诚友旅行社有限公司郑州分公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3873292,
					"positionName":"外套设计师",
					"city":"广州",
					"createTime":"今天 09:14",
					"salary":"6k-8k",
					"companyId":22069,
					"companyLogo":"image1/M00/00/29/Cgo8PFTUXGqAfJXHAADP2fEqLS0921.jpg",
					"companyName":"骆驼服饰",
					"companyFullName":"广东骆驼服饰有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3871074,
					"positionName":"产品助理",
					"city":"深圳",
					"createTime":"今天 09:14",
					"salary":"10k-15k",
					"companyId":129639,
					"companyLogo":"i/image/M00/2C/41/Cgp3O1c5JN6AMvq0AAALBMOmNzw622.jpg",
					"companyName":"优加互联",
					"companyFullName":"深圳市优加互联科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3876183,
					"positionName":"商务BD经理",
					"city":"广州",
					"createTime":"今天 09:14",
					"salary":"6k-12k",
					"companyId":51472,
					"companyLogo":"i/image/M00/8D/63/Cgp3O1iG0JiAIdntAAAtivqUeaA44.jpeg",
					"companyName":"车主无忧",
					"companyFullName":"广州小迈网络科技有限公司"
				},
				{
					"logger":{
						"traceCapable":true,
						"name":"com.lagou.entity.mobile.MobilePosition"
					},
					"positionId":3874356,
					"positionName":"UI-UE设计师",
					"city":"北京",
					"createTime":"今天 09:13",
					"salary":"8k-15k",
					"companyId":57353,
					"companyLogo":"i/image/M00/02/D4/CgqKkVad8jiAIDHrAAGK0MmIVNs370.jpg",
					"companyName":"中移在线服务有限公司",
					"companyFullName":"中移在线服务有限公司"
				},{
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3956539,
                    "positionName":"前端负责人",
                    "city":"上海",
                    "createTime":"今天 18:39",
                    "salary":"20k-30k",
                    "companyId":251737,
                    "companyLogo":"i/image/M00/70/B4/CgpEMlm2MsiAZsR3AABhB8vYhHg699.png",
                    "companyName":"享换机",
                    "companyFullName":"晋松（上海）网络信息技术有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3943223,
                    "positionName":"产品运营经理",
                    "city":"上海",
                    "createTime":"今天 18:38",
                    "salary":"8k-15k",
                    "companyId":94027,
                    "companyLogo":"i/image/M00/3F/27/Cgp3O1d2SOuAT-c5AAAYuH9dquI701.png",
                    "companyName":"斑马旅游",
                    "companyFullName":"上海歌晨信息技术有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3941614,
                    "positionName":"人力资源实习生 多模块涉及 提供转正",
                    "city":"杭州",
                    "createTime":"今天 18:33",
                    "salary":"2k-3k",
                    "companyId":105456,
                    "companyLogo":"i/image/M00/73/C4/CgpEMloz4T-AUP7NAAAtmFEkBoY743.jpg",
                    "companyName":"心理壹点灵",
                    "companyFullName":"上海袋虎信息技术有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3943142,
                    "positionName":"高级java开发工程师",
                    "city":"上海",
                    "createTime":"今天 18:31",
                    "salary":"12k-24k",
                    "companyId":57682,
                    "companyLogo":"i/image/M00/32/D9/CgqKkVdPyKCAY6l0AABbTDMnkUQ508.jpg",
                    "companyName":"爱可生",
                    "companyFullName":"上海爱可生信息技术股份有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3953939,
                    "positionName":"售前工程师（大数据方向）",
                    "city":"上海",
                    "createTime":"今天 18:30",
                    "salary":"13k-26k",
                    "companyId":57682,
                    "companyLogo":"i/image/M00/32/D9/CgqKkVdPyKCAY6l0AABbTDMnkUQ508.jpg",
                    "companyName":"爱可生",
                    "companyFullName":"上海爱可生信息技术股份有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3958879,
                    "positionName":"出纳",
                    "city":"深圳",
                    "createTime":"今天 18:30",
                    "salary":"5k-7k",
                    "companyId":252083,
                    "companyLogo":"i/image/M00/67/03/CgpEMlmeosuAFV6YAABkgCwBM1E851.jpg",
                    "companyName":"夜听",
                    "companyFullName":"深圳市夜听文化传播有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3959596,
                    "positionName":"西班牙语运营",
                    "city":"深圳",
                    "createTime":"今天 18:30",
                    "salary":"10k-20k",
                    "companyId":30448,
                    "companyLogo":"i/image/M00/7A/76/Cgp3O1g_yHmAZAfuAABLMr1OUWE336.JPG",
                    "companyName":"Joydream",
                    "companyFullName":"深圳市卓越创想科技有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3940282,
                    "positionName":"西班牙语内容运营（实习及正式）",
                    "city":"深圳",
                    "createTime":"今天 18:30",
                    "salary":"5k-10k",
                    "companyId":30448,
                    "companyLogo":"i/image/M00/7A/76/Cgp3O1g_yHmAZAfuAABLMr1OUWE336.JPG",
                    "companyName":"Joydream",
                    "companyFullName":"深圳市卓越创想科技有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3943562,
                    "positionName":"项目管理工程师",
                    "city":"厦门",
                    "createTime":"今天 18:17",
                    "salary":"6k-10k",
                    "companyId":3208,
                    "companyLogo":"image1/M00/00/08/Cgo8PFTUWBCAcSJHAAB-yfiYxHM640.png",
                    "companyName":"同步推",
                    "companyFullName":"厦门同步网络有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3943575,
                    "positionName":"web开发工程师（AirDroid）",
                    "city":"厦门",
                    "createTime":"今天 18:17",
                    "salary":"8k-12k",
                    "companyId":3208,
                    "companyLogo":"image1/M00/00/08/Cgo8PFTUWBCAcSJHAAB-yfiYxHM640.png",
                    "companyName":"同步推",
                    "companyFullName":"厦门同步网络有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3956399,
                    "positionName":"系统工程师（Linux）",
                    "city":"成都",
                    "createTime":"今天 18:12",
                    "salary":"8k-15k",
                    "companyId":243778,
                    "companyLogo":"i/image/M00/5A/3D/CgpFT1mMAxyAF67DAAAe5kEDlFE013.jpg",
                    "companyName":"斐讯技术",
                    "companyFullName":"四川斐讯信息技术有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3958882,
                    "positionName":"UI设计师",
                    "city":"西安",
                    "createTime":"今天 18:10",
                    "salary":"4k-8k",
                    "companyId":21864,
                    "companyLogo":"image1/M00/1C/C4/CgYXBlUnM5aAJaiiAAA8fXQ6yyI392.jpg",
                    "companyName":"乐推网络",
                    "companyFullName":"西安乐推网络科技有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3958097,
                    "positionName":"印象笔记客户支持专员",
                    "city":"北京",
                    "createTime":"今天 18:09",
                    "salary":"4k-7k",
                    "companyId":173284,
                    "companyLogo":"i/image/M00/A5/53/CgqKkVir53iATNRIAAAlbSJ2rco440.png",
                    "companyName":"印象笔记",
                    "companyFullName":"艾沃诺特（北京）科技有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3958141,
                    "positionName":"印象笔记技术支持二线专家",
                    "city":"北京",
                    "createTime":"今天 18:09",
                    "salary":"4k-8k",
                    "companyId":173284,
                    "companyLogo":"i/image/M00/A5/53/CgqKkVir53iATNRIAAAlbSJ2rco440.png",
                    "companyName":"印象笔记",
                    "companyFullName":"艾沃诺特（北京）科技有限公司"
                },
                {
                    "logger":{
                        "traceCapable":true,
                        "name":"com.lagou.entity.mobile.MobilePosition"
                    },
                    "positionId":3953815,
                    "positionName":"web前端工程师",
                    "city":"北京",
                    "createTime":"今天 18:07",
                    "salary":"10k-20k",
                    "companyId":280,
                    "companyLogo":"image2/M00/03/0F/CgpzWlXtI2KANowdAAAvdtLPVb4516.jpg",
                    "companyName":"畅游",
                    "companyFullName":"北京畅游天下网络技术有限公司"
                }
			];
			
var city_module = [
				{"热门城市":["北京","上海","广州","深圳","成都","杭州"]},
				{"ABCDEF":["保定","北海","北京","包头","长春","成都","常德","承德","重庆","长沙","常州","沧州","滁州","郴州","东莞","大连","东营","德阳","德州","达州","佛山","阜阳","福州"]},
				{"GHIJ":["桂州","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州"]},
				{"KLMN":["昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"]},
				{"OPQR":["莆田","青岛","黔东南","秦皇岛","清远","泉州","日照"]},
				{"STUV":["韶关","上海","石家庄","遂宁","汕头","绍兴","沈阳","三亚","深圳","苏州","太原","台州","泰州"]},
				{"WXYZ":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港","厦门","西宁","邢台","新乡","信阳","襄阳","咸阳","徐州","银川","盐城","宜昌","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"]}
			]



app.post("/api/register",function(req,res){
	let{phone,psw,name} = req.body;
	User.find({phone},function(err,doc){
		if(doc.length){
			res.json({
				code:1,
				msg:"用户名相同！"
			})
			return
		}
		
		var u = new User({
			phone,
			psw
		});
		//保存数据库
		u.save(function(err,doc){
			if(err){
				console.log("register_error:" + err);
				return
			};
			res.json({
				code:0,
				msg:"注册成功"
			})
		})
	})	
});

//处理登录
app.post("/api/login",function(req,res){
	console.log(req.body.phone)
	User.find({phone:req.body.phone},function(err,doc){
		if(doc.length){
			if(doc[0].psw != req.body.psw){
				res.json({
					code : 1,
					msg : "密码错误"
				})
				return
			}
			res.json({
				code : 0,
				msg : "OK",
				phone : req.body.phone
			})
		}else{
			res.json({
				code : 1,
				msg : "用户名不存在"
			})
		}
		
	})
	
});

app.post("/api/show_name",function(req,res){
	User.find({phone:req.body.phone},function(err,doc){
      	console.log(doc)
     	if(err){
			console.log("error");
			return
		};
		res.json({
			code:0,
			data:doc
		})
   })
})

app.post("/api/name",function(req,res){
	User.findOneAndUpdate({phone:req.body.phone},{$set:{name:req.body.name}},function(err,doc){
      	if (err) return console.log(err);
      	res.json({
			code:0,
			msg:"用户名已保存"
		})
	    
		//保存数据库
		/*u.save(function(err,doc){
			if(err){
				console.log("name_error:" + err);
				return
			};
			res.json({
				code:0,
				msg:"用户名已保存"
			})
		})*/
   })
})

app.post("/api/position",function(req,res){
	let{page,pageNum}=req.body;
	res.json({
		code:0,
		list:list_module.slice(0,pageNum*(page+1))
	})
});

app.post("/api/detail",function(req,res){
	let{companyId}=req.body;
	list_module.forEach(function(e){
		if(companyId == e.positionId){
			res.json({
				code:0,
				data:e
			});
			return
		}
	})
	
});

app.post("/api/city",function(req,res){
	res.json({
		code:0,
		city:city_module
	})
});

app.post("/api/search",function(req,res){
	
	let{val,country}=req.body;
	var arr = [];
	list_module.forEach(function(e){
		if(e.positionName.indexOf(val) !== -1){
			arr.push(e)
		}
		//匹配城市
		/*if(country == e.city){
			console.log(e)
		}*/
	})
	var msg = arr.length ? arr : "拉勾上暂时没有这样的职位哦";
	if(val){
		if(arr.length){
			res.json({
				code:0,
				data:msg
			})
		}else{
			res.json({
				code:1,
				data:msg
			})
		}
	}	
})

app.listen(8848);
