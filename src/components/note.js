import React, { Component } from "react";
import List from "./list";

class Note extends Component {
  state = {
    data: { ul: [] },
    isInput: false
  };

  componentDidMount() {
    this.setState({
      data: this.props.data,
      isInput: !!this.props.data.ul.length
    });
  }

  addUl = () => {
    const newList = {
      id: Date.now(),
      text: "Hello",
      ul: []
    };
    this.setState({
      data: {
        ...this.state.data,
        ul: [...this.state.data.ul, newList]
      }
    });
  };

  isInput = () => {
    this.setState({
      isInput: true
    });
  };

  render() {
    return (
      <li className="list-group-item ">
        <div className="d-flex justify-content-between align-items-center">
          <span>{this.state.data.text}</span>
          <div className="my-btn-group">
            <button
              type="button"
              className="btn btn-outline-primary btn-up"
              onClick={() => this.props.change(-1, this.state.data.id)}
            >
              <i className="fas fa fa-level-up" />
            </button>

            <button
              type="button"
              className="btn btn-outline-primary btn-down"
              onClick={() => this.props.change(1, this.state.data.id)}
            >
              <i className="fas fa fa-level-down" />
            </button>

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.isInput}
            >
              {this.state.isInput ? "Delete Sublist" : "Add Sublist"}
            </button>

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.props.delEl}
            >
              delete
            </button>
          </div>
        </div>
        {this.state.isInput && <List data={this.state.data.ul} />}
      </li>
    );
  }
}

export default Note;
