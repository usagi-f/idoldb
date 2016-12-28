import React from 'react';
import ReactDOM from 'react-dom';
import config from './data/config';

import List from './containers/list';

// Initialize
firebase.initializeApp(config);
const dbChara = firebase.database().ref('/idol/character');

ReactDOM.render(
    <List db={dbChara} />,
    document.getElementById('app')
);
