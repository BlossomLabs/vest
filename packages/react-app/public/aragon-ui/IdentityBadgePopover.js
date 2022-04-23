'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-80fbe817.js');
require('./unsupportedIterableToArray-781911ff.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
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
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
var characters = require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
var web3 = require('./web3.js');
require('./provider-types.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./use-inside.esm-67fe2799.js');
require('./isObject-3aeecfdc.js');
require('./Viewport-b007646a.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-cd9f4a73.js');
require('./IconAddUser.js');
require('./IconAlert.js');
require('./IconAlignCenter.js');
require('./IconAlignJustify.js');
require('./IconAlignLeft.js');
require('./IconAlignRight.js');
require('./IconAragon.js');
require('./IconArrowDown.js');
require('./IconArrowLeft.js');
require('./IconArrowRight.js');
require('./IconArrowUp.js');
require('./IconAtSign.js');
require('./IconBlock.js');
require('./IconBookmark.js');
require('./IconCalendar.js');
require('./IconCanvas.js');
require('./IconCaution.js');
require('./IconCenter.js');
require('./IconChart.js');
require('./IconChat.js');
require('./IconCheck.js');
require('./IconChip.js');
require('./IconCircleCheck.js');
require('./IconCircleMinus.js');
require('./IconCirclePlus.js');
require('./IconClock.js');
require('./IconCloudDownload.js');
require('./IconCloudUpload.js');
require('./IconCoin.js');
require('./IconConfiguration.js');
require('./IconConnect.js');
require('./IconConnection.js');
require('./IconConsole.js');
require('./IconCopy.js');
require('./IconCross.js');
require('./IconDashedSquare.js');
require('./IconDown.js');
require('./IconDownload.js');
require('./IconEdit.js');
require('./IconEllipsis.js');
require('./IconEnter.js');
require('./IconEthereum.js');
require('./IconExternal.js');
require('./IconFile.js');
require('./IconFilter.js');
require('./IconFlag.js');
require('./IconFolder.js');
require('./IconGraph2.js');
require('./IconGraph.js');
require('./IconGrid.js');
require('./IconGroup.js');
require('./IconHash.js');
require('./IconHeart.js');
require('./IconHide.js');
require('./IconHome.js');
require('./IconImage.js');
require('./IconInfo.js');
require('./IconLabel.js');
require('./IconLayers.js');
require('./IconLeft.js');
require('./IconLink.js');
require('./IconLocation.js');
require('./IconLock.js');
require('./IconMail.js');
require('./IconMaximize.js');
require('./IconMenu.js');
require('./IconMinimize.js');
require('./IconMinus.js');
require('./IconMove.js');
require('./IconNoPicture.js');
require('./IconPicture.js');
require('./IconPlus.js');
require('./IconPower.js');
require('./IconPrint.js');
require('./IconProhibited.js');
require('./IconQuestion.js');
require('./IconRefresh.js');
require('./IconRemoveUser.js');
require('./IconRight.js');
require('./IconRotateLeft.js');
require('./IconRotateRight.js');
require('./IconSearch.js');
require('./IconSettings.js');
require('./IconShare.js');
require('./IconSquareMinus.js');
require('./IconSquarePlus.js');
require('./IconSquare.js');
require('./IconStarFilled.js');
require('./IconStar.js');
require('./IconSwap.js');
require('./IconTarget.js');
require('./IconToken.js');
require('./IconTrash.js');
require('./IconUnlock.js');
require('./IconUp.js');
require('./IconUpload.js');
require('./IconUser.js');
require('./IconView.js');
require('./IconVote.js');
require('./IconWallet.js');
require('./IconWarning.js');
require('./IconWorld.js');
require('./IconWrite.js');
require('./IconZoomIn.js');
require('./IconZoomOut.js');
require('./extends-0eb3452f.js');
require('react-dom');
require('./renderprops-da2e8547.js');
require('./_react_commonjs-external-bf8fc71c.js');
require('./Button.js');
require('./ButtonIcon.js');
require('./getDisplayName-7ab6d318.js');
require('./index-6638d2b3.js');
var Link = require('./Link.js');
require('./TextInput.js');
require('./ToastHub.js');
require('./index-d3b14784.js');
require('./RootPortal.js');
require('./TextCopy.js');
require('./taggedTemplateLiteral-227ed122.js');
require('./EthIdenticon.js');
var AddressField = require('./AddressField.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Tag = require('./Tag.js');
var proptypes = require('./proptypes-5b34673d.js');
require('./Popover.js');
require('./observe.js');
require('./index-c0f57634.js');
require('./providers.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');

var _StyledTag = _styled__default(Tag.default).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "ewaz9y-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var IdentityBadgePopover = React__default.memo(function IdentityBadgePopover(_ref) {
  var address = _ref.address,
      connectedAccount = _ref.connectedAccount,
      explorerProvider = _ref.explorerProvider,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = web3.blockExplorerUrl('address', address, {
    networkType: networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default.createElement(BadgePopoverBase.default, {
    addressField: /*#__PURE__*/React__default.createElement(AddressField.default, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default.createElement(Link.default, {
      href: etherscanUrl
    }, "See on ", characters.capitalize(explorerProvider !== null && explorerProvider !== void 0 ? explorerProvider : 'blockscout')),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React__default.createElement(_StyledTag, {
      title: "This is your Ethereum address",
      _css: 1 * constants.GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: proptypes.PropTypes.string,
  connectedAccount: proptypes.PropTypes.bool,
  explorerProvider: proptypes.PropTypes.string,
  networkType: proptypes.PropTypes.string,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  popoverAction: BadgePopoverActionType.default,
  title: proptypes.PropTypes.node,
  visible: proptypes.PropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

exports.default = IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
