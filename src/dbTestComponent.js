import React from 'react';
import {getUniqueStr} from './util/uniqueStr';

class DbTestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: []
        }
    }
    componentWillMount() {
        const {db} = this.props;
        // Subscribe
        db.on('value', snapshot => {
            this.setState({
                viewData: snapshot.val()
            });
        });
    }
    handleAddData() {
        const group = document.querySelector('#newGroup').value;
        const name = document.querySelector('#newName').value;
        props.db.set({
            id: getUniqueStr(),
            group: group,
            name: name
        });
    }
    renderIdolList() {
        console.log(this.state.viewData);
        if (this.state.viewData.length === 0) return false;
        return this.state.viewData.map(elm => {
            return (
                <div key={elm.id} style={{border: '1px solid black'}}>
                    <p>{elm.id}</p>
                    <p>{elm.group}</p>
                    <p>{elm.name}</p>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                Group: <input type="text" name="" id="newGroup" />
                Name: <input type="text" name="" id="newName" />
                <button onClick={this.handleAddData}>情報を追加</button>
                <div id="idolList">
                    {this.renderIdolList()}
                </div>
            </div>
        );
    }
}

DbTestComponent.propTypes = {
    db: React.PropTypes.object
};

DbTestComponent.defaultProps = {
    db: {}
};

export default DbTestComponent;
