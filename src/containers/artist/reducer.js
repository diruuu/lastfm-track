const initialState = {
  isLoading: false,
  data: {},
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'START_LOADING_FETCH_TRACK':
      return Object.assign({}, state, {
        isLoading: true,
      });
    case 'SUCCESS_FETCHING_TRACK':
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data.toptracks,
      });
    case 'FAIL_FETCHING_TRACK':
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage,
      });
    default:
      return state;
  }
};

export default reducers;
