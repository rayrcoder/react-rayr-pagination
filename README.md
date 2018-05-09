### Description
#### the pagination plugin for react. 
&nbsp;&nbsp;&nbsp;&nbsp;1.support jumping to a page where you want to (when the number of pages is more than 5)

&nbsp;&nbsp;&nbsp;&nbsp;2.can change the counts that each page show

&nbsp;&nbsp;&nbsp;&nbsp;3.can choose different size of the pagination

### Install
    npm install react-rayr-pagination --save

### Params
| param | type | descript | default | 
| :-: | :-: | :-: | :-:|
| count | Number| the sum of data (required)| null
| currentPage | Number | current page | 1 
| perPage | Number | the counts that each page shows | 10
| size | String | the size of the pagination(can receive one of 'lg','md','sm') | md
| className | String | add custom styles for the pagination | 
| onChange | Function | callback, the param is the page which you have clicked| 
### Use Demo
 ```javascript
 import {RayrPagination} from 'react-rayr-pagination';

<RayrPagination className={'yourClassName'} 
    count={this.state.count}
    currentPage={this.state.currentPage}
    perPage={this.state.perPage}
    size={'sm'}
    onChange={(page) => {
        this.setState({currentPage:page});
    }}
/>
```
####  &nbsp;&nbsp; tips:don`t forget to import the css file
