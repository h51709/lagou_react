
import React, { Component } from 'react';
import axios from 'axios';
import Job from './position/Position';
import './search.css';

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	NavLink
} from 'react-router-dom';

class Search extends Component{
	constructor(){
		super()
		this.state={
			display:false,	//城市的显示
			none:true,	//职位的显示
			xxx:false,	//历史记录的显示
			country:"全国",
			val:"",
			msg:"将搜索地区和关键词设为定制条件",
			list:[],
			city:[],
			record:[]
		}
	}
	render(){
		//加载城市
		var Loading_city = this.state.city.map(function(ele,i){
			for(let attr in ele){
				var country = ele[attr].map(function(e){
					return (<dd id="dd" data-city={e} key={e}>{e}</dd>)
				})
				return (
					<dl key={i} className="load">
						<dt id="dt">{attr}</dt>
						{country}
					</dl>
				)
			}
		})
		//加载匹配职位
		var listJob = this.state.list.map(function(ele){
			return <Job job={ele} key={ele.positionId}/>
		})
		//加载历史搜索
		var mess = sessionStorage.getItem('save_r');
		if(mess){
			var str = mess.split(",").map(function(elem){
				return (<p className="cord" key={elem}>
					<span data-record={elem}>{elem}</span>
					<i data-record={elem}></i>
				</p>)
			})
		}
		
		return (
			 <div>
			 	<header>拉勾网</header>
               	<div className="sous">
		        	<section className="city_list" onClick={(e)=>{this.handleBlock(e)}}>
               			<span>{this.state.country}</span>
               			<section className="city" onClick={(e)=>{this.handleCity(e)}} style={ {display:this.state.display?"block":"none"} }>
               				{Loading_city}
               			</section>
               		</section>
               		<section className="s_s">
               			<input value={this.state.val} onKeyUp={(e)=>{this.handleDel(e)}} onChange={(e)=>{this.changeValue(e)}} className="sousuo" type="text" placeholder="搜索职位或公司" />
               			<button className="btn" onClick={(e)=>{this.ClickSearch(e)}}></button>
               		</section>
				</div>
				<section className="none" style={ {display:this.state.none?"none":"block"} }>
           			<p>{this.state.msg}</p>
           			<ul className="list">
						{listJob}
					</ul>
           		</section>
           		<section id="record" onClick={(e)=>this.handleLoadOrNone(e)} style={ {display:this.state.xxx?"block":"none"} }>
           			{str}
           		</section>
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
	componentWillMount(){
		//有历史搜索记录时，显示或隐藏
		if(sessionStorage.getItem('save_r')){
			this.setState({
				record : sessionStorage.getItem('save_r').split(","),
				xxx:true
			})
		}
		//异步加载城市
		axios.post('/api/city').then((res)=>{
		   	this.setState({
		   		city : res.data.city
		   	})
		})
	}
	//点击 城市 显示或隐藏
	handleBlock(e){
		if(e.target.nodeName === "DT"){
			return
		}else{
			this.setState({
				display:!this.state.display
			})
		}
		
	}
	//获取当前点击的城市
	handleCity(e){
		console.log(e.target);
		if(e.target.nodeName === "DD"){
			var _city = e.target.dataset.city
			this.setState((preState)=>({
				country : _city
			}))
		}else{
			return
		}	
	}
	//设置当前输入值
	changeValue(e){
		this.setState({
			val : e.target.value
		})
		
	}
	//点击搜索
	ClickSearch(e){
		this.job();
		this.blockORnone();
		this.saveRecord();
		this.noneRecord()
	}
	
	handleDel(e){
		//删除完value后，隐藏职位框
		if(!e.target.value){
			this.blockORnone();
			this.setState({
				list:[]
			})
		};
		
		//用户按 enter 键时，搜索职位
		var code = e.keyCode;
		if(code == 13){
			this.job();
			this.blockORnone();
			this.saveRecord();
			this.noneRecord()
		}
	}
	
	//点击 加载搜索或删除历史记录
	handleLoadOrNone(e){
		/*
		 * 删除历史数据 ：
		 * 		1.获取当前保存的sessionStorage值
		 * 		2.通过 indexOf 在 mess 中获取当前数据的下标，在数组中删除当前数据
		 * 		3.重新保存 sessionStorage
		 */
		if(e.target.nodeName === "I"){	// 点击  “ X ” ,删除
			
			var mess = sessionStorage.getItem('save_r').split(","),
				index = mess.indexOf(e.target.dataset.record),	
				_rec = this.state.record;
			_rec.splice(index,1);	// splice 返回删除的数值
			
			this.setState({							
				record : _rec						 
			})										 
			sessionStorage.setItem('save_r', _rec);
			
			if(!sessionStorage.getItem('save_r')){
				this.noneRecord()
			}
			
		}else{	// 点击记录 ， 再次搜索
			this.setState({
				val:e.target.dataset.record
			})
		}
		
		
	}
	
	// 封装函数 : 职位显示 , 职位加载 , 搜索后生成历史记录 , 隐藏历史记录框
	blockORnone(){
		if(this.state.val){
			this.setState({
				none:false
			})
		}else{
			this.setState({
				none:true
			})
		}
	}
	
	job(){
		let{val,country}=this.state;
		axios.post('/api/search',{
			val,
			country
		}).then((res)=>{
		   	if(!res.data.code){
		   		var _msg = this.state.msg
		   		this.setState({
		   			list : res.data.data,
		   			msg : "将搜索地区和关键词设为定制条件"
		   		})
		   	}else{
		   		this.setState({
		   			list : [],
		   			msg : res.data.data
		   		})
		   	}
		})
	}
	
	saveRecord(){
		/*
		 * 保存历史数据 ：
		 * 		1.获取当前输入值，保存到数组record中
		 * 		2.把数组再保存到 sessionStorage 中
		 */
		
		var mess = sessionStorage.getItem('save_r');
		if(mess){
			var index = mess.split(",").indexOf(this.state.val);
			//如果历史数据中有当前输入的值，则直接跳转，不保存到历史中
			if(index == -1){
				this.save_child()
			}else{
				return
			}
		}else{
			this.save_child()
		}
		
		
	}
	noneRecord(){
		this.setState({
			xxx:false
		})
	}
	save_child(){
		let _record = this.state.record.concat(this.state.val);
		this.setState({
			record:_record,
			xxx:false
		},()=>{
			sessionStorage.setItem('save_r', this.state.record);
		})
	}
}


export default Search


