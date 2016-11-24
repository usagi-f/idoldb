import React from 'react';
import ReactDOM from 'react-dom';
import config from './data/config';

import DbTestComponent from './dbTestComponent';

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
    <DbTestComponent />,
    document.getElementById('app')
);
