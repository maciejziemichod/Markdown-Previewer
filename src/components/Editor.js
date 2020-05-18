import React, { Component } from "react";
import ElementHeader from "./ElementHeader.js";
import { maximizedStyle } from "./maximizedStyle.js";

export default class Editor extends Component {
  state = {
    isMaximized: false,
  };

  handleMinMax = () => {
    this.setState((state) => ({ isMaximized: !state.isMaximized }));
  };

  render() {
    const minMax = {
      isMaximized: this.state.isMaximized,
      handleMinMax: this.handleMinMax,
    };

    const classes = this.state.isMaximized
      ? "mx-auto card "
      : "mx-auto card mt-5 mb-5 editorMinimized";

    return (
      <div
        className={classes}
        style={this.state.isMaximized ? maximizedStyle : {}}
      >
        <ElementHeader title="Editor" minMax={minMax} />
        <textarea
          id="editor"
          style={{ height: "100%" }}
          className="form-control"
          name="text"
          value={this.props.text}
          onChange={this.props.onChange}
        ></textarea>
      </div>
    );
  }
}
