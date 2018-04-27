'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RayrPage = function (_React$Component) {
    _inherits(RayrPage, _React$Component);

    function RayrPage(props) {
        _classCallCheck(this, RayrPage);

        var _this = _possibleConstructorReturn(this, (RayrPage.__proto__ || Object.getPrototypeOf(RayrPage)).call(this, props));

        _this.state = {
            count: props.count,
            currentPage: props.currentPage,
            perPage: props.perPage,
            showPages: 5,
            arr: [],
            goPage: ''
        };
        return _this;
    }

    _createClass(RayrPage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.changePage(1);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var cPage = parseInt(props.currentPage);

            if (props.count != null && props.count != 0) {
                this.setState({ count: props.count, currentPage: parseInt(props.currentPage), perPage: props.perPage }, this.changePage(this.state.currentPage));
            }
        }
    }, {
        key: 'changePage',
        value: function changePage(item) {
            item = parseInt(item);
            this.state.arr = [];
            var length = void 0;
            var k = 0;
            var pages = Math.ceil(this.state.count / this.state.perPage);
            if (pages < this.state.showPages) {
                length = pages;
                for (var i = 0; i < length; i++) {
                    this.state.arr.push(i + 1);
                }
            } else {
                length = this.state.showPages;
                if (item - 2 >= 1 && item + 2 <= pages) {
                    k = -2;
                } else if (item - 2 < 1) {
                    k = -(item - 1);
                } else if (item + 2 > pages) {
                    k = -item + pages - length + 1;
                }
                for (var _i = 0; _i < length; _i++) {
                    this.state.arr.push(item + k + _i);
                }
            }
        }
    }, {
        key: 'toPage',
        value: function toPage(item, page) {
            var _this2 = this;

            if (item === 0 || item === 1 && page === 1 || item > Math.ceil(this.state.count / this.state.perPage) || item === Math.ceil(this.state.count / this.state.perPage) && page === Math.ceil(this.state.count / this.state.perPage) || item === this.state.currentPage) {
                return;
            }
            this.setState({ currentPage: item }, function () {
                _this2.changePage(item);
                _this2.props.onChange(item, page);
            });
        }
    }, {
        key: 'isShow',
        value: function isShow(count) {
            var _this3 = this;

            var page = parseInt(this.state.currentPage);
            var lastpage = Math.ceil(this.state.count / this.state.perPage);
            this.changePage(page);
            if (count === 0 || count === null) {
                return null;
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'rayr-page-div' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'rayr-page' },
                        _react2.default.createElement(
                            'li',
                            { className: '' + (page === 1 ? 'click-disable' : ''), onClick: function onClick() {
                                    _this3.toPage(1, page);
                                } },
                            _react2.default.createElement(
                                'span',
                                null,
                                '‹‹'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: '' + (page === 1 ? 'click-disable' : ''), onClick: function onClick() {
                                    _this3.toPage(page - 1);
                                } },
                            _react2.default.createElement(
                                'span',
                                null,
                                '‹'
                            )
                        ),
                        this.state.arr.map(function (item, index) {
                            var _React$createElement;

                            return _react2.default.createElement(
                                'li',
                                (_React$createElement = { key: index, className: '' + (page === item ? 'value-blue' : '') }, _defineProperty(_React$createElement, 'key', item.toString()), _defineProperty(_React$createElement, 'onClick', function onClick() {
                                    _this3.toPage(item);
                                }), _React$createElement),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    item
                                )
                            );
                        }),
                        _react2.default.createElement(
                            'li',
                            { className: '' + (page === lastpage ? 'click-disable' : ''), onClick: function onClick() {
                                    _this3.toPage(page + 1);
                                } },
                            _react2.default.createElement(
                                'span',
                                null,
                                '›'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: '' + (page === lastpage ? 'click-disable' : ''), onClick: function onClick() {
                                    _this3.toPage(lastpage, page);
                                } },
                            _react2.default.createElement(
                                'span',
                                null,
                                '››'
                            )
                        ),
                        lastpage > 5 && [_react2.default.createElement(
                            'li',
                            { className: 'li-go-width', key: 'go' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u524D\u5F80'
                            )
                        ), _react2.default.createElement('input', { key: 'input', className: 'input-go', value: this.state.goPage,
                            placeholder: Math.ceil(this.state.count / this.state.perPage),
                            onChange: function onChange(e) {
                                _this3.setState({
                                    goPage: e.target.value
                                });
                            },
                            onKeyDown: function onKeyDown(e) {
                                if (e.keyCode === 13) {
                                    if (_this3.state.goPage >= 1 && _this3.state.goPage <= lastpage && parseInt(_this3.state.goPage) !== page) {
                                        _this3.toPage(_this3.state.goPage);
                                        e.target.blur();
                                    }
                                }
                            }
                        }), _react2.default.createElement(
                            'li',
                            { key: 'page', className: 'li-page-width' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u9875'
                            )
                        )]
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return this.isShow(this.state.count);
        }
    }]);

    return RayrPage;
}(_react2.default.Component);

RayrPage.propTypes = {
    count: _propTypes2.default.number.isRequired
    // currentPage: PropTypes.number,
    // perPage: PropTypes.number
    // showPages: PropTypes.number
};
RayrPage.defaultProps = {
    count: null,
    currentPage: 1,
    perPage: 10
};
exports.default = RayrPage;
module.exports = exports['default'];