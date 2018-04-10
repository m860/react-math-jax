'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mathjax = require('mathjax3');

var _mathml = require('mathjax3/mathjax3/input/mathml');

var _tex = require('mathjax3/mathjax3/input/tex');

var _chtml = require('mathjax3/mathjax3/output/chtml');

var _HTMLHandler = require('mathjax3/mathjax3/handlers/html/HTMLHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MathJax3 = function (_PureComponent) {
	_inherits(MathJax3, _PureComponent);

	function MathJax3(props) {
		_classCallCheck(this, MathJax3);

		//init handle
		var _this = _possibleConstructorReturn(this, (MathJax3.__proto__ || Object.getPrototypeOf(MathJax3)).call(this, props));

		_mathjax.MathJax.handlers.register(new _HTMLHandler.HTMLHandler());
		return _this;
	}

	_createClass(MathJax3, [{
		key: 'update',
		value: function update() {
			var inputJax = null;
			switch (this.props.inputType) {
				// case "AsciiMath":
				// 	inputJax = new AsciiMath(this.props.inputOption);
				// 	break;
				case "MathML":
					inputJax = new _mathml.MathML(this.props.inputOption);
					break;
				default:
					inputJax = new _tex.TeX(this.props.inputOption);
			}
			var html = _mathjax.MathJax.document(document, {
				InputJax: inputJax,
				OutputJax: new _chtml.CHTML()
			});
			html.findMath().compile().getMetrics().typeset().updateDocument();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: this.props.style,
					className: this.props.className },
				this.props.children
			);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.update();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.update();
		}
	}]);

	return MathJax3;
}(_react.PureComponent);

MathJax3.propTypes = {
	inputType: _propTypes2.default.oneOf(["MathML", "TeX", "AsciiMath"]),
	inputOption: _propTypes2.default.object,
	children: _propTypes2.default.any,
	style: _propTypes2.default.object,
	className: _propTypes2.default.string
};
MathJax3.defaultProps = {
	inputType: "TeX"
};
exports.default = MathJax3;