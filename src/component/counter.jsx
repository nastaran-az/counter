import React, {Component} from "react";

class Counter extends Component {
  state = {
    count: 0,
    colors: ["red", "blue", "green"],
  };
  style = {
    fontSize: 15,
    fontWeight: "bold",
  };
  render() {
    let classes = this.getBdg();
    return (
      <div>
        <span style={this.style} className={this.getBdg()}>
          {this.formatCount()}
        </span>

        <button className="btn btn-primary">increment</button>
        <ul>
          {this.state.colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBdg() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;
