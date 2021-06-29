
import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {date: new Date()}
}
componentDidMount(){
  this.timerID = setInterval(
    ()=> this.live(), 1000
  )

}

componentWillUnmount(){

}

live(){
  this.setState({
    date: new Date()
  })
}

  render(){
  return (
    <div >
    <h1>Hello world!</h1>
    <h2>it is {this.state.date.toLocaleTimeString()}</h2>
    </div>
  );
}
}

export default App;
