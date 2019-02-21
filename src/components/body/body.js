import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts,fetchName } from './../../action/postActions';
import './body.css';

class Body extends Component {
  render() {
    return (
      <div className="bodyWrap">
          body{this.props.userName}
      </div>
    );
  }
}

// export default Body;

Body.propTypes = {
  userName:PropTypes.string,
  fetchPosts:PropTypes.func,
  fetchName:PropTypes.func
}

Body.defaultProps = {
  userName : 'tt',
  fetchPosts : function (){},
  fetchName:function(){}
}

//posts为reducer返回的state
// mapStateToProps把posts绑定到属性当中
const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.posts.newData
  }
}

export default connect(mapStateToProps,{fetchPosts,fetchName})(Body)
