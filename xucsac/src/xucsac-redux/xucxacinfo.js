import React, { Component } from "react";
import { connect } from "react-redux";
class Xucxacinfo extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          Bạn Chọn:{" "}
          <span className="text-danger">
            {this.props.taiXiu ? "TÀI" : "XỈU"}
          </span>
        </div>
        <div className="display-4">
          Số Bàn Thắng:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi{" "}
          <span className="text-primary">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.xucxacReducer.soBanThang,
    taiXiu: state.xucxacReducer.taiXiu,
    soBanChoi: state.xucxacReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(Xucxacinfo);
