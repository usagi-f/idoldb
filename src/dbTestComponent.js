import React from 'react';

const DbTestComponent = (props) => {

    // const handleSetData = () => {
    //     const data = {
    //         'character': [
    //             {
    //                 'id': 0,
    //                 'name': 'foo',
    //                 'group': 'bar'
    //             }
    //         ]
    //     };
    //     firebase.database().ref('idol').set(data);
    // };
    //
    // const handleShowData = () => {
    //     console.log('foo');
    // };

    const changeData = () => {
        const text = document.getElementById('my_text').value;
        props.db.set({
            title: 'example',
            text: text
        });
    };

    return (
        <div>
            <p id="chatText"></p>
            <input type="text" name="" id="my_text" />
            <button onClick={changeData}>更新</button>
        </div>
    );
};

DbTestComponent.propTypes = {
    db: React.PropTypes.object
};

DbTestComponent.defaultProps = {
    db: {}
};

export default DbTestComponent;
