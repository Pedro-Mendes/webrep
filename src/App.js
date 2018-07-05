import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <UserList/>
      </div>
    );
  }
}

class UserList extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      users : [
        {
          name: 'Lucas',
          trashCounter: 0
        },
        {
          name: 'Marcelo',
          trashCounter: 0
        },
        {
          name: 'Pericles',
          trashCounter: 0
        },
        {
          name: 'Thiago',
          trashCounter: 0
        },
        {
          name: 'Vinicius',
          trashCounter: 0
        }
      ]}   
      
      this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    var name = e.target.value;

    var newUser = {
      name: name,
      trashCounter: 0
    }

    this.setState({
      users: this.state.users.concat([newUser])
    });
    
  }

  render() {
    return(
      <div>
        <div>
          {
            this.state.users.map((user, i) => <User userData={user} key={i}/>)
          }
        </div>
        
        <UserAdder addUser={this.addUser}/>
      </div>
    );
  }
}

class User extends Component {
  render() {

    let user = this.props.userData;
    var userBlock = {marginRight : '20px'}

    return (
      <div> 
        <div> <span style={userBlock}>{user.name} </span> </div>
      </div> 
    );
  }
}


class UserAdder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name : '',
      trashCounter : 0
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      name : e.target.value
    })
  }

  render() {
    return (
      <div>
        <p><b>New user:</b> {this.state.name}</p>
        <button onClick={this.props.addUser} value={this.state.name}>Add new user</button>
        <input onChange={this.handleInput} value={this.state.name}/>
      </div>
    );
  }
}

export default App;
