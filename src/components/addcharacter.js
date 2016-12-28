import React from 'react';
import {Button, Input, Col} from 'antd';
const InputGroup = Input.Group;

class AddCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newgroup: '',
            newname: ''
        };
        this.handleChangeNewGroup = this.handleChangeNewGroup.bind(this);
        this.handleChangeNewName = this.handleChangeNewName.bind(this);
        this.handleAddData = this.handleAddData.bind(this);
    }
    handleChangeNewGroup(e) {
        this.setState({
            newgroup: e.target.value,
        })
    }
    handleChangeNewName(e) {
        this.setState({
            newname: e.target.value,
        })
    }
    handleAddData() {
        this.props.addData({
            group: this.state.newgroup,
            name: this.state.newname
        });
        this.setState({
            newgroup: '',
            newname: ''
        })
    }
    render() {
        return (
            <div style={{background: '#fff', padding: 20, boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'}}>
                <InputGroup>
                    <Col span="9">
                        <Input
                            addonBefore="Group"
                            onChange={this.handleChangeNewGroup}
                            value={this.state.newgroup}
                        />
                    </Col>
                    <Col span="9">
                        <Input
                            addonBefore="Name"
                            onChange={this.handleChangeNewName}
                            value={this.state.newname}
                        />
                    </Col>
                    <Col span="6">
                        <Button onClick={this.handleAddData} type="primary" style={{width: '100%'}}>追加</Button>
                    </Col>
                </InputGroup>
            </div>
        );
    }
}

AddCharacter.propTypes = {
    addData: React.PropTypes.func
};

AddCharacter.defaultProps = {
    addData: () => {}
};

export default AddCharacter;
