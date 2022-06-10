import React, { Component } from "react";
import { connect } from "react-redux";

class Xucxacitem extends Component {
  renderXucXac = () => {
    console.log(this.props.mangXucXac);
    return this.props.mangXucXac.map((xucxac, index) => {
      return (
        <img
          key={index}
          style={{ width: 50, height: 50 }}
          className="ml-2"
          src={xucxac.hinhAnh}
          alt={xucxac.hinhAnh}
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucxacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps, null)(Xucxacitem);
