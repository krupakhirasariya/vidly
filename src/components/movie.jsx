import React, { Component } from 'react';
import { getMovies } from '../services/fakeMService'
import Pagination from '../common/pagination';
import { Paginate } from '../utils/paginate';
import ListGroup from '../common/listGroup';
import { getGenre } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 2,
        currentPage: 1,
        genre: [],
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genre = [{ _id: '', name: 'All Genres' }, ...getGenre()]
        this.setState({ movies: getMovies(), genre });
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(x => x._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = movie => {
        const movies = [...this.state.movies]
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].like = !movies[index].like;
        this.setState({ movies });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    handleSorting = sortColumn => {
        this.setState({ sortColumn });
    };

    getPagedData = () => {
        const { currentPage, pageSize, sortColumn, movies: allMovies, selectedGenre } = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = Paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, sortColumn } = this.state;
        if (count === 0) {
            return <p>There is no movies in database.</p>
        } else {
            const { totalCount, data: movies } = this.getPagedData();

            return (
                <div className="row">
                    <div className="col-3">
                        <ListGroup items={this.state.genre}
                            selectedItems={this.state.selectedGenre}
                            onItemSelected={this.handleGenreSelect} />
                    </div>
                    <div className="col">
                        <p>Showing {totalCount} movies in the database.</p>
                        <MoviesTable movies={movies}
                            sortColumn={sortColumn}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSorting}></MoviesTable>
                        <Pagination itemsCount={totalCount} pageSize={pageSize}
                            onPageChange={this.handlePageChange} currentPage={currentPage}></Pagination>
                    </div>
                </div>

            );
        }
    }
}

export default Movies;