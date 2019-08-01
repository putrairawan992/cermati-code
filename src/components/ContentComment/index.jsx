import React from 'react';
import { Col, Row } from 'antd';
import "./style.sass";
import { Typography } from 'antd';

const { Text } = Typography;

const ContentComment = props => {
    const { data } = props
    return (
        <React.Fragment>
            {data.map((res,i) => {
                    return (
                        <Col md={12} lg={8} key={i}>
                            <div className="card-comment">
                                <Row>
                                    <Col md={24}>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <h3>{res.name}</h3>
                                            {res.icon}
                                        </div>
                                    </Col>
                                    <Text>{res.text}</Text>
                                </Row>
                            </div>
                        </Col>)
                })}
        </React.Fragment>
    );
};

export default ContentComment;