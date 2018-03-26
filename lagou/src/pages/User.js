
import React, { Component } from 'react';
import './user.css';
import axios from 'axios';

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	NavLink
} from 'react-router-dom';

class User extends Component{
	constructor(){
		super();
		this.state={
			display:false,
			name:""
		}
	}
	render(){
		return (
			 <section className="con">
			 	<header>拉勾网</header>
               	<section id="sec">
		        	<div className="lo_re" style={ {display:this.state.display?"none":"block"} } onClick={()=>{this.handleLog()}}>登录/注册</div>
		        	<section id="user" style={ {display:this.state.display?"block":"none"} }>
		        		<p></p>
		        		<span>{this.state.name}</span>
		        	</section>
		        	<ul className="u_ser">
		        		<li>投递</li>
		        		<li>面试</li>
		        		<li>邀约</li>
		        		<li>收藏</li>
		        	</ul>
		        	<button className="btn2" onClick={()=>{this.handleOut()}} style={ {display:this.state.display?"block":"none"} }>退出登录</button>
				</section>
				<footer className="foots footerNav">
	              <ul>
	                <li><NavLink activeClassName="current" to="/comment">职位</NavLink></li>
	                <li><NavLink activeClassName="current" to="/search">搜索</NavLink></li>
	                <li><NavLink activeClassName="current" to="/user">我的</NavLink></li>
	              </ul>
	            </footer>
            </section>
		)
        
	}
	componentWillMount(){
		var _this = this;
		if(!sessionStorage.getItem("islogin")){	// 未登录
			this.setState({
				display:false,
				name:sessionStorage.removeItem("username")
			})
		}else{
			this.setState({
				display:true,
				name:sessionStorage.getItem('username')
			})
			
			var tel = sessionStorage.getItem('tel');
			
			if(tel){
				axios.post('/api/show_name',{phone:tel}).then(function(res){
					if(!res.data.code){
						_this.setState({
							name:res.data.data[0].name
						})
					}
				})
			}
		}
	}
	handleLog(){
		window.location.href="/login"
	}
	handleOut(){
		sessionStorage.removeItem("islogin");
		sessionStorage.removeItem("username");
		sessionStorage.removeItem("tel");
		this.islogin()
	}
	
	islogin(){
		if(!sessionStorage.getItem("islogin")){	// 未登录
			this.setState({
				display:false,
				name:sessionStorage.removeItem("username")
			})
		}else{
			this.setState({
				display:true,
				name:sessionStorage.getItem('username')
			})
		}
	}
}


export default User