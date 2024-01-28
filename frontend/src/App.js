import axios, * as others from 'axios';
import React from 'react'

class App extends React.Component{
  state = {
    details: [],
  }

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then((response) => {
      data = response.data;
      this.setState({
        details:data
      });
      console.log(response)
    })
    .catch((error) => console.log(error));
  }

  render(){
    return(
      <div>
        <header> Data Generated From Django </header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.employee}</h2>
              <h2>{output.department}</h2>
            </div>
          </div>
        ))}
      </div>
    )
  }

}

export default App;
