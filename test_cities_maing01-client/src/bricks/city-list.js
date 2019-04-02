//@viewOn:imports
import React from "react";
import createReactClass from "create-react-class";
import * as UU5 from "uu5g04";
import "uu5tilesg01";

import Calls from "calls";
import Config from "./config/config.js";

import CityTile from "./city-tile"

import "../core/bottom.less";
//@viewOff:imports

export const CityList = createReactClass({
  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.CallsMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Config.TAG + "CityList",
    classNames: {
      main: Config.CSS + "city-list"
    },
    calls:{
      listCities: "listCities"
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  componentWillMount(){
    this.setCalls(Calls)
  },
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private

  _handleListCities(dtoIn){
    this.getCall("listCities")(dtoIn)
  },

  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.Common.Div {...this.getMainPropsToPass()}>

        <UU5.Bricks.Header level={3} content="Cities" />
        <UU5.Tiles.ListController
          onLoad={this._handleListCities}
          selectable={false}
        >
          <UU5.Tiles.List
            tile={<CityTile/>}
            tileHeight={180}
            tileMinWidth={280}
            tileMaxWidth={300}
            tileSpacing={8}
            tileElevationHover={1}
            tileBorder
            tileStyle={{ borderRadius: 4 }}
            rowSpacing={8}
            tileJustify="space-between"
            scrollElement={window}
          />
        </UU5.Tiles.ListController>


      </UU5.Common.Div>
    );
  }
  //@@viewOff:render
});

export default CityList;
