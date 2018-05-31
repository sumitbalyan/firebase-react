import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import Header from './components/Header';
import * as firebase from 'firebase';
import MessageBox from './components/MessageBox';
class LifCycle extends Component {

  constructor(props) {
    super(props);
    console.log(`${Date.now()}, This is constructor`);
    this.state = {
      numberOfRefresh:0
    };

   
    // setInterval(()=>{
    //   console.log(`${Date.now()}, Change state after 2 seconds.`);
    //   this.setState(
    //     previousState=>{
    //       return{numberOfRefresh:previousState.numberOfRefresh+1};
    //     }
    //   );
    // },2000);
  }
UNSAFE_componentWillMount(){
  console.log(`${Date.now()}, This is UNSAFE_componentWillMount`);
}
componentDidMount(){
  console.log(`${Date.now()}, This is componentDidMount`);
}
shouldComponentUpdate (nextProps, nextState) {
  console.log(`${Date.now()}, This is shouldComponentUpdate`);
  return false;
}
UNSAFE_componentWillUpdate(){
  console.log(`${Date.now()}, This is UNSAFE_componentWillUpdate`);
}
componentDidUpdate(){
  console.log(`${Date.now()}, This is componentDidUpdate`);
}

  render() {
    console.log(`${Date.now()}, This is render`);
    let textToDisplay=`Number of Refresh: ${this.state.numberOfRefresh}`;
    return (
      <div>
      <h1 className="App-title"> {textToDisplay}</h1>
      </div>
    )
  }
};

class App extends Component {
  constructor (props) {
    super(props);
     //Firebase initialization
     var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    window.firebase =firebase.initializeApp(config);
    console.log(firebase.name); 
  }
  render() {
    var lifecycle=<LifCycle></LifCycle>;
    return (
      <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
      <div className="column is-3"></div>
      <div className="column is-6">
        <MessageList db={firebase} />
      </div>
      </div>
      <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
      </div>
    );
  }
}

export default App;
