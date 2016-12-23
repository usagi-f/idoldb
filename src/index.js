import React from 'react';
import ReactDOM from 'react-dom';
import config from './data/config';

import DbTestComponent from './dbTestComponent';

// Initialize
firebase.initializeApp(config);
const dbTest = firebase.database().ref('/idol/test');

// Subscribe
dbTest.on('value', snapshot => {
    document.getElementById('chatText').innerText = snapshot.val().text;
});

ReactDOM.render(
    <DbTestComponent db={dbTest} />,
    document.getElementById('app')
);
