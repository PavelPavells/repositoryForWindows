import { createStore } from 'redux';

const initialState = {
  users: {
    entities: [],
    isLoading: false,
    isLoaded: false,
    totalOnBackend: null,
  },
  products: {
    entities: [],
  },
  dataIsLoading: false,
  lastActivityTime: 0,
};

const TYPES = {
  LOAD_DATA_START: 'LOAD_DATA_START',
  LOAD_DATA_FINISH: 'LOAD_DATA_FINISH',
  SET_LAST_ACTIVITY_TIME: 'SET_LAST_ACTIVITY_TIME',
};
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case TYPES.LOAD_DATA_START:
      return { ...state, dataIsLoading: true };

    case TYPES.LOAD_DATA_FINISH:
      return { ...state, dataIsLoading: false };

    case TYPES.SET_LAST_ACTIVITY_TIME:
      return { ...state, lastActivityTime: action.payload };

    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
const loadDataStart = () => ({
  type: TYPES.LOAD_DATA_START,
});
const loadDataFinish = () => ({
  type: TYPES.LOAD_DATA_FINISH,
});
const setLastActivityTime = payload => ({
  type: TYPES.SET_LAST_ACTIVITY_TIME,
  payload,
});

const now = new Date().getTime();

store.dispatch(loadDataStart());
store.dispatch(loadDataFinish());
store.dispatch(setLastActivityTime(now));
