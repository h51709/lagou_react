
import React, { Component } from 'react';
import emitter from "./ev";
import axios from 'axios';
import Job from './position/Position';
import './comment.css';

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	NavLink
} from 'react-router-dom';


class Comment extends Component{
	constructor(){
		super();
		this.state={
			login:false,
			list:[],
			loading:false,
			color:false,
			page:0,
			pageNum:10
		};
	}
	//加载职位
	render(){
		var listJob = this.state.list.map(function(ele){
			return <Job job={ele} key={ele.positionId}/>
		})
		return (
			 <div>
			 	<header>拉勾网</header>
               	<div className="go_lo">
		        	<ul>
		        		<li>10秒钟定制职位</li>
		                <li>{sessionStorage.getItem("islogin")?"编辑":<Link to="/login">去登录</Link>}</li>
		            </ul>
				</div>
				<ul className="list" onClick={(e)=>{this.ClickPosition(e)}}>
					{listJob}
				</ul>
				<div className="more" onClick={()=>{this.ClickMore()}} style={ {background:this.state.color?"#EFEFEF":"#fafafa"} }>{this.state.loading?"加载中..":"加载更多"}</div>
				<footer className="footerNav">
	              <ul>
	                <li><NavLink activeClassName="current" to="/comment">职位</NavLink></li>
	                <li><NavLink activeClassName="current" to="/search">搜索</NavLink></li>
	                <li><NavLink activeClassName="current" to="/user">我的</NavLink></li>
	              </ul>
	            </footer>
             </div>
		)    
	}
	data(){
		let {page,pageNum}=this.state;
		axios.post('/api/position',{
			page,
			pageNum
		}).then((res)=>{
		   	this.setState({
		   	 	list:res.data.list,
		   	 	loading:false,
		   	 	color:false
		   	}) 
		})
	}
	
	componentWillMount(){
		this.data();
	}
	
	ClickMore(){
		this.setState((preState)=>({
			page:preState.page+1,
			loading:true,
			color:true
		}),()=>{
			this.data()
		})
		
	}
	
	ClickPosition(e){
		var id,element;
		if(e.target.nodeName === "LI"){
			id = e.target.dataset.positionid
		}else{
			element = e.target;
			do{
				element = element.parentNode;
			}while(element.nodeName !=="LI")
			
			id = element.dataset.positionid;
			
			this.props.history.push(`/detail?id=${id}`)
		}
		
	}
	
	/*callMe(login){
		console.log(login,this);
		this.setState({
            login
       })
	}
	componentWillMount(){
		emitter.addListener("callMe",this.callMe.bind(this))
	}
	// 组件销毁前移除事件监听
    componentWillUnmount(){
		emitter.removeListener("callMe",this.callMe.bind(this))
	}*/
	
}


export default Comment