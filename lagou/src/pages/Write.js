
import React, { Component } from 'react';
import './write.css';
import axios from 'axios';

import { 
	BrowserRouter as Router, 
	Route, 
	Link
} from 'react-router-dom';



class Input extends Component{
	constructor(){
		super()
	}
	render(){
		return (
           		<input type="text" onChange={this.props.change} onBlur={this.props.blur} className="form-control"  placeholder={this.props.hd} />
		)
	}
	
}


class Write extends Component{
	constructor(){
		super();
		this.state={
			name:"",
			tel:""
		}
	}
	render(){
		return (
			 <section className="a">
			 	<p>完善基本信息<span>(可在在线简历中修改)</span></p>
			 	<section className="ul">
			 		<Input hd="姓名" change={(e)=>{this.handleName(e)}} blur={(e)=>{this.handleSave(e)}} value={this.state.name} />
			 		<Input hd="Email" />
			 		<Input hd="最高学历" />
			 		<Input hd="工作年限" />
	            </section>
               	<button className="btn" onClick={()=>this.handleOk()}>完成</button>
             </section>
		)
	}
	componentWillMount(){
		var _tel = this.props.history.location.search.split("=")[1];
		console.log(_tel);
		this.setState({
			tel : _tel
		})
		console.log(this.state.tel);
	}
	handleOk(){
		var _this=this;
		if(!this.state.name){
			alert("至少要留下你的名字哦");
			return
		}
		console.log(this.state.tel);
		let{name,tel}=this.state;
		axios.post('/api/name',{name:name,phone:tel}).then(function(res){
			if(!res.data.code){
				_this.props.history.replace(`/comment`);
				sessionStorage.setItem('islogin', true);
			}
		})
	}
	handleName(e){
		this.setState({
			name:e.target.value
		})
		
	}
	handleSave(e){
		console.log(this.state.name);
		sessionStorage.setItem('username', this.state.name);
	}
}


export default Write