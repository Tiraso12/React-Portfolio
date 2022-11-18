import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import './index.css';


import runBuddy from '../../assets/images/runbuddy.png'
import game from '../../assets/images/game.png'
import notetaker from '../../assets/images/notetaker.png'
import teamroster from '../../assets/images/teamroster.png'
import weather from '../../assets/images/weather.png'
import octo from '../../assets/images/webpage.jpg'
import second from '../../assets/images/secondGame.png'

export default function Project() {
    useState(false)
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col className="">
                    <a href="https://github.com/Tiraso12/run-buddy" target="new_blank" >
                        <Image
                            src={runBuddy}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://pure-refuge-94024.herokuapp.com/" target="new_blank">

                        <Image
                            src={game}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://secure-oasis-39485.herokuapp.com/" target="new_blank">
                        <Image
                            src={notetaker}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
            </Row>
            <Row className="px-4 my-5">
                <Col>
                    <a href="https://github.com/Tiraso12/Team-Roster" target="new_blank">
                        <Image
                            src={teamroster}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://tiraso12.github.io/Whats-the-weather-/" target="new_blank">
                        <Image
                            src={weather}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://tiraso12.github.io/challenge-1-horiseon-page/#social-media-marketing" target="new_blank">

                        <Image
                            src={octo}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
                <Col>
                    <a href="https://tranquil-island-69050.herokuapp.com/" target="new_blank">

                        <Image
                            src={second}
                            fluid
                            rounded
                            className="border border-dark"
                        />
                    </a>
                </Col>
            </Row>
        </Container >
    )
}