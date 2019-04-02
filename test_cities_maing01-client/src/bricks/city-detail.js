//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import * as UU5 from "uu5g04";

import Config from "./config/config.js";

import "./city-detail.less";
//@viewOff:imports

// todo 2.2 Implementovat funkčnost výpisu všech hodnocení.
export const CityDetail = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "CityDetail",
    classNames: {
      main: Config.CSS + "city-detail",
      gradeA: Config.CSS + "city-detail-grade-A",
      gradeB: Config.CSS + "city-detail-grade-B",
      gradeC: Config.CSS + "city-detail-grade-C",
      gradeD: Config.CSS + "city-detail-grade-D",
      gradeE: Config.CSS + "city-detail-grade-E",
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
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Header level={3} content={this.props.name} />
        <UU5.Bricks.Header level={4} content="Grades" />

      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default CityDetail;
