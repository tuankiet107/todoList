import React, { Component } from 'react';
import './App.css';
import { Card } from 'reactstrap';
import TaskForm from './components/taskForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
    if(localStorage.getItem('lists')){
      let lists = JSON.parse(localStorage.getItem('lists'));
      this.setState({
        lists: lists
      })
    }
  }

  onItemClick = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const lists = this.state.lists;
      // const index = lists.indexOf(item);

      this.setState({
        // lists: [
        //   ...lists.slice(0, index),
        //   {
        //     ...item,
        //     isComplete: !isComplete
        //   },
        //   ...lists.slice(index + 1)
        // ]
        
        lists: lists.map( i => (i === item) ? {...i, isComplete: !isComplete} : {...i} )
      })
    }
  }

  onSubmit = (value) => {
      const lists = this.state.lists;
      this.setState({
        lists: [...lists, value]
      })

    localStorage.setItem('lists', JSON.stringify(lists));
  }

  deleteItem = (value) => {
      const lists = this.state.lists;
      const index = lists.indexOf(value);
      lists.splice(index,1);

      this.setState({
        lists: lists
      })

      localStorage.setItem('lists', JSON.stringify(lists));
  }



  render() {
    const lists = this.state.lists;
    const result = lists.map((item,index) => {
        return  <div className="result"        
                    key={index} 
                >
                    <div
                      className={(item.isComplete === false) ? 'item checkItem' : 'item'}
                      onClick={this.onItemClick(item)}
                    >
                      <i className="fas fa-check-circle"></i>
                      <span>{item.title}</span>
                    </div>
                    <i className="far fa-times-circle" onClick={() => this.deleteItem(item)}></i>
                </div>
                  
    })
    return (
      <div className="App">
        <h1>todos</h1>
        <Card body>
            <TaskForm onSubmit={this.onSubmit} />
            {result}
        </Card>

        
      </div>
    )
  }
}

export default App;