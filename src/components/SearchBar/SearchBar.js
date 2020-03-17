import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    getSortByClass = (sortByOption) => this.state.sortBy === sortByOption ? 'active' : '';

    handleSortByChange = (sortByOption) => {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange = (e) => {
        const term = e.target.value;
        this.setState({
            term
        })
    }

    handleLocationChange = (e) => {
        const location = e.target.value;
        this.setState({
            location
        })
    }

    handleSearchClick = (e) => {
        const { term, location, sortBy } = this.state;
        this.props.searchYelp(term, location, sortBy);
        e.preventDefault();
    }

    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionValue = this.sortByOptions[sortByOption];
            return (
                <li 
                key={sortByOptionValue} 
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                >
                    {sortByOption}
                </li>
            );
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearchClick}>
                    <a href="#">Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;