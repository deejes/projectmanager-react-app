import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'

class App extends Component {
  constructor(){
    super()
    this.state = {
        projects: [

        ]


    }
}
  componentWillMount(){
    this.setState({projects:[
      {
        title: "Business Website",
        category: "web Design"
    },
    {
        title: "Social App",
        category: "Mobile Dev"
    },
    {
        title: "Ecommerce",
        category: "web development"
    }

    ]})

  }
  render() {
    return (
      <div className="App">
       This is my app 
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
