'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-80fbe817.js');
require('./unsupportedIterableToArray-781911ff.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-b9d88e95.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-236fce8e.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./provider-types.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var useInside_esm = require('./use-inside.esm-67fe2799.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./getDisplayName-7ab6d318.js');
var index$1 = require('./index-6638d2b3.js');
var Card = require('./Card.js');

var illustrationDefault = "48526b4ed811c6ff.png";

var _StyledCard = _styled__default(Card.default).withConfig({
  displayName: "EmptyStateCard___StyledCard",
  componentId: "sc-1c9c9zj-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:", "px 1fr auto;height:", "px;padding:", "px;text-align:center;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv",
  componentId: "sc-1c9c9zj-1"
})(["display:flex;justify-content:center;overflow:hidden;"]);

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv2",
  componentId: "sc-1c9c9zj-2"
})(["color:", ";", ";"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var EmptyStateCard = React__default.memo(function EmptyStateCard(_ref) {
  var action = _ref.action,
      icon = _ref.icon,
      illustration = _ref.illustration,
      text = _ref.text,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["action", "icon", "illustration", "text"]);

  var theme = Theme.useTheme();
  var publicUrl = index$1.usePublicUrl();

  if (icon !== undefined) {
    environment.warnOnce('EmptyStateCard:icon', 'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.');

    if (illustration === undefined) {
      illustration = icon;
    }
  } // default illustration


  if (!illustration) {
    illustration = /*#__PURE__*/React__default.createElement("img", {
      src: publicUrl + illustrationDefault,
      alt: "",
      height: 20 * constants.GU
    });
  }

  return /*#__PURE__*/React__default.createElement(useInside_esm.Inside, {
    name: "EmptyStateCard"
  }, /*#__PURE__*/React__default.createElement(_StyledCard, _extends$1._extends({}, props, {
    _css: 20 * constants.GU,
    _css2: 42 * constants.GU,
    _css3: 2 * constants.GU
  }), /*#__PURE__*/React__default.createElement(_StyledDiv, null, illustration), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css4: theme.surfaceContent,
    _css5: textStyles.textStyle('title4')
  }, text), /*#__PURE__*/React__default.createElement("div", null, action)));
});
EmptyStateCard.propTypes = {
  action: index.PropTypes.node,
  illustration: index.PropTypes.node,
  text: index.PropTypes.node.isRequired,
  // deprecated
  icon: index.PropTypes.node
};

exports.default = EmptyStateCard;
//# sourceMappingURL=EmptyStateCard.js.map
