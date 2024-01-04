import React from "react";
import { Container, Row, Col, Form, Tabs, Tab } from "react-bootstrap";

const CharacterPage = () => {
  return (
    <div className="Character">
      <Form>
        <Container>
          <Row>
            <Col>Name</Col>
            <Col>Level</Col>
          </Row>
          <hr />
          <Row>
            <Col>Brawn</Col>
            <Col>HP ___</Col>
          </Row>
          <Row>
            <Col>Swift</Col>
            <Col>AS ___</Col>
          </Row>
          <Row>
            <Col>Intellect</Col>
            <Col>DS ___</Col>
          </Row>
          <Row>
            <Col>Charisma</Col>
            <Col>Move ___</Col>
          </Row>
          <Row>
            <Col>Ingenuity ☑️</Col>
            <Col>(Optional Stat Goes Here)</Col>
          </Row>
          <hr />
          <Row>
            <Col></Col>
            <Col xs={5}>
              <Tabs>
                <Tab eventKey="skills" title="Skills">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </Tab>
                <Tab eventKey="weapons" title="Weapons">
                  <p>Weapon A</p>
                  <p>Weapon B</p>
                </Tab>
                <Tab eventKey="armor" title="Armor">
                  <p>Armor A [4/-1]</p>
                  <p>Armor B [2/0] </p>
                </Tab>
                <Tab eventKey="items" title="Items">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </Tab>
                <Tab eventKey="lore" title="Lore & FP">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </p>
                </Tab>
              </Tabs>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default CharacterPage;
