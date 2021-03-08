import React, { Component } from 'react'; //Hooks for react useState, all hooks start with use
import './App.css';
import Person from "./Person/Person";

//Functional Component that manages state and contains other functions 
class app extends Component {

  // Always returns 2 elements, 1st element is the current state and 2nd element is a function that allows to update the state which allows react
  // to know the updates in state
  // left side has array to initialize variables with useState returned values 
  // react hooks, useState override the existing state values 
  constructor() {
    super();
    this.state = {
      persons: [
        { name: 'Ayush', age: 25 },
        { name: 'Piyush', age: 26 },
        { name: 'Bipin', age: 26 },
      ],
      otherState: "Will not be modified"
    }
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //React doesn't allow mutability: this.state.persons[0].name = "Vaibhav";
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Piyush', age: 27 },
        { name: 'Bipin', age: 27 },
      ]
    });
  }
  
  nameChangedHandler = (event) => {
    // console.log('Was Clicked!');
    //React doesn't allow mutability: this.state.persons[0].name = "Vaibhav";
    this.setState({
      persons: [
        { name: 'Ayush', age: 25 },
        { name: event.target.value, age: 26 },
        { name: 'Bipin', age: 26 },
      ]
    });
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button 
          style={buttonStyle}
          onClick={() => this.switchNameHandler('Vaibhav!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Ayush!')}>
            My Hobbies: Gaming
        </Person>
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} 
          type={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  } 
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;

// bind can be used to pass data to the functions using this keyword
// prefer using the bind to pass values to method instead of the arrow function as react might re-render some elements 
// and is inefficient in nature 



