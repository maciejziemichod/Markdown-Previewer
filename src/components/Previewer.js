import React, { Component } from "react";
import ElementHeader from "./ElementHeader.js";
import { maximizedStyle } from "./maximizedStyle.js";
import marked from "marked";

// add <br> on a single line break
marked.setOptions({
  breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text) {
//   return `<a target="_blank" href="${href}">${text}` + '</a>';
// }

export default class Previewer extends Component {
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

    return (
      <div
        style={this.state.isMaximized ? maximizedStyle : {}}
        className="mx-auto card mb-5"
      >
        <ElementHeader title="Previewer" minMax={minMax} />
        <div className="card-body">
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(this.props.text) }}
          />
        </div>
      </div>
    );
  }
}
