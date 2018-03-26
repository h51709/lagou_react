
import React, { Component } from 'react';
import axios from 'axios';
import './detail.css';
import '../iconfont/font_540118_60bpn984hvjthuxr/iconfont.css';

import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from 'react-router-dom';

class Detail extends Component{
	constructor(){
		super();
		this.state={
			positionName:null,
			companyName:null,
			companyLogo:null,
			city:null,
			salary:null,
			companyId:null
		}
	}
	render(){
		let{positionName,companyName,companyLogo,city,salary,companyId} = this.state;
		return (
			<div>
			 	<header className="head">
					<section>
						<i onClick={()=>{this.ClickBack()}} className="iconfont icon-iconfontfanhui1"></i>
					</section>
					<section>
						职位详情
					</section>
					<section>
						<i onClick={()=>{this.ClickBack()}} className="iconfont icon-home"></i>
					</section>
					
				</header>
				
				<div className="main">
					<div className="up">
						<section>{positionName}</section>
						<section>
							<i className="iconfont icon-xing"></i>
							<span>未收藏</span>
						</section>
					</div>
					<div className="sm">
						<div className="xq">
							<section>
								<i>￥</i>
								<span>{salary}</span>
							</section>
							<section>
								<i className="iconfont icon-dingwei"></i>
								<span>{city}</span>
							</section>
							<section>
								<i className="iconfont icon-shizhong"></i>
								<span>全职</span>
							</section>
							<section>
								<i className="iconfont icon-brush"></i>
								<span>3-5年</span>
							</section>
							<section>
								<i className="iconfont icon-boshi"></i>
								<span>本科及以上</span>
							</section>
						</div>
						<p>职位诱惑：时尚品类，团队专业，团队专业，迅速发展</p>
					</div>
					<div className="plum">
						<i className="i"><img src={"//static.lagou.com/" + companyLogo}/></i>
						<section>
							<h3>{companyName}</h3>
							<p>电子商务，生活服务/A轮/50-150人</p>
						</section>
						<i className="iconfont icon-xunzhang"></i>
					</div>
					<div className="ms">
						<span>职位描述</span>
					</div>
					<div className="zz">
						<p>
							<br/>工作职责：
							<br/>1. 负责完成部门整体差旅行程规划、安排等事宜
							<br/>2. 负责拜访或来访邮件回复、行程安排以及客户接待等工作
							<br/>3. 部门费用管理、使用登记以及报销事宜
							<br/>4. 部门例会及其他各项重大会议的事项通知、筹备组织以及会议记录等工作
							<br/>5. 部门公共财产维护与管理
							<br/>6. 负责部门活动组织与筹备工作
							<br/>7. 部门交办的其他工作
							<br/>
							<br/>任职资格：
							<br/>1、全日制本科及以上学历，2年以上行政综合工作或总经理助理工作经验
							<br/>2、具有英语4级及以上水平，熟悉OFFICE办公软件操作
							<br/>3、保险、金融、经济等相关专业优先
						</p>
						<div className="ms2">
							<span>面试评价</span>
						</div>
						<p>暂无面试评价</p>
					</div>
					
				</div>
				
				<footer className="foot">
					 <button className="btn" onClick={()=>{this.post()}}>投递简历</button>
				</footer>
            </div>
			)
        
	}
	componentWillMount(){
		var _id = this.props.history.location.search.split("=")[1];
		
		axios.post('/api/detail',{
			
			companyId:_id
			
		}).then((res)=>{
			let{positionName,companyName,companyLogo,city,salary,companyId} = res.data.data;
			
			this.setState({
				positionName,
				companyName,
				companyLogo,
				city,
				salary,
				companyId
			})
		})
	}
	ClickBack(){
		this.props.history.push(`/comment`)
	}
	post(){
		if(sessionStorage.islogin){
			
		}else{
			this.props.history.push(`/login`)
		}
	}
	
}


export default Detail