const stateDefaults = {
  taiXiu: true, // tài từ 3 đến 10, xĩu từ 11 trở lên
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 1, hinhAnh: "./img/5.png" },
    { ma: 1, hinhAnh: "./img/1.png" },
  ],
  soBanThang: 0,
  soBanChoi: 0,
};

const xucxacReducer = (state = stateDefaults, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME":
      let mangXXRandom = [];
      for (let i = 0; i < 3; i++) {
        let soRandom = Math.floor(Math.random() * 6) + 1;
        let XXRandom = { ma: soRandom, hinhAnh: `./img/${soRandom}.png` };
        mangXXRandom.push(XXRandom);
      }
      state.mangXucXac = mangXXRandom;
      state.soBanChoi += 1;
      let tongSoDiem = mangXXRandom.reduce((tongDiem, xucxac, index) => {
        return (tongDiem += xucxac.ma);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    default:
      return { ...state };
  }
};
export default xucxacReducer;
