import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        const { businesses } = this.props;

        return (
            <div className="BusinessList">
                {
                    businesses.map((business, index) => {
                        return <Business business={business}/>;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;