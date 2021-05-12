import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addSearch, addLastSearch } from '../../redux/search/search.actions';

import CustomForm from '../custom-form/custom-form.component';
import Notification from '../notification/notification.component';

import './search-box.styles.scss';

const SearchBox = ({addSearch, addLastSearch}) =>{
    const [search, setSearch] = useState('');
    const [accessKey] = useState('c8d7e3e54d35e4d10c7aa542bfe21c07')
    const [showNotification, setShowNotification] = useState(false);

    const fetchData = (url) => {
        fetch(url)
            .then(resp => resp)
            .then(resp => resp.json())
            .then(resp => {
                const timestamp = new Date().valueOf();
                resp.timestamp = timestamp;

                addLastSearch(resp);
                addSearch(resp);
            })
            .catch((error) => {
            console.log(error)
            })
    }

      const isAddressValid = (ipaddress) => {
        const pattern = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
        if (pattern.test(ipaddress)) {
          return true
        } 
        
        return;
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isAddressValid(search)){
            setShowNotification(false);
            fetchData(`http://api.ipstack.com/${search}?access_key=${accessKey}`)
        }else{
            setShowNotification(true);
        }
    }
    
    const handleChange = event => {
        event.preventDefault();
        const value = event.target.value;
        setSearch(value);
    }

    const handleClose = () => {
        setShowNotification(false);
    }

    const ShowMessage = () => {
        if(showNotification){
            return <Notification handleClick={handleClose} />
        }
        return null;
    }

    return(
        <div className="search-box">
            <CustomForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                search={search}
            />
            <ShowMessage />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addSearch: item => dispatch(addSearch(item)),
    addLastSearch: item => dispatch(addLastSearch(item)),
  })
  
  export default connect(
    null,
    mapDispatchToProps
  )(SearchBox);