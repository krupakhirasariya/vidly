import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return <nav>
        <ul className="pagination">
            {pages.map(m => <li key={m} className={m === currentPage ? 'page-item active' : 'page-item'}>
                <a className="page-link" onClick={() => onPageChange(m)}>{m}</a></li>)}
        </ul>
    </nav>;
}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
export default Pagination;
