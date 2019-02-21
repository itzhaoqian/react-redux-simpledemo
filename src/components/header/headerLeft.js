import React, { Component } from 'react';
import PropTypes from 'prop-types';
class HeaderLeft extends Component {
  componentDidMount(){
  }
  render() {
    console.log('????')
    return (
      <div className="headerWrap">
          子组件名称：{this.props.userName}<br/>
          动态数据：{this.props.dymicName}
      </div>
    );
  }
}
HeaderLeft.propTypes = {
  userName:PropTypes.string
}

export default HeaderLeft;

