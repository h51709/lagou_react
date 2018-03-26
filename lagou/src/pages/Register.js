
import React, { Component } from 'react';
import './register.css';
import axios from 'axios';

import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from 'react-router-dom';

class Register extends Component{
	constructor(){
		super()
		this.state={
			src:"",
			sid:"",
			id : "0086",
			tel:"",
			pwd:"",
			name:"",
			valid:"",
			display:false,
			list:[
				{"常用":[
					{code:"0086",city:"中国"},
					{code:"00852",city:"中国香港"},
					{code:"00886",city:"中国台湾"},
					{code:"00853",city:"中国澳门"},
					{code:"001",city:"美国"},
				]},
				{"A":[
					{code:"0061",city:"澳大利亚"},
					{code:"00853",city:"中国澳门"}
				]},
				{"B":[
					{code:"0055",city:"巴西"}
				]},
				{"D":[
					{code:"0049",city:"德国"}
				]},
				{"E":[
					{code:"007",city:"俄罗斯"}
				]},
				{"F":[
					{code:"0033",city:"法国"}
				]},
				{"H":[
					{code:"0082",city:"韩国"}
				]},
				{"J":[
					{code:"001",city:"加拿大"}
				]},
				{"M":[
					{code:"0060",city:"马来西亚"},
					{code:"001",city:"美国"}
				]},
				{"R":[
					{code:"0081",city:"日本"}
				]},
				{"T":[
					{code:"00886",city:"台湾"},
					{code:"0066",city:"泰国"}
				]},
				{"X":[
					{code:"00852",city:"中国香港"},
					{code:"0065",city:"新加坡"}
				]},
				{"Y":[
					{code:"0091",city:"印度"},
					{code:"0044",city:"英国"}
				]},
				{"Z":[
					{code:"0086",city:"中国"}
				]}
			]
		}
	}
	render(){
		var num = this.state.list.map(function(ele,i){
			for(let attr in ele){
				//console.log(ele[attr])
				var a = ele[attr].map(function(e){
					return (<dd key={e.code} data-code={e.code}>{e.city}</dd>)
				})
				return (
					<dl key={i}>
						<dt>{attr}</dt>
						{a}
					</dl>
					)
			}
			
		})
		return (
			 <div>
               	<div className="top">
               		<span>注册拉勾</span>
               		<Link to="/login">登录</Link>
               	</div>
               	<div className="down">
               		<div onClick={()=>this.handleCity()} className="code_list_main">
               			<span>{this.state.id}</span>
               			<div className="dl" onClick={(e)=>this.handleNum(e)} style={ {display:this.state.display?"block":"none"} }>
               				{num}
               			</div>
               		</div>
               		<input type="text" onChange={(e)=>this.handleTel(e)} value={this.state.tel} className="b form-control" placeholder="请输入常用手机号" />
               		<input type="password" onChange={(e)=>this.handlePwd(e)} value={this.state.pwd} className="b form-control" placeholder="请输入你能记住的密码" />
               		<input type="text" onChange={(e)=>this.handleValid(e)} value={this.state.valid} className="b form-control" placeholder="请证明你不是机器人" id="valid" />
               		<img src={this.state.src} onClick={(e)=>{this.handleYanZheng(e)}} id="img"/>
               		<button className="btn" onClick={(e)=>this.submit(e)}>注册</button>
               	</div>
             </div>
			)
        
	}
	componentWillMount(){
		this.handleYanZheng();
	}
	handleYanZheng(e){
		var url = "http://route.showapi.com/932-2?showapi_appid=52539&showapi_sign=945a109f09f7414998727820aa2cab49&length=4&specials=false&";
		var _this=this;
		axios.post(url).then(function(data){
			//生成验证码
			_this.setState({
				src : data.data.showapi_res_body.image,
				sid : data.data.showapi_res_body.sid
			})
		})
	}
	handleCity(){
		this.setState({
			display:!this.state.display
		})
	}
	handleNum(e){
		var _id = e.target.dataset.code
		this.setState((preState)=>({
			id : _id,
			display:!this.state.display
		}))
	}
	handleTel(e){
		this.setState({
			tel : e.target.value
		})
	}
	handlePwd(e){
		this.setState({
			pwd : e.target.value
		})
	}
	handleValid(e){
		this.setState({
			valid : e.target.value
		})	
	}
	submit(e){
		var _this = this;
		var {tel,pwd,name,valid} = this.state;
		
       	if (!tel||!pwd||!valid) {
       	   alert("不能为空！");
       	   return
       	};
       	var reg = /^1\d{10}$/g;
       	if(!reg.test(tel)){
       		alert("请输入正确的手机号...");
       		return
       	}
       	//验证验证码
       	var _val = valid,
			_sid = this.state.sid;
			
       	var url = `http://route.showapi.com/932-1?showapi_appid=52539&showapi_sign=945a109f09f7414998727820aa2cab49&checkcode=${_val}&sid=${_sid}&`;
		axios.get(url).then(function(data){
			if(!data.data.showapi_res_body.valid){
				alert("请输入正确的验证码");
				return
			}
			
		})
		
		//注册跳转
		axios.post('/api/register',{phone:tel,psw:pwd,name:name}).then(function(res){
			console.log(res.data.code);
			if(!res.data.code){
				sessionStorage.setItem('islogin', true);
				_this.props.history.replace(`/write?tel=${tel}`)
			}else{
				alert("该手机号已经被注册！");
				return
			}
		})
		
		/*axios.post('/api/register', {
		    tel,
		    pwd
		})
		.then(function (res) {
		    if(!res.code){
		    	sessionStorage.setItem('islogin', true);
                _this.props.history.replace(`/write/${tel}`)
		    }
		})*/
	}
}


export default Register