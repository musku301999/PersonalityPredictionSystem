import React from 'react'
import { Card,CardBody } from 'reactstrap'

function Header(){
    return(
        <div>
            <Card className="my-1" style={{width:"100%",backgroundColor:"blueviolet",color:"whitesmoke",height:"100%"}}>
                <CardBody>
                <h1 className="text-center my-2">
                Personality Prediction System

            </h1>
           
                </CardBody>
            </Card>
            
        </div>


    )
}
export default Header