import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../reusables/pagination';
import './style.css';

export default function SearchResult({
  data = {},
  country,
  track,
  fetchArtistListByCountry,
  currentPage,
  totalPage,
  isLoading,
  isTrack
}) {
  return (
    <div className="search-result">
      <div className="container">
        {isTrack && (
          <div className="backButton">
            <Link to={`${process.env.PUBLIC_URL}/`}>
              {country ? (
                <span>
                  &lt; Back to the Search Result for {country}
                </span>
              ) : (
                <span>
                  &lt; Back to homepage
                </span>
              )}
            </Link>
          </div>
        )}
        {!data.length && !isLoading ? (
          <div className="no-data">
            {isTrack ? (
              <span>
                Please choose any artist to search for top track for the artist.
              </span>
            ) : (
              <span>
                Please choose any country on input field above to start using this website.
              </span>
            )}

          </div>
        ) : (
          <div className="has-data">
            {isTrack ? (
              <h3>Top Tracks {track && (<span>by {track}</span>)}</h3>
            ) : (
              <h3>Top Artists {country && (<span>on {country}</span>)}</h3>
            )}

            {isLoading ? (
              <div className="loading">
                Loading...
              </div>
            ) : (
              <div className="result-list">
                {data && data.map((artist, index) => (
                  <SearchItem
                    ranking={(index + 1) + (5 * (currentPage - 1))}
                    thumbnail={artist.image[1]['#text']}
                    name={artist.name}
                    listeners={artist.listeners}
                    isTrack={isTrack}
                  />
                ))}
              </div>
            )}

            {currentPage && totalPage && (
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                nextOnClick={() => fetchArtistListByCountry(currentPage + 1)}
                prevOnClick={() => fetchArtistListByCountry(currentPage - 1)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function SearchItem({ thumbnail, name, ranking, listeners, isTrack }) {
  return (
    <div className="search-item">
      <div className="ranking">{ranking}</div>
      <div className="thumbnail">
        {isTrack ? (
          <img src={thumbnail} alt={name} />
        ) : (
          <Link to={`${process.env.PUBLIC_URL}/artist/${name}`}>
            <img src={thumbnail} alt={name} />
          </Link>
        )}
      </div>
      <div className="artist-name">{name}</div>
      <div className="browse-track-btn">
        {!isTrack && (
          <Link to={`${process.env.PUBLIC_URL}/artist/${name}`}>Browse track</Link>
        )}
      </div>
      <div className="listeners">{listeners} people listen to this {isTrack ? 'track' : 'artist'}</div>
    </div>
  );
}
