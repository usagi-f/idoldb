import React from 'react';

const DbTestComponent = (props) => {

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

    const handleShowData = () => {
        console.log('foo');
    };

    return (
        <div>
            <button
                onClick={handleSetData}
            >setData</button>
            <button
                onClick={handleShowData}
            >showData</button>
        </div>
    );
};

DbTestComponent.propTypes = {
};

DbTestComponent.defaultProps = {
};

export default DbTestComponent;
