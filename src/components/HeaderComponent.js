import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Card className="my-1" style={{ width: "100%", backgroundColor: "#8860D0", color: "whitesmoke", height: "100%" }}>
                    <CardBody>
                        <h1 className="text-center my-2">
                            Personality Prediction System
                            </h1>
                    </CardBody>
                </Card>
                <br />
            </div>
        );
    }
}

export default HeaderComponent;