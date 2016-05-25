import * as types from './actions.js';

const initialState = {
};

const MainStore = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_RADIO_CHANGE: {
      return {
        ...state
      }
    }
    default: {
      return {...state}
    }
  }
};
export default MainStore;