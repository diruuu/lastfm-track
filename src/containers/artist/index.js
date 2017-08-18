import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from '../../reusables/hero';
import SearchResult from '../../reusables/search-result';
import './style.css';
import { changeInputValue, fetchArtistListByCountry } from '../home/actions';
import { fetchTrackList } from './actions';

class Artist extends Component {
  componentDidMount() {
    const { dispatch, match: { params: { artist }} } = this.props;
    // fetch artist track
    dispatch(fetchTrackList(artist));
  }
  render() {
    const { dispatch, homeState, artistState, match: { params: { artist }} } = this.props;
    const { searchValue } = homeState;
    const { data, isLoading } = artistState;
    const currentPage = data && data['@attr'] ? parseInt(data['@attr'].page, 10) : null;
    const totalPage = data && data['@attr'] ? parseInt(data['@attr'].totalPages, 10) : null;

    return (
      <div className="home">
        <Hero
          searchValue={searchValue}
          changeInputValue={value => dispatch(changeInputValue(value))}
          fetchTrackListByCountry={country => dispatch(fetchArtistListByCountry(country))}
        />
        <SearchResult
          track={artist}
          country={searchValue}
          isLoading={isLoading}
          data={data && data.track && data.track.length && data.track.slice(-5)}
          currentPage={currentPage}
          totalPage={totalPage}
          isTrack
          fetchArtistListByCountry={page => dispatch(fetchTrackList(artist, page))}
        />
      </div>
    );
  }
}

export default connect(state => ({
  homeState: state.homeState,
  artistState: state.artistState,
}))(Artist);
