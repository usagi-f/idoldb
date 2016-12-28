import React from 'react';
import {Button, Input, Col} from 'antd';
const InputGroup = Input.Group;

const AddCharacter = (props) => {
    return (
        <div style={{background: '#fff', padding: 20, boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'}}>
            <InputGroup>
                <Col span="9">
                    <Input addonBefore="Group" id="newGroup" />
                </Col>
                <Col span="9">
                    <Input addonBefore="Name" id="newName" />
                </Col>
                <Col span="6">
                    <Button onClick={props.handleAddData} type="primary" style={{width: '100%'}}>追加</Button>
                </Col>
            </InputGroup>
        </div>
    );
}

AddCharacter.propTypes = {
    handleAddData: React.PropTypes.func
};

AddCharacter.defaultProps = {
    handleAddData: () => {}
};

export default AddCharacter;
