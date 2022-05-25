import React, { Component } from 'react'

export default class Refsclass extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.name = "demo";
    this.logo = React.createRef(null);
  }
  setName(e) {
    this.setState({
      ... this.state, name: e.target.value
    })
  }
 RotateImg = () =>{
  this.logo.current.style.transform = "rotate(-25deg)";
}
  render() {

    return (
      <>
        <div style={{width:"80%",border:"1px solid black",marginLeft:"8rem"}}>
        <div>Refsclass</div>
          <h1>Class Based Component : {this.state.name}</h1>
          <img src="logo192.png" alt="" ref={this.logo} />
          <button onClick={this.RotateImg}>Rotate Img</button>
        </div>
      </>
    )
  }
}

