import React, {Component} from 'react';
import Films from './components/films'

class App extends Component {
  render() {
    return (
      <Films films={this.state.films} />
    )
  }
  state = {
    films: []
  };
  componentDidMount() {
    fetch('https://my-films-list.herokuapp.com/posts')
        .then(res => res.json())
        .then((data) => {
            this.setState({ films: data })
        })
        .catch(console.log)
  }
}

export default App;