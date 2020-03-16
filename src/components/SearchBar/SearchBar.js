import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    state = {
        filter: Object.values(sortByOptions)[0]
    }

    selectFilter = (e) => {
        this.setState({filter: sortByOptions[e.target.textContent]});
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} onClick={this.selectFilter}>{sortByOption}</li>;
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
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="#">Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;