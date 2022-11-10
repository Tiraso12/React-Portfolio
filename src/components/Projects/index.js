import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import './index.css';


import runBuddy from '../../assets/images/runbuddy.png'
import game from '../../assets/images/game.png'
import notetaker from '../../assets/images/notetaker.png'
import teamroster from '../../assets/images/teamroster.png'
import weather from '../../assets/images/weather.png'

export default function Project() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col className="">
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className="border border-dark"
                    />
                </Col>
                <Col>
                    <Image
                        src={game}
                        fluid
                        rounded
                        className="border border-dark"
                    /></Col>
                <Col>
                    <Image
                        src={notetaker}
                        fluid
                        rounded
                        className="border border-dark"
                    /></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col>
                    <Image
                        src={teamroster}
                        fluid
                        rounded
                        className="border border-dark"
                    />
                </Col>
                <Col>
                    <Image
                        src={weather}
                        fluid
                        rounded
                        className="border border-dark"
                    /></Col>
                <Col>
                    <Image
                        src={runBuddy}
                        fluid
                        rounded
                        className="border border-dark"
                    /></Col>
            </Row>
        </Container>
    )
}