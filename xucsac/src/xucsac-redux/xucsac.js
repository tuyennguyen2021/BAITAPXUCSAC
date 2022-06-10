import React, { Component } from "react";
import "./xucsac.css";
import Xucxacitem from "./xucxacitem";
import Xucxacinfo from "./xucxacinfo";
import { connect } from "react-redux";

class Xucsac extends Component {
  render() {
    return (
      <div className="game">
        <div className="titlegame text-center mt-5 display-4">
          GAME ĐỔ XÚC XẮC
        </div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(true);
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-2">
            <Xucxacitem />
          </div>
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.datCuoc(false);
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="xucsacinfo text-center">
          <Xucxacinfo />
          <button
            className="btn btn-success mt-5"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchtoProps)(Xucsac);
