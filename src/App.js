import React from 'react';
import './App.css';
import axios from 'axios';
import ZipResult from './ZipResult'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zipcodes: []
    }
  }

  searchZip = (evt) => {
    evt.preventDefault();
    let userInput = evt.target[0].value;
    console.log(userInput);

    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + userInput)
      .then((resolve) => { //Called when data is returned
        this.setState({ zipcodes: resolve.data });
        console.log(resolve.data);
      })
      .catch((err) => console.log(err));
  }


  render() {
    let elems = [];    //container
    // let index = 0;
    // for (let zip of this.state.zipcodes) {
    //   elems.push(<ZipResult key={index++} {...zip} />);
    // }

    elems = this.state.zipcodes.map((elems, i) => <ZipResult key={i} {...elems} />)
    return (
      <div className="app">
        <form className="form" onSubmit={this.searchZip}>
          <h1 className="zip-search">ZipCode Search</h1>
          <p className="p">Enter ZipCode: </p><input type="text" />
        </form>

        {elems}
      </div>
    );
  }
}

export default App;
