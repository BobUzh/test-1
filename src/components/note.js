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

  isInput = () => {
    if (!this.state.isInput) {
      this.setState({
        isInput: true
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          ul: []
        },
        isInput: false
      });
    }
  };

  render() {
    const btnSublistStyle = this.state.isInput
      ? "btn btn-danger"
      : "btn btn-success";

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
              className={btnSublistStyle}
              onClick={this.isInput}
            >
              {this.state.isInput ? "Remove Sublist" : "Add Sublist"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.delEl}
            >
              Remove
            </button>
          </div>
        </div>
        {this.state.isInput && <List data={this.state.data.ul} />}
      </li>
    );
  }
}

export default Note;
