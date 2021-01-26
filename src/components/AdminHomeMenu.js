import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";

class AdminHomeMenu extends Component {
    render() {
        return (
            <ListGroup style={{ height: "100%" }}>
                <ListGroupItem tag="a" href="/cv" action>Review CVs</ListGroupItem>
                <ListGroupItem tag="a" href="/job" action>Job</ListGroupItem>
                <ListGroupItem tag="a" href="/" action>Logout</ListGroupItem>
            </ListGroup>
        );
    }
}

export default AdminHomeMenu;