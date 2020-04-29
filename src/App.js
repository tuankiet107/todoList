import React, { Component } from 'react';
import './App.css';
import { Card } from 'reactstrap';
import TaskForm from './components/taskForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: [
        { title: 'Go to school', isComplete: true},
        { title: 'Take a shower', isComplete: true},
        { title: 'Do homework', isComplete: false},
        { title: 'Go to bed', isComplete: false}
      ]
    }
  }

  onItemClick = (item) => {
    return (event) => {
      const isComplete = item.isComplete;
      const lists = this.state.lists;
      const index = lists.indexOf(item)

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
  }


  render() {
    const lists = this.state.lists;
    const result = lists.map((item,index) => {
      return  <span
                className={(item.isComplete === false) ? 'clickItem' : ''}
                key={index}
                onClick={this.onItemClick(item)}
              > {item.title}
              </span>
    })
    return (
      <div className="App">
        <h1>Home page</h1>
        <Card body>
            <TaskForm onSubmit={this.onSubmit} />
            {result}
        </Card>

        
      </div>
    )
  }
}

export default App;