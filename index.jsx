import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={//初始状态
      todo:""
    }
    console.log("constructor");
  }
  componentDidMount () {
    console.log("did mount");
    this.setState({//改变状态
      todo:"ToDo"
    });    
  }

  handleChange(e){
    console.log(e.target.value);

    this.setState({
      todo:e.target.value
    });
  }
  render(){
    console.log("render");
    return (
      <div>
        <input onChange={e=>this.handleChange(e)} />
        <br/>
        ToDo list<p>{this.state.todo}</p>
      </div>
    );
  }

}



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);