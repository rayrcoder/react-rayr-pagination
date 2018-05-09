import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrPagination extends React.Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        size: PropTypes.oneOf(['lg', 'md', 'sm'])
        // currentPage: PropTypes.number,
        // perPage: PropTypes.number
        // showPages: PropTypes.number
    };

    static defaultProps = {
        count: null,
        currentPage: 1,
        perPage: 10,
        size: 'md'
    };

    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            currentPage: props.currentPage,
            perPage: props.perPage,
            size: props.size,
            className:props.className,
            showPages: 5,
            arr: [],
            goPage: ''
        }
    }
    componentWillMount() {
        this.changePage(1);
    }

    componentWillReceiveProps(props) {
        let cPage = parseInt(props.currentPage);

        if (props.count != null && props.count != 0) {
            this.setState({ count: props.count, currentPage: parseInt(props.currentPage), perPage: props.perPage }, this.changePage(this.state.currentPage));
        }

    }
    changePage(item) {
        item = parseInt(item);
        this.state.arr = [];
        let length;
        let k = 0;
        let pages = Math.ceil(this.state.count / this.state.perPage);
        if (pages < this.state.showPages) {
            length = pages;
            for (let i = 0; i < length; i++) {
                this.state.arr.push(i + 1);
            }
        } else {
            length = this.state.showPages;
            if ((item - 2 >= 1) && (item + 2 <= pages)) {
                k = -2;
            } else if (item - 2 < 1) {
                k = -(item - 1);
            } else if (item + 2 > pages) {
                k = -item + pages - length + 1;
            }
            for (let i = 0; i < length; i++) {
                this.state.arr.push(item + k + i);
            }
        }
    }
    toPage(item, page) {
        if (item === 0 || (item === 1 && page === 1) || item > Math.ceil(this.state.count / this.state.perPage) || (item === Math.ceil(this.state.count / this.state.perPage) && page === Math.ceil(this.state.count / this.state.perPage)) || item === this.state.currentPage) {
            return;
        }
        this.setState({ currentPage: item, goPage: page === 'go-page' ? item: ''}, () => {
            this.changePage(item);
            this.props.onChange(item, page);
        });

    }
    isShow(count) {
        let page = parseInt(this.state.currentPage);
        let lastpage = Math.ceil(this.state.count / this.state.perPage);
        let last_input_length = ('' + lastpage).split('').length
        let input_length = ('' + this.state.goPage).split('').length || last_input_length;
        this.changePage(page);
        if (count === 0 || count === null) {
            return null;
        } else {
            return (
                <div className={`rayr-page-container ${this.state.className}`}>
                    <ul className={`rayr-page ${this.state.size+'-rayr-page'}`}>
                        <li className={`${page === 1 ? 'click-disable' : ''}`} onClick={() => { this.toPage(1, page) }}><span>{'‹‹'}</span></li>
                        <li className={`${page === 1 ? 'click-disable' : ''}`} onClick={() => { this.toPage(page - 1) }}><span>{'‹'}</span></li>
                        {
                            this.state.arr.map((item, index) => {
                                return (
                                    <li key={index} className={`${page === item ? 'value-blue' : ''}`} key={item.toString()} onClick={() => { this.toPage(item) }}><span>{item}</span></li>
                                )
                            })
                        }
                        <li className={`${page === lastpage ? 'click-disable' : ''}`} onClick={() => { this.toPage(page + 1) }}><span>{'›'}</span></li>
                        <li className={`${page === lastpage ? 'click-disable' : ''}`} onClick={() => { this.toPage(lastpage, page) }}><span>{'››'}</span></li>

                        {
                            lastpage > 5 && [<li className="li-go-text" key='go'><span>前往</span></li>,
                            <input key='input' size={input_length + 1} min='1' max={'' + lastpage} maxLength={last_input_length} title="输入有误" className="input-go" value={this.state.goPage}
                                placeholder={Math.ceil(this.state.count / this.state.perPage)}
                                onChange={(e) => {
                                    if ((e.target.value >= 1 && e.target.value <= lastpage) || e.target.value === '') {
                                        this.setState({
                                            goPage: e.target.value
                                        })
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        if (this.state.goPage >= 1 && this.state.goPage <= lastpage && parseInt(this.state.goPage) !== page) {
                                            this.toPage(this.state.goPage,'go-page');
                                            e.target.blur();
                                        }

                                    }
                                }}
                            />,
                            <li key='page' className="li-page-text"><span>页</span></li>]
                        }
                    </ul>
                </div>
            );
        }
    }
    render() {
        return (
            this.isShow(this.state.count)

        );
    }
}

export default RayrPagination;
