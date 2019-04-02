//@@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-bricks";
import "uu_plus4u5g01-app";

import Config from "./config/config.js";

import SpaAuthenticated from "./spa-authenticated";

import "./spa.less";
//@@viewOff:imports

const Spa = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.IdentityMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "Spa",
    classNames: {
      main: Config.CSS + "spa"
    },
    getDerivedStateFromError(error) {
      return { error };
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  getInitialState() {
    return {
      error: null
    }
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  render() {
    let child;
    if (this.state.error) {
      child = <Plus4U5.App.SpaError error={this.state.error} />;
    } else {
      child = <SpaAuthenticated />;
    }

    return child;
  }
  //@@viewOff:render
});

export default Spa;
