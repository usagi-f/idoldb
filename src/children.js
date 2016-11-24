import React from 'react';

const Children = (props) => {

    const handleSetData = () => {
        const data = {
            'character': [
                {
                    'id': 0,
                    'name': 'foo',
                    'group': 'bar'
                }
            ]
        };
        firebase.database().ref('idol').set(data);
    };

    return (
        <div>
            <button
                onClick={handleSetData}
            >foo</button>
        </div>
    );
};

Children.propTypes = {
};

Children.defaultProps = {
};

export default Children;
