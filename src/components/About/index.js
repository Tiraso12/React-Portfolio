import React from "react";
import './index.css'
import photo from '../../assets/images/photo.jfif'

import { Row, Col, Image } from "react-bootstrap";

export default function About() {
    return (
        <Row className="tall">
            <Col className="pt-5 pb-5  text-center align-self-center">
                <h1>I'm Gonzalo,</h1>
                <h3>Learning Web Development!!</h3>
            </Col>
            <Col className="pt-5 pb-5  text-center align-self-center">
                <Image
                    src={photo}
                    rounded />


            </Col>
        </Row>

    )
}