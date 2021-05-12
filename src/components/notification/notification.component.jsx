import React from 'react';

import './notification.styles.scss';

const Notification = ({handleClick}) => (
    <div className="notification">
        <p>You have entered an invalid IP address!</p>
        <span onClick={handleClick}>&#x2715;</span>
    </div>
);



export default Notification;