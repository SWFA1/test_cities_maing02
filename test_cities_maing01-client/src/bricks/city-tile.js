//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import PropTypes from "prop-types";

import Config from "./config/config.js";

import ShowCityDetail from "../routes/show-city-detail.js";

import "./city-tile.less";
//@viewOff:imports

export const CityTile = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "CityTile",
    classNames: {
      main: Config.CSS + "city-tile",
      name: Config.CSS + "city-tile-name",
      info: Config.CSS + "city-tile-info",
      label: Config.CSS + "city-tile-info-label",
      value: Config.CSS + "city-tile-info-value",
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
  _showDetail() {
    UU5.Environment.setRoute({
        component: <ShowCityDetail
          name={this.props.name}
          population={this.props.population}
          averageGrade={this.props.averageGrade}
          grades={this.props.grades}
        />, url: { useCase: "city", parameters: { id: this.props.id } }
      }
    )
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    let className = this.getClassName();
    let mainPropsToPass = this.getMainPropsToPass();
    mainPropsToPass.mainAttrs = { onClick: this._showDetail };
    return (
      <UU5.Bricks.Div {...mainPropsToPass}>
        <UU5.Bricks.Header level={4} className={className.name} content={this.props.name} />
        <UU5.Bricks.Div className={className.info}>
          <UU5.Bricks.Div className={className.label} content={"Population"} />
          <UU5.Bricks.Div className={className.value} content={this.props.population} />
        </UU5.Bricks.Div>
        <UU5.Bricks.Div className={className.info}>
          <UU5.Bricks.Div className={className.label} content={"Average Grade"} />
          <UU5.Bricks.Div className={className.value} content={this.props.averageGrade} />
        </UU5.Bricks.Div>

      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});

export default CityTile;
