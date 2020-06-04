import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( newName, id ) => {
    const newPersonIdx = this.state.persons.findIndex(person => person.id === id);
    const persons = [...this.state.persons];
    const newPerson = {...this.state.persons[newPersonIdx]};
    newPerson.name = newName;
    persons[newPersonIdx] = newPerson;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = pos => {
    const newPersons = [...this.state.persons];
    newPersons.splice(pos, 1);
    this.setState({persons: newPersons});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
              <Person name={person.name} age={person.age}
                      key={person.id} id={person.id}
                      changed={this.nameChangedHandler}
                      click={this.deletePersonHandler.bind(this, index)}/>)}
        </div>

      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
