import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super(); //-> Component.super()
        this.state ={
            todos:[
                {title:'I am a todo :D'},
                {title:'I am a to2do :P'},
            ]
        }
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress(e){
        if(e.key === 'Enter' && e.target.value) {
            let title = e.target.value;
            // this.state.todos.push({title});
            this.setState({
                todos:[...this.state.todos,{title}]
            })
        }
    }
  render(){
    return (
      <div className="App">
          <input type="text" onKeyPress={this.handlePress}/>
          <hr/>
          <h2>Todos</h2>
          <ul>
              {this.state.todos.map((todo,index) =>{
                  return <TodoView key = {index} todo={todo}/>
              })}
          </ul>
      </div>
    );
  }
}

// redux state props

class TodoView extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>{this.props.todo.title}</div>
        )
    }
}
export default App;
