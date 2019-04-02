//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";

import Config from "./config/config.js";

import CityDetail from "../bricks/city-detail";

import PropTypes from "prop-types";
//@viewOff:imports

export const ShowCityDetail = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.RouteMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "ShowCityDetail",
    classNames: {
      main: Config.CSS + "show-city-detail"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    name: PropTypes.string,
    population: PropTypes.number,
    averageGrade: PropTypes.number,
    grades: PropTypes.arrayOf(PropTypes.shape({
      grade: PropTypes.string,
      dateOfCreation: PropTypes.string
    }))
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _showDetail(){

  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <CityDetail {...this.props} />
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default ShowCityDetail;
