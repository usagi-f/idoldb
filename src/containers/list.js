import React from 'react';
import CardList from './../components/cardlist';
import AddCharacter from './../components/addcharacter';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: {}
        };
        this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
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
    addData(data) {
        const {db} = this.props;
        db.push(data);
    }
    removeData(id) {
        const {db} = this.props;
        db.child(id).remove();
    }
    render() {
        return (
            <div>
                <AddCharacter
                    addData={this.addData}
                />
                <CardList
                    data={this.state.viewData}
                    removeData={this.removeData}
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
