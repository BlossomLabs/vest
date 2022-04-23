import './slicedToArray-cbf46938.js';
import './unsupportedIterableToArray-b9b63d70.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-22f6e627.js';
import _styled from 'styled-components';
import './getPrototypeOf-49f616ae.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './provider-types.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import './use-inside.esm-850dc801.js';
import './isObject-4d8f8486.js';
import './Viewport-61a008be.js';
import './Layout.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';
import Button from './Button.js';

var _StyledButtonBase = _styled(ButtonBase).withConfig({
  displayName: "ButtonIcon___StyledButtonBase",
  componentId: "sc-14eq7o9-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:", "px;height:", "px;&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function ButtonIcon(_ref) {
  var label = _ref.label,
      children = _ref.children,
      mode = _ref.mode,
      props = _objectWithoutProperties(_ref, ["label", "children", "mode"]);

  var theme = useTheme();

  if (mode !== undefined) {
    warnOnce('ButtonIcon:mode', 'ButtonIcon: the mode prop is deprecated. Please use Button with the icon prop instead.');
  }

  if (mode === 'button') {
    return /*#__PURE__*/React.createElement(Button, _extends({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    title: label
  }, props, {
    _css: 4 * GU,
    _css2: 4 * GU,
    _css3: theme.surfacePressed
  }), children);
}

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // deprecated
  mode: PropTypes.oneOf(['button'])
};

export default ButtonIcon;
//# sourceMappingURL=ButtonIcon.js.map
