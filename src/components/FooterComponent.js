import React, { Component } from 'react';
import { Card, CardTitle, Container } from 'reactstrap';

class FooterComponent extends Component {
    render() {
        return (
            <Container className='fixed-bottom'>
                <br />
                <Card style={{ width: "100%", backgroundColor: "#C1C8E4", color: "dark", height: "60px" }}>
                    <CardTitle>
                        <p className='text-center'>All rights reserved 2021 @PPS<br />----****----****----</p>
                    </CardTitle>
                </Card>
            </Container>
        );
    }
}

export default FooterComponent;