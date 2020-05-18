import React from "react";
import Layout from "../../../layout/Layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import Button from "../../../components/Button/Button";
import styled from "styled-components";

const ButtonPage = () => {
  return (
    <Layout pageTitle="Knapper">
      <Row>
        <Col lg={2}>
          <Button label="Knapp" />
        </Col>
        <Col lg={3}>
          <Button icon="close" label="ikon til venstre" />
        </Col>
        <Col lg={3}>
          <Button rightIcon="arrowRight" label="ikon til høyre " />
        </Col>
        <Col lg={4}>
          <Button
            icon="close"
            rightIcon="arrowRight"
            label="ikon til venstre og høyre "
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default ButtonPage;
