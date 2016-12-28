import React from 'react';
import {Card} from 'antd';

const CardList = (props) => {
    const handleRemoveData = (e) => {
        const id = e.target.getAttribute('data-id');
        props.removeData(id);
    }
    const renderIdolList = () => {
        if (Object.keys(props.data).length === 0) return false;
        let list = [];
        Object.keys(props.data).forEach(key => {
            list.push(
                <Card
                    title={props.data[key].name}
                    bordered={false}
                    style={{marginBottom: 20}}
                    key={key}
                    extra={<p onClick={handleRemoveData} data-id={key}>削除</p>}
                >
                    <p>{props.data[key].group}</p>
                </Card>
            );
        });
        return list;
    };
    return (
        <div id="idolList" style={{padding: 20}}>
            {renderIdolList()}
        </div>
    );
}

CardList.propTypes = {
    data: React.PropTypes.object,
    removeData: React.PropTypes.func
};

CardList.defaultProps = {
    data: {},
    removeData: () => {}
};

export default CardList;
