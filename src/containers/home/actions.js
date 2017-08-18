export function fetchArtistListByCountry(country, page) {
  return (dispatch) => {
    // Start loading
    dispatch({
      type: 'START_LOADING_FETCH_ARTIST',
    });
    // Start fetching
    fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=20605aac16d1b53ae9ba06e17e84f3b0&format=json&limit=5&page=${page}`)
      .then(response => response.json())
      .then((response) => {
        console.log(response, 'response');
        // Dispatch success result
        dispatch({
          type: 'SUCCESS_FETCHING_ARTIST_BY_COUNTRY',
          data: response,
        });
      })
      .catch((response) => {
        dispatch({
          type: 'FAIL_FETCHING_ARTIST_BY_COUNTRY',
          errorMessage: response,
        });
      });
  };
}

export function changeInputValue(newData) {
  return {
    type: 'CHANGE_INPUT_VALUE',
    newInput: newData,
  };
}
