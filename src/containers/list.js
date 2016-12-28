import React from 'react';
import CardList from './../components/cardlist';
import AddCharacter from './../components/addcharacter';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: {}
        };
        this.handleAddData = this.handleAddData.bind(this);
        this.handleRemoveData = this.handleRemoveData.bind(this);
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
    handleRemoveData(e) {
        const {db} = this.props;
        const id = e.target.getAttribute('data-id');
        db.child(id).remove();
    }
    render() {
        return (
            <div>
                <AddCharacter
                    handleAddData={this.handleAddData}
                />
                <CardList
                    data={this.state.viewData}
                    handleRemoveData={this.handleRemoveData}
                />
            </div>
        );
    }
}

List.propTypes = {
    db: React.PropTypes.object
};

List.defaultProps = {
    db: {}
};

export default List;
