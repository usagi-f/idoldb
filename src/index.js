import React from 'react';
import ReactDOM from 'react-dom';
import config from './data/config';

import DbTestComponent from './dbTestComponent';

// Initialize
firebase.initializeApp(config);
const dbChara = firebase.database().ref('/idol/character');

ReactDOM.render(
    <DbTestComponent db={dbChara} />,
    document.getElementById('app')
);
