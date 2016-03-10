import * as types from '../constants/actionTypes';

const initialState = [];

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.RETRIEVE_INIT_DATA:
      return action.data;

    default:
      return state;
  }
}
