import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      name : 'Emily Fitzlaff',
      counter : 0
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState( { name : 'Alterou o nome!' } );
    this.setState( { counter : counter + 1 } );
  }

  render() {  
    const { name, counter } = this.state;

    return (
      <div className="App">
        <p onClick={this.handleClick}>Olá, { name } - { counter }</p>
      </div>
      
    )
  }
}

export default App;
