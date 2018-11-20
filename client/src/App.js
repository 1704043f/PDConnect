import React, { Component } from "react";
import Routes from './Routes';
import "./App.css";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import  AppBar from './components/AppBar';
import Footer2 from './components/home2/footer2';

class App extends Component {
  render() {
    return (
      <div > 
        <AppBar />
          <div className='content-holder'>
            <Routes {...this.props} />
          </div>
        <Footer2 />
      </div>
    );
  }
}
const mapStateToProps = state => {
  //console.log("state in app.js : ", state);
  return state;

}

export default withRouter(connect(mapStateToProps)(App));
