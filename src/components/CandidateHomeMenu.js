import React from 'react'
import { ListGroup, ListGroupItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";
import { useState } from 'react';

const CandidateHomeMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <ListGroup style={{ height: "100%" }}>
      <ListGroupItem tag="a" href="/home" action>Home</ListGroupItem>
      <ListGroupItem tag="a" href="#!" action>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret color="white">
            Cv
      </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Cv</DropdownItem>
            <DropdownItem tag="a" href="/create-cv">Create Cv</DropdownItem>
            <DropdownItem tag="a" href="/view-cv">View Cv</DropdownItem>

          </DropdownMenu>
        </Dropdown>
      </ListGroupItem>
      <ListGroupItem tag="a" href="/apply-job" action>Apply Job</ListGroupItem>
      <ListGroupItem tag="a" href="#!" action>View Results</ListGroupItem>
      <ListGroupItem tag="a" href="/logout" action>Logout</ListGroupItem>

    </ListGroup>
  )
}
export default CandidateHomeMenu