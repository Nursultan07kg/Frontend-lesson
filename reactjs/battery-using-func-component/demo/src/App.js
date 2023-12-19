import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {level: 0};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prev) => ({
        level: prev.level === 3 ? 0 : prev.level + 1,
      }));
    }, 500);
  }

  render() {
    let color = 'black';
    if (this.state.level === 1) color = 'red';
    else if (this.state.level === 2) color = 'yellow';
    else if (this.state.level === 3) color = 'green';
    return (
      <div className="battery-container">
        <div className="battery-content">
          {this.state.level >= 1 && <div style={{backgroundColor: color}}></div>}
          {this.state.level >= 2 && <div style={{backgroundColor: color}}></div>}
          {this.state.level >= 3 && <div style={{backgroundColor: color}}></div>}
        </div>
        <div className="battery-right"></div>
      </div>
    );
  }
}

export default App;
