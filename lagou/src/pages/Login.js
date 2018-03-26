
import React, { Component } from 'react';
import emitter from "./ev";
import './login.css';
import axios from 'axios';

import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from 'react-router-dom';

class Login extends Component{
	constructor(){
		super();
		this.state={
			phone : "",
			pwd : ""
		}
	}
	/*Cd(){
		emitter.emit("callMe",true);
		console.log(1111)
	}*/
	render(){
		return (
			 <div>
               	<div className="top">
               		<span>登录拉勾</span>
               		<Link to="/register">注册</Link>
               	</div>
               	<div className="down">
               		<input type="text" value={this.state.phone} onChange={(e)=>{this.changeUser(e)}} className="in form-control"  placeholder="请输入已验证的手机号或邮箱" />
               		<input type="password" value={this.state.pwd} onChange={(e)=>{this.changePwd(e)}} className="in form-control"  placeholder="请输入密码" />
               		<button onClick={(e)=>{this.submit(e)}} className="btn">登录</button>
               	</div>
             </div>
			)
        
	}
	changeUser(e){
		this.setState({
			phone : e.target.value
		})
	}
	
	changePwd(e){
		this.setState({
			pwd : e.target.value
		})
	}
	submit(e){
		var _this = this;
		let{phone,pwd}=this.state
		
		if(!phone||!pwd){
			alert("不能为空哦");
			return
		}
		
		axios.post('/api/login', {
		   phone:phone,
		   psw:pwd
		})
		.then(function (res) {
		 	if(!res.data.code){
				 var user = {
					 islogin : true,
					 phone : res.data.phone
				 }
		 		sessionStorage.setItem('islogin', JSON.stringify(user));
		 		sessionStorage.setItem('tel', phone);
                _this.props.history.replace(`/comment`);
		    }else{
				alert(res.data.msg)
			}
		})
	}
}


export default Login