import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


//Router app in react
class App extends React.Component{

    render(){
      return(
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">

                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Brand</a>
                </div>


                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">

                  </ul>
                  <form className="navbar-form navbar-right">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>
      );
    }
}

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
      </Route>
   </Router>
), document.getElementById('app'));
