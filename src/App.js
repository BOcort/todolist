
import './App.css';
import React, { Component } from 'react';
import List from "./List"


  class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem :"",
            items :[]
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
             items: [...this.state.items, this.state.todoItem],
             todoItem: ''
        })
    }
    handleChange = (event) => {
        this.setState({
            todoItem :event.target.value
        })
    }
    
    render() {
        return(  
            <div class="todo list">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.todoItem} onChange={this.handleChange} ></input>
                    <button>ADD</button>
                </form>
                <div class="list-banyak">
                    <List items={this.state.items} />
                </div>
                
            </div>
        );        
    }
    
}


export default App;
