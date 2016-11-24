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

Children.propTypes = {
};

Children.defaultProps = {
};

export default Children;
