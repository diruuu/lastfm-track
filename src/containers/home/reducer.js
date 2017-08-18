const initialState = {
  isLoading: false,
  data: [],
  searchValue: '',
};

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'START_LOADING_FETCH_ARTIST':
      return Object.assign({}, state, {
        isLoading: true,
      });
    case 'SUCCESS_FETCHING_ARTIST_BY_COUNTRY':
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data.topartists,
      });
    case 'FAIL_FETCHING_ARTIST_BY_COUNTRY':
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.errorMessage,
      });
    case 'CHANGE_INPUT_VALUE':
      return Object.assign({}, state, {
        searchValue: action.newInput,
      });
    default:
      return state;
  }
};

export default reducers;
