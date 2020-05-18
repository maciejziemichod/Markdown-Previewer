import React, { Component } from "react";

export default class ElementHeader extends Component {
  render() {
    const icons = [
      "far fa-window-maximize float-right",
      "far fa-window-minimize float-right",
    ];
    const { isMaximized, handleMinMax } = this.props.minMax;

    return (
      <div className="card-header">
        {this.props.title}
        <i
          className={isMaximized ? icons[1] : icons[0]}
          onClick={handleMinMax}
        ></i>
      </div>
    );
  }
}
