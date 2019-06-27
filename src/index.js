import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
    
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // to update state in react we always use setState function
        this.setState({ lat: position.coords.latitude })
      },
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat} </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)