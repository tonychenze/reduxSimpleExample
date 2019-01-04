import React, { Component } from "react";
import { connect } from "react-redux";

import { setName, getData } from "./actions/userActions";
import "./App.css";

class App extends Component {
  render() {
    console.log(this.props.user.users);
    return (
      <div className="App">
        <h1>hello {this.props.user.name}</h1>
        <div>
          {this.props.user.users &&
            this.props.user.users.map(item => (
              <div key={item._id}>{item.description}</div>
            ))}
        </div>
        <button onClick={() => this.props.getData()}>Change Name</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    },
    getData: () => {
      dispatch(getData());
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
