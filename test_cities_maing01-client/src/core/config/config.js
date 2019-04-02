import Config from "../../config/config.js";

export default {
  ...Config,

  TAG: Config.TAG + "Core.",
  CSS: Config.CSS + "core-"
};
