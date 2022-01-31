
import { Component } from 'react';
import './App.css';
import NewYork from './NewYork';
import Paris from './Paris';
class App extends Component{
  state = {
  show: true

  }

  render(){
    const BtnText = this.state.show? "Paris" : "NewYork";
    return <div >
      <p >{this.state.show ? <NewYork/> : < Paris/> } </p>
      <button  className ="btn" onClick = {() => {this.setState(
        {show:!this.state.show}
      )}}>{BtnText}</button>
    </div>
  }
}


export default App;
