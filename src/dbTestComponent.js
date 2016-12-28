import React from 'react';
import {Button, Card, Input, Col} from 'antd';
const InputGroup = Input.Group;

class DbTestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: []
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
    renderIdolList() {
        if (Object.keys(this.state.viewData).length === 0) return false;
        let list = [];
        Object.keys(this.state.viewData).forEach(key => {
            list.push(
                <Card
                    title={this.state.viewData[key].name}
                    bordered={false}
                    style={{marginBottom: 20}}
                    key={key}
                    extra={<p onClick={this.handleRemoveData} data-id={key}>削除</p>}
                >
                    <p>{this.state.viewData[key].group}</p>
                </Card>
            );
        });
        return list;
    }
    render() {
        return (
            <div>
                <div style={{background: '#fff', padding: 20, boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'}}>
                    <InputGroup>
                        <Col span="9">
                            <Input addonBefore="Group" id="newGroup" />
                        </Col>
                        <Col span="9">
                            <Input addonBefore="Name" id="newName" />
                        </Col>
                        <Col span="6">
                            <Button onClick={this.handleAddData} type="primary" style={{width: '100%'}}>追加</Button>
                        </Col>
                    </InputGroup>
                </div>
                <div id="idolList" style={{padding: 20}}>
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
