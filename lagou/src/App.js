import React, { Component } from 'react';

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	NavLink,
	Switch,
	Redirect
} from 'react-router-dom';

import Loadable from 'react-loadable';
import './App.css';

import Comment from './pages/Comment';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import User from './pages/User';
import Detail from './pages/Detail';
import Write from './pages/Write';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>
      		<div>
      			<Switch>
	      			<Route path="/comment" component={Comment}></Route>
	      			<Route path="/login" component={Login}></Route>
	      			<Route path="/register" component={Register}></Route>
	      			<Route path="/search" component={Search}></Route>
	      			<Route path="/user" component={User}></Route>
	      			<Route path="/detail" component={Detail}></Route>
	      			<Route path="/write" component={Write}></Route>
	      			<Redirect exact path="/" to="/comment" />
	            	<Route render={()=>{return <div>404<img src="404.jpg" /></div>}} />
            	</Switch>
		      </div>
        </Router>
      </div>
    );
  }
}

export default App;
