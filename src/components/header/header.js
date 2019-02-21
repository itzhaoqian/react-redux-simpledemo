import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderLeft from './headerLeft';
import { fetchPosts,fetchName } from './../../action/postActions';
import './header.css';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
        testName:'test'
    };
}
  componentDidMount(){
    this.props.fetchPosts(); //触发action，改变reducer中的返回值
  }
  changeName(){
    this.props.fetchName();
    this.setState({
      testName:'test111'
    })
  }
  render() {
    return (
      <div className="headerWrap">
          父组件名称：{this.props.userName}
          <HeaderLeft userName={this.props.userName} dymicName={this.state.testName}/>
          <button onClick={this.changeName.bind(this)}>改变名称</button><br/>
          {this.state.testName}
      </div>
    );
  }
}

// export default Header;

Header.propTypes = {
  userName:PropTypes.string,
  fetchPosts:PropTypes.func,
  fetchName:PropTypes.func
}

Header.defaultProps = {
  userName : 'tt',
  fetchPosts : function (){},
  fetchName:function(){}
}

//posts为reducer返回的state /reducer/index目录
// mapStateToProps把posts绑定到属性当中
const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.posts.newData
  }
}

export default connect(mapStateToProps,{fetchPosts,fetchName})(Header)
