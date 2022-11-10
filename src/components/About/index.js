import React from "react";
import './index.css'

import { Container, Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <Container >
            <Row>
                <Col className="pt-5 pb-5 text-center">
                    <h1>I'm Gonzalo,</h1>
                    <h3>Web Developer</h3>
                </Col>
                <Col>
                    <p className="text-center pt-5">lorem askdjsakdjsaj jd sopadpsa <br />djsapd ap djsapjdp sajjdpaspjpdaspj pdoajspjdasjodj <br />poasjdpojpsa jdpojaspjd pasjdp ojaspj<br /> dasjdj asj</p>
                </Col>
            </Row>

        </Container>
    )
}