import React from 'react';
import { connect } from 'react-redux';
import Hero from '../../reusables/hero';
import SearchResult from '../../reusables/search-result';
import './style.css';
import { changeInputValue, fetchArtistListByCountry } from './actions';

function Home({ dispatch, homeState }) {
  const { searchValue, data, isLoading } = homeState;
  const currentPage = data && data['@attr'] ? parseInt(data['@attr'].page, 10) : null;
  const totalPage = data && data['@attr'] ? parseInt(data['@attr'].totalPages, 10) : null;

  return (
    <div className="home">
      <Hero
        searchValue={searchValue}
        changeInputValue={value => dispatch(changeInputValue(value))}
        fetchArtistListByCountry={country => dispatch(fetchArtistListByCountry(country))}
      />
      <SearchResult
        country={searchValue}
        isLoading={isLoading}
        data={data && data.artist && data.artist.length && data.artist.slice(-5)}
        currentPage={currentPage}
        totalPage={totalPage}
        fetchArtistListByCountry={page => dispatch(fetchArtistListByCountry(searchValue, page))}
      />
    </div>
  );
}

export default connect(state => ({
  homeState: state.homeState,
}))(Home);
