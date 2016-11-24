import React from 'react';
import ReactDOM from 'react-dom';
import config from './data/config';

import Children from './children';

// Initialize
firebase.initializeApp(config);

// Subscribe
firebase.database().ref('idol').on('value', snapshot => {
    if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
    }
});

ReactDOM.render(
    <Children />,
    document.getElementById('app')
);
