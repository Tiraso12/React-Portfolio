import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import runBuddy from '../../assets/images/runbuddy.png'

export default function Project() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className=""
                    />
                </Col>
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className=""
                    /></Col>
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className=""
                    /></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className=""
                    />
                </Col>
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className=""
                    /></Col>
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className=""
                    /></Col>
            </Row>
        </Container>
    )
}