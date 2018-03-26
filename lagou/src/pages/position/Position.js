import React, { Component } from 'react';
import './position.css';

class Job extends Component{
	constructor(){
		super();
		
	}
	render(){
		let{positionName,positionId,companyName,companyLogo,city,salary,createTime,companyId} = this.props.job;
		return(
			<li className="activeable list-item" data-positionid={positionId} data-companyid={companyId}>
	            <img src={"//static.lagou.com/"+companyLogo} className="item-logo"/>
	            <div className="item-desc">
	                <h2 className="item-title">{companyName}</h2>
	                <p className="item-info">
	                    <span className="item-pos">
	                        {positionName} [ {city} ]
	                    </span>
	                    <span className="item-salary">{createTime}</span>
	                </p>
	                <p className="item-time">{salary}</p>
	            </div>
	        </li>
		)
	}
}

export default Job