import React from "react";

export class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    }
  }

  sayGreet(){
    this.props.greet(this.props.name);
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }

  render(){
        return (
            <div>
                <p>In a new Component</p>
                <p>You name is {this.props.name}, you age is {this.state.age} </p>
                <p>Status : {this.state.status} </p>
                <hr/>
            {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button> */ }
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.sayGreet.bind(this)} className="btn btn-primary">Greet</button>
            </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func
}
