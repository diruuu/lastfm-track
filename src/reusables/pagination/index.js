import React from 'react';
import './style.css';

export default function Pagination({ currentPage, totalPage, nextOnClick, prevOnClick }) {
  return (
    <div className="pagination">
      <div className="page-info">
        Page {currentPage} of {totalPage}
      </div>
      <div className="navigation">
        {currentPage > 1 && currentPage < totalPage && (
          <div className="prev" onClick={prevOnClick}>
            Prev
          </div>
        )}
        {currentPage < totalPage && (
          <div className="next" onClick={nextOnClick}>
            Next
          </div>
        )}
      </div>
    </div>
  );
}
