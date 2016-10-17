import * as types from './../actions/actions.js';

const initialState = {
};

const MainStore = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STORE: {
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