import React from 'react';
import {getUniqueStr} from './util/uniqueStr';

class DbTestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: []
        };
        this.handleAddData = this.handleAddData.bind(this);
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
        const {db} = this.props;
        const group = document.querySelector('#newGroup').value;
        const name = document.querySelector('#newName').value;
        db.push({
            group: group,
            name: name
        });
    }
    renderIdolList() {
        if (Object.keys(this.state.viewData).length === 0) return false;
        let list = [];
        Object.keys(this.state.viewData).forEach(key => {
            list.push(
                <div key={key} style={{border: '1px solid black'}}>
                    <p style={{fontSize: 12}}>{key}</p>
                    <p>{this.state.viewData[key].group}</p>
                    <p>{this.state.viewData[key].name}</p>
                </div>
            );
        });
        return list;
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
