export default {
    auth(state, payload) {
      state.token = payload;
    },
    setAutoLogout(state) {
      state.didAutoLogout = true;
    },
    logout(state, payload) {
      state.token = payload;
    }
  };