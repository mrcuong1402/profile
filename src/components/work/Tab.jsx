import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <div className="f_btn">
        <label>
          <input type="radio" name="fl_radio"/>
          {this.props.tabs}
        </label>
      </div>
    );
  }
}

export default Tab;
