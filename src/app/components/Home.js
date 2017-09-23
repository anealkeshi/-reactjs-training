import React from "react";

export class Home extends React.Component {

  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    }
    console.log("constructor");
  }

  sayGreet(){
    this.props.greet(this.props.name);
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink(){
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event){
    this.setState({
      homeLink: event.target.value
    });
  }

  componentWillMount(){
    console.log("Component will mount");
  }

  componentDidMount(){
    console.log("Component did mount");
  }

  componentWillReceiveProps(nextProps){
    console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Should Component update", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component did mount", prevProps, prevState);
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render(){
    console.log("Render");
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
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  homeLink: React.PropTypes.string
}
