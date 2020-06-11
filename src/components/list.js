import React, { Component } from "react";
import Note from "./note";

class List extends Component {
  state = {
    list: [],
    value: ""
  };

  componentDidMount() {
    this.setState({
      list: this.props.data
    });
  }

  addNote = () => {
    if (this.state.value.trim() !== "") {
      const newNote = { id: Date.now(), text: this.state.value, ul: [] };
      this.setState({
        list: [...this.state.list, newNote],
        value: ""
      });
    }
  };

  setValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  deleteElement = id => {
    const idx = this.state.list.findIndex(e => e.id === id);
    this.setState({
      list: [
        ...this.state.list.slice(0, idx),
        ...this.state.list.slice(idx + 1)
      ]
    });
  };

  changeList = (direction, id) => {
    const idx = this.state.list.findIndex(e => e.id === id);
    if (direction < 0) {
      this.setState({
        list: [
          ...this.state.list.slice(0, idx - 1),
          this.state.list[idx],
          this.state.list[idx - 1],
          ...this.state.list.slice(idx + 1)
        ]
      });
    } else {
      this.setState({
        list: [
          ...this.state.list.slice(0, idx),
          this.state.list[idx + 1],
          this.state.list[idx],
          ...this.state.list.slice(idx + 2)
        ]
      });
    }
  };

  render() {
    const addNewElement = (
      <li>
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="title task"
            onChange={this.setValue}
            value={this.state.value}
          />
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.addNote}
          >
            Add
          </button>
        </div>
      </li>
    );

    return (
      <ul className="list-group">
        {this.state.list.map(e => (
          <Note
            key={e.id}
            data={e}
            change={this.changeList}
            delEl={() => this.deleteElement(e.id)}
          />
        ))}

        {addNewElement}
      </ul>
    );
  }
}

export default List;
