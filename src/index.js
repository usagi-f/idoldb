import React from 'react';
import ReactDOM from 'react-dom';
import config from './data/config';

import Children from './children';

firebase.initializeApp(config);

ReactDOM.render(
    <Children />,
    document.getElementById('app')
);
