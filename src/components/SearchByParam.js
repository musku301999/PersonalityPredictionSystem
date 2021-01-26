// import React, { Fragment, useState } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Col, Row, Button } from 'reactstrap';

// const SearchByParam = (props) => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggle = () => setDropdownOpen(prevState => !prevState);

//     const handleSelect=(e)=>{
//         console.log(e);
//       }

//     return (
//         <Fragment>
//             <Row>
//                 <Col md={4} className='ml-5'>
//                     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//                         <DropdownToggle caret>
//                             Search By
//                         </DropdownToggle>
//                         <DropdownMenu>
//                             <DropdownItem tag='a' href='#' active>Id</DropdownItem>
//                             <DropdownItem>Email</DropdownItem>
//                             <DropdownItem>Experience</DropdownItem>
//                             <DropdownItem>Skill</DropdownItem>
//                             <DropdownItem>Qualification</DropdownItem>
//                         </DropdownMenu>
//                     </Dropdown>
//                 </Col>
//                 <Col md={4} className='mr-5'><Input> </Input>
//                 </Col>
//                 <Col className='mr-5'><Button tag='a' href='/cv' outline>Refresh</Button>
//                 </Col>
//             </Row>
//         </Fragment >

//     );
// }

// export default SearchByParam;