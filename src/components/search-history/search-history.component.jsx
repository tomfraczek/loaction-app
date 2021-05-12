import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchItems } from '../../redux/search/search.selectors';
import { addLastSearch } from '../../redux/search/search.actions';

import CustomButton from '../custom-button/custom-button.component';

import './search-history.styles.scss';

const SearchHistory = ({searchItems, addLastSearch}) => {

    const SearchHistoryItem = () => {
        if(searchItems.length){
            return searchItems.sort((a, b) => b.timestamp - a.timestamp).slice(0, 9).map((item, index) => (
                <div key={index} className="search-item">
                        <span className='item-query'>{item.ip}</span>
                        <span className='item-query'>{item.country_name}</span>
                        <span className='item-query'>{item.city}</span>

                        <CustomButton 
                            onClick={() => handleClick(item)}
                            naked
                            inverted
                        >Show more</CustomButton>
                    </div>
            ))
        }

        return <p>The history's empty</p>;
    }

    const handleClick = item => {
        addLastSearch(item)
    }

    return(
        <div className="search-history">
            <span className="history-title">Previous Searches:</span>
            <SearchHistoryItem />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    searchItems: selectSearchItems
})

const mapDispatchToProps = dispatch => ({
    addLastSearch: item => dispatch(addLastSearch(item)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);